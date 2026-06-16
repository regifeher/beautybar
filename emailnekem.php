<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $uzenet = $_POST['uzenet'];

    $to = "regi.feher@reginafeher.nhely.hu";
    $subject = "Új üzenet a weboldalról";
    $headers = "From: $email\r\nReply-To: $email";

    $body = "Feladó: $email\n\nÜzenet:\n$uzenet";

    if (mail($to, $subject, $body, $headers)) {
        echo "Köszönöm az üzenetet! Hamarosan válaszolok.";
    } else {
        echo "Hiba történt az üzenet küldése közben. Kérjük, próbálja újra később.";
    }
} else {
    echo "Hibás kérés.";
}
?>