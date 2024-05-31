<?php
/*
 * ================
 * Error reporting.
 * ================
 */
error_reporting(E_ALL);
ini_set('display_errors', 1); // SET IT TO 0 ON A LIVE SERVER !!!

/*
 * ==================================================================
 * Execute operations upon form submit (store form data in date.csv).
 * ==================================================================
 */
// include 'php/create-csv1.php';
// include 'php/create-csv2.php';
// include 'php/create-csv3.php';
include 'php/create-betid.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <?php
  $url = $_SERVER['SERVER_NAME'] . $_SERVER['PHP_SELF'];
  // echo $url;
  $config = [
    'localhost/m88youhui.com/index.php' => [
      'ga_code' => 'G-409YSJ90JS',
    ],
    'm88youhui.com/index.php' => [
      'ga_code' => 'G-409YSJ90JS',
    ],
  ];
  ?>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo $config[$url]['ga_code']; ?>"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', '<?php echo $config[$url]['ga_code']; ?>');
  </script>
  <title data-txt="title">优惠申请表单</title>
  <meta charset="utf-8" />
  <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, shrink-to-fit=no" name="viewport" />

  <meta name="robots" content="noindex, follow" />

  <link rel="shortcut icon" href="assets/images/favicon-16x16.png" type="image/x-icon">

  <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />
  <link rel="stylesheet" href="assets/css/style.css" />
  <link rel="stylesheet" href="assets/css/misc.css" />

  <script type="text/javascript" src="assets/js/jquery-3.6.0.min.js"></script>
  <script type="text/javascript" src="assets/js/jquery-migrate-3.3.2.min.js"></script>
  <script type="text/javascript" src="assets/js/jquery.validate.min.js"></script>
  <script type="text/javascript" src="assets/js/swiper-bundle.min.js"></script>

</head>

<body class="registered mini-game mini-game--1">