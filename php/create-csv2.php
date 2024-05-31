<?php

/*
 * ==================================================================
 * Execute operations upon form submit (store form data in date.csv).
 * ==================================================================
 */
if (isset($_POST['submitMinigame2'])) {
    // Collect the form data.
    $minigame = isset($_POST['minigameMg2']) ? $_POST['minigameMg2'] : '';
    $m88username = isset($_POST['m88usernameMg2']) ? $_POST['m88usernameMg2'] : '';
    $answer1 = isset($_POST['answer1Mg2']) ? $_POST['answer1Mg2'] : '';
    $answer2 = isset($_POST['answer2Mg2']) ? $_POST['answer2Mg2'] : '';

    // Check if first name is set.
    // if ($timestamp == '') {
    //     $errors[] = 'First name is required';
    // }

    // Check if last name is set.
    // if ($minigame == '') {
    //     $errors[] = 'Last name is required';
    // }

    // Validate the phone number.
    // $pattern = '/^(?:\(\+?44\)\s?|\+?44 ?)?(?:0|\(0\))?\s?(?:(?:1\d{3}|7[1-9]\d{2}|20\s?[78])\s?\d\s?\d{2}[ -]?\d{3}|2\d{2}\s?\d{3}[ -]?\d{4})$/';
    // if (!preg_match($pattern, $phone)) {
    //     $errors[] = 'Please enter a valid phone number';
    // }

    // If no errors carry on.
    if (!isset($errors)) {
        // The header row of the CSV.
        $header = "Timestamp,Mini Game,M88 Username,Answer 1,Answer 2\n";
        // The data of the CSV.
        date_default_timezone_set('Asia/Manila');
        $data = date("Md-Y h:i:sA").",$minigame,$m88username,$answer1,$answer2\n";

        header('Location: index.php#submitted');

        /*
         * The file name of the CSV.
         * 
         * NB: __DIR__ describes the location in which this file resides.
         * To go up one level use "dirname(__DIR__)".
         * 
         * NB: You will not be able to append data to an existing file if you use time components 
         * (hour, minutes, seconds) inside the file name. Imagine that you are creating a file 
         * right now, at 12:18:43 o'clock. Then the file will be named "formdata-09-01-18-12-38-43.csv".
         * One second later you will not be able to append data to it because the time will be "12:38:44".
         * Then a new file "formdata-09-01-18-12-38-44.csv" will be created.
         * 
         * I suggest using only the date whithout the time in the file name.
         * 
         * @todo Read the comment above!
         */
        // $fileName = dirname(__DIR__) . "/minigame-" . date("y-m-d") . ".csv";
        $fileName = dirname(__DIR__) . "/minigame-2.csv";

        /*
         * Create the CSV file.
         * If file exists, append the data to it. Otherwise create the file.
         */
        if (file_exists($fileName)) {
            // Add only data. The header is already added in the existing file.
            file_put_contents($fileName, $data, FILE_APPEND);
        } else {
            // Add CSV header and data.
            file_put_contents($fileName, $header . $data);
        }
    }
}