<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set the recipient email address
    $to = 'anniebkoop@gmail.com';

    // Set the email subject
    $subject = 'New message from contact form';

    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message\n";

    // Send the email
    mail($to, $subject, $email_message);

    // Redirect back to the contact page with a success message
    header('Location: contact.html?success=true');
    exit;
}
?>
