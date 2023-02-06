import express from "express";
import User from "../../schemas/UserSchema.js";
import { UserLogin } from "../middleware/UserLogin.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";
import { emailLayout, handleEmailTitleLang } from "../../shared/emailLayout.js";

const router = express.Router();

const handleSaveUser = async (payload) => {
  try {
    const user = new User(payload);

    await user.save();
  } catch (e) {
    console.error(`#ERR -> ${e.message}`.bgRed);
  }
};

router.post("/register/:lang", (req, res) => {
  const { lang } = req.params;
  const { firstName, lastName, pass, birthDate, email } = req.body;

  User.findOne({ email }, async (err, user) => {
    if (err)
      res.status(500).json({
        ok: false,
        res: "Rejestracja jest niemożliwa ze względu na problemy techniczne",
      });
    else {
      if (user)
        res.status(400).json({
          ok: false,
          res: "Użytkownik o podanym adresie email już istnieje!",
        });
      else {
        const salt = await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(pass, salt);
        const curDate = new Date();
        const { FRONTEND_URL, BACKEND_URL, USER, PASS } = process.env;

        const transporter = nodemailer.createTransport({
          host: "poczta.o2.pl",
          port: 465,
          secure: true,
          auth: {
            user: USER,
            pass: PASS,
          },
        });

        const user = {
          firstName,
          lastName,
          img: BACKEND_URL + "/images/guest.png",
          pass: hashedPass,
          birthDate: {
            day: birthDate.day,
            month: birthDate.month,
            year: birthDate.year,
          },
          since: {
            day: curDate.getDay(),
            month: curDate.getMonth(),
            year: curDate.getYear(),
          },
          email,
          desc: "Nowy użytkownik platformy SENIORity",
          meetings: 0,
          comments: 0,
          articles: 0,
          tutorials: 0,
          role: 0,
          favorites: [],
          validationToken: uuidv4().toString(),
          isUserVerified: false,
        };

        handleSaveUser(user);

        let mail = {
          from: USER,
          to: email,
          subject: handleEmailTitleLang({ lang }),
          html: emailLayout({
            lang,
            FRONTEND_URL,
            token: user.validationToken,
          }),
        };

        transporter.sendMail(mail, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log("Wiadomość została wysłana: " + info.response);
          }
        });

        res.status(200).json({
          ok: true,
          res: "Rejestracja udana. Wiadomość z linkiem do aktywowania konta została wysłana na adres email",
        });
      }
    }
  });
});

router.patch("/verify/:token", async (req, res) => {
  const { token } = req.params;

  try {
    const user = await User.findOneAndUpdate(
      { validationToken: token },
      { isUserVerified: true }
    );

    if (user !== null)
      res.status(200).json({
        ok: true,
        res: "Konto zostało zweryfikowane. Możesz teraz się zalogować",
      });
    else
      res.status(404).json({
        ok: false,
        res: "Adres e-mail nie jest przypisany do żadnego konta!",
      });
  } catch (e) {
    console.error(e);

    res.status(500).json({
      ok: false,
      res: "Weryfikacja konta jest niemożliwa z przyczyn technicznych",
    });
  }

  // User.findOneAndUpdate({ token }, (err, user) => {
  //   if (err)
  //     res.status(404).json({
  //       ok: false,
  //       res: "Adres e-mail nie jest przypisany do żadnego konta!",
  //     });

  //   user.isUserVerified = true;

  //   console.log(user);

  //   res.status(200).json({
  //     ok: true,
  //     res: "Konto zostało zweryfikowane, możesz się teraz zalogować",
  //   });
  // });
});

router.get("/login", UserLogin, (req, res) => {
  // TODO: System logowania

  /*
    Tipy: do wysyłania requestów do serwera świetnie się nadaje aplikacja Postman, możesz ją ściągnąć pod tym adresem: https://www.postman.com/downloads/

    System wykorzystuje middleware, który nazywa się UserLogin. Sprawdza on czy użytkownik podał prawidłowe dane logowania (jeśli tak - ustawia req.ok na true, jeśli nie - ustawia req.ok na false)

    System ma za zadanie:
    1. znaleźć użytkownika w bazie danych (zrób to wykorzystując metodę User.findById(req.body.email)), jeżeli nie znajdzie - serwer zwraca błąd 404 (Użytkownika nie znaleziono w bazie danych)
    2. Jeżeli znaleziono użytkownika, porównaj hasło wprowadzone przez klienta z hasłem znalezionego użytkownika metodą bcrypt.compare(<hasło w req.body.password>, <hasło znalezionego usera w bazie danych>) - wszystkie dependencies typu bcrypt, jwt, mongoose już zainstalowałem - możesz śmiało z nich korzystać;
    3. W przypadku gdy hasła nie są identyczne, zwróć błąd HTTP 401 (Unauthorized), w przeciwnym przypadku ustaw req.ok na "true"
    4. jeżeli logowanie powiodło się, utwórz token dla tego usera za pomocą metody jwt.sign(), a następnie wyślij ten token oraz kod HTTP 200 (OK), jeśli logowanie nie powiodło się, zwróć błąd HTTP 401 (Unauthorized)

    Po skończonej pracy, zrób commit zmian w następujący sposób:
    1. wejdź w konsolę, i przejdź do folderu ./server
    2. dodaj pliki do commitu stosując komendę "git add ."
    3. zrób commita komendą "git commit -m '<treść wiadomości>'"
    4. wrzuć zmiany na githuba komendą "git push -u origin main"

    ! Powodzonka <3
  */

  //! Jeżeli udało się zalogować usera
  if (req.ok) {
    //! const token = <tutaj tworzysz token dla użytkownika>
    // res.status(200).json({token, success: true}); //! W odpowiedzi z serwera zwracasz token
  }

  //! Jeżeli nie udało się zalogować usera
  // res.status(401).json({ success: false });
});

export default router;
