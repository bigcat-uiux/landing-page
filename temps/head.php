<!DOCTYPE html>
<html lang="en">

<head>
  <?php
  $url = $_SERVER['SERVER_NAME'] . $_SERVER['PHP_SELF'];
  // echo $url;
  // $config = [
  //   'localhost/m88.io/maEN/index.php' => [
  //     'ga_code' => '',
  //     'aff_link' => '',
  //   ],
  // ];
  if (strpos($url, "maEN") || strpos($url, "maen")) {
    $gaCode = "GAcodeEN";
    $homeLink = "https://www.m88.io/";
    $affLink = "https://m88.io/signup?aff=fswfpquo";
  }
  if (strpos($url, "maTH") || strpos($url, "math")) {
    $gaCode = "GAcodeTH";
    $homeLink = "https://www.m88.io/th/";
    $affLink = "https://m88.io/signup?aff=fswfpquo";
  }
  if (strpos($url, "maJP") || strpos($url, "majp")) {
    $gaCode = "GAcodeJP";
    $homeLink = "https://www.m88.io/ja/";
    $affLink = "https://m88.io/signup?aff=fswfpquo";
  }
  if (strpos($url, "maKR") || strpos($url, "makr")) {
    $gaCode = "GAcodeKR";
    $homeLink = "https://www.m88.io/ko/";
    $affLink = "https://m88.io/signup?aff=fswfpquo";
  }
  if (strpos($url, "maID") || strpos($url, "maid")) {
    $gaCode = "GAcodeID";
    $homeLink = "https://www.m88.io/id/";
    $affLink = "https://m88.io/signup?aff=fswfpquo";
  }
  if (strpos($url, "maVN") || strpos($url, "mavn")) {
    $gaCode = "GAcodeVN";
    $homeLink = "https://www.m88.io/vn/";
    $affLink = "https://m88.io/signup?aff=fswfpquo";
  }
  if (strpos($url, "maCN") || strpos($url, "macn")) {
    $gaCode = "GAcodeCN";
    $homeLink = "https://www.m88.io/cn/";
    $affLink = "https://m88.io/signup?aff=fswfpquo";
  }

  ?>

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo $gaCode; ?>"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', '<?php echo $gaCode; ?>');
  </script>
  <title data-txt="title">100% Sports Welcome Bonus | M88.io</title>
  <meta charset="utf-8" />
  <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />

  <link rel="apple-touch-icon" sizes="180x180" href="../assets/img/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/img/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/img/favicon/favicon-16x16.png">
  <link rel="manifest" href="../assets/img/favicon/site.webmanifest">
  <link rel="mask-icon" href="../assets/img/favicon/safari-pinned-tab.svg" color="#5bbad5">
  <link rel="shortcut icon" href="../assets/img/favicon/favicon.ico">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="msapplication-config" content="../assets/img/favicon/browserconfig.xml">
  <meta name="theme-color" content="#ffffff">

  <link rel="stylesheet" href="../assets/css/style.css" />

  <script type="text/javascript" src="../assets/js/jquery-3.7.1.min.js"></script>
  <script type="text/javascript" src="../assets/js/scripts.js"></script>
</head>