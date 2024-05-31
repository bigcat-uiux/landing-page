<!DOCTYPE html>
<html lang="en">
<head>
<?php 
    $url = $_SERVER['SERVER_NAME'].$_SERVER['PHP_SELF'];
    // echo $url;
    $config = [
      'localhost/UXUI-1277/index.php' => [
        'ga_code' => '',
        'aff_link' => 'https://www.m88globalpartners.com',
        'sports_link' => '',
        'livecasino_link' => '',
        'casino_link' => '',
        'knlt_link' => ''
      ],
      'clubthreesix.com/spens/UXUI-1277/index.php' => [
        'ga_code' => '',
        'aff_link' => 'https://www.m88globalpartners.com',
        'sports_link' => '',
        'livecasino_link' => '',
        'casino_link' => '',
        'knlt_link' => ''
      ],
      'ipl-sports.com/index.php' => [
        'ga_code' => '',
        'aff_link' => 'https://www.m88globalpartners.com',
        'sports_link' => '',
        'livecasino_link' => '',
        'casino_link' => '',
        'knlt_link' => ''
      ],
    ];
  ?>

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo $config[$url]['ga_code']; ?>"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '<?php echo $config[$url]['ga_code']; ?>');
  </script>
	<title data-txt="title"></title>
	<meta charset="utf-8" />
	<meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />

	<link rel="shortcut icon" href="assets/images/favicon-16x16.png" type="image/x-icon">

	<link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />
	<link rel="stylesheet" href="assets/css/style.css" />
	<link rel="stylesheet" href="assets/css/misc.css" />

	<script type="text/javascript" src="assets/js/jquery-3.6.0.min.js"></script>
	<script type="text/javascript" src="assets/js/jquery-migrate-3.3.2.min.js"></script>
	<script type="text/javascript" src="assets/js/swiper-bundle.min.js"></script>
</head>
<body class="registered">