import express from "express";
import { UserLogin } from "../middleware/UserLogin.js";

const router = express.Router();

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
    // res.sendStatus(200).json({token, success: true}); //! W odpowiedzi z serwera zwracasz token
  }

  //! Jeżeli nie udało się zalogować usera
  // res.sendStatus(401).json({ success: false });
});

export default router;
