<section class="tnc promo">
  <div class="inner">

    <h3 class="tnc__head promo__head" data-txt="promos"></h3>

    <div class="promo__content">
      <div class="swiper-holder">
        <div class="swiper swiper--promos">
          <div class="swiper-wrapper">

            <?php
            if ($_SERVER['QUERY_STRING'] === "lang=cn" || $_SERVER['QUERY_STRING'] === "lang=my") {
              $promoImg1 = "./assets/img/promo/Welcome-Bonus-Banner_648x378_CNY.jpg";
              $promoImg2 = "./assets/img/promo/CRTVD-1141_2456-Esports-Daily_648x378_CN.jpg";
              $promoImg3 = "./assets/img/promo/CRTVD-1141_2652_Esports-Lottery_648x378_CN.jpg";
              $promoImg4 = "./assets/img/promo/CRTVD-1141_985_LOL-World-Challenge_648x378_CN.jpg";
              $promoImg5 = "./assets/img/promo/EN-CRTVD-2392-Esports-PromoCard-G2FreebetBanner-Phase7_648x378.jpg";
              $promoImg6 = "./assets/img/promo/CRTVD-975_ESPORTS-CASHBACK_648x378_CN.jpg";
              $promoImg7 = "./assets/img/promo/CRTVD-1254_RET_ESPORTS_WIN-STREAK-BONUS_648x378_CN-min.jpg";
              $promoImg8 = "./assets/img/promo/CRTVD-2031_Esports-Team_Promo-Card-Resize-Banner_648x378_CN.jpg";
            }
            if ($_SERVER['QUERY_STRING'] === "lang=en" || $_SERVER['QUERY_STRING'] === "") {
              $promoImg1 = "./assets/img/promo/Welcome-Bonus-Banner_648x378_EN.jpg";
              $promoImg2 = "./assets/img/promo/CRTVD-1141_2456-Esports-Daily_648x378_EN.jpg";
              $promoImg3 = "./assets/img/promo/CRTVD-1141_2652_Esports-Lottery_648x378_EN.jpg";
              $promoImg4 = "./assets/img/promo/CRTVD-1141_985_LOL-World-Challenge_648x378_EN.jpg";
              $promoImg5 = "./assets/img/promo/EN-CRTVD-2392-Esports-PromoCard-G2FreebetBanner-Phase7_648x378.jpg";
              $promoImg6 = "./assets/img/promo/CRTVD-975_ESPORTS-CASHBACK_648x378_EN.jpg";
              $promoImg7 = "./assets/img/promo/CRTVD-1254_RET_ESPORTS_WIN-STREAK-BONUS_648x378_EN-min.jpg";
              $promoImg8 = "./assets/img/promo/CRTVD-2031_Esports-Team_Promo-Card-Resize-Banner_648x378_EN.jpg";
            }
            if ($_SERVER['QUERY_STRING'] === "lang=id") {
              $promoImg1 = "./assets/img/promo/Welcome-Bonus-Banner_648x378_ID.jpg";
              $promoImg2 = "./assets/img/promo/CRTVD-1141_2456-Esports-Daily_648x378_ID.jpg";
              $promoImg3 = "./assets/img/promo/CRTVD-1141_2652_Esports-Lottery_648x378_ID.jpg";
              $promoImg4 = "./assets/img/promo/CRTVD-1141_985_LOL-World-Challenge_648x378_ID.jpg";
              $promoImg5 = "./assets/img/promo/MY-CRTVD-2392-Esports-PromoCard-G2FreebetBanner-Phase7_648x378.jpg";
              $promoImg6 = "./assets/img/promo/CRTVD-975_ESPORTS-CASHBACK_648x378_ID.jpg";
              $promoImg7 = "./assets/img/promo/CRTVD-1254_RET_ESPORTS_WIN-STREAK-BONUS_648x378_ID-min.jpg";
              $promoImg8 = "./assets/img/promo/CRTVD-2031_Esports-Team_Promo-Card-Resize-Banner_648x378_ID.jpg";
            }
            if ($_SERVER['QUERY_STRING'] === "lang=th") {
              $promoImg1 = "./assets/img/promo/Welcome-Bonus-Banner_648x378_TH.jpg";
              $promoImg2 = "./assets/img/promo/CRTVD-1141_2456-Esports-Daily_648x378_TH.jpg";
              $promoImg3 = "./assets/img/promo/CRTVD-1141_2652_Esports-Lottery_648x378_TH.jpg";
              $promoImg4 = "./assets/img/promo/CRTVD-1141_985_LOL-World-Challenge_648x378_TH.jpg";
              $promoImg5 = "./assets/img/promo/TH-CRTVD-2392-Esports-PromoCard-G2FreebetBanner-Phase7_648x378.jpg";
              $promoImg6 = "./assets/img/promo/CRTVD-975_ESPORTS-CASHBACK_648x378_TH.jpg";
              $promoImg7 = "./assets/img/promo/CRTVD-1254_RET_ESPORTS_WIN-STREAK-BONUS_648x378_TH-min.jpg";
              $promoImg8 = "./assets/img/promo/CRTVD-2031_Esports-Team_Promo-Card-Resize-Banner_648x378_TH.jpg";
            }
            if ($_SERVER['QUERY_STRING'] === "lang=vn") {
              $promoImg1 = "./assets/img/promo/Welcome-Bonus-Banner_648x378_VN.jpg";
              $promoImg2 = "./assets/img/promo/CRTVD-1141_2456-Esports-Daily_648x378_VN.jpg";
              $promoImg3 = "./assets/img/promo/CRTVD-1141_2652_Esports-Lottery_648x378_VN.jpg";
              $promoImg4 = "./assets/img/promo/CRTVD-1141_985_LOL-World-Challenge_648x378_VN.jpg";
              $promoImg5 = "./assets/img/promo/VN-CRTVD-2392-Esports-PromoCard-G2FreebetBanner-Phase7_648x378.jpg";
              $promoImg6 = "";
              $promoImg7 = "./assets/img/promo/CRTVD-1254_RET_ESPORTS_WIN-STREAK-BONUS_648x378_VN-min.jpg";
              $promoImg8 = "./assets/img/promo/CRTVD-2031_Esports-Team_Promo-Card-Resize-Banner_648x378_VN.jpg";
            }
            ?>

            <div class="swiper-slide">
              <a data-href="join-link" class="swiper--promos__card">
                <img src="<?php echo $promoImg1; ?>" width="414" height="242" alt="" loading="lazy">
              </a>
            </div>
            <div class="swiper-slide">
              <a data-href="join-link" class="swiper--promos__card">
                <img src="<?php echo $promoImg2; ?>" width="414" height="242" alt="" loading="lazy">
              </a>
            </div>
            <div class="swiper-slide">
              <a data-href="join-link" class="swiper--promos__card">
                <img src="<?php echo $promoImg3; ?>" width="414" height="242" alt="" loading="lazy">
              </a>
            </div>
            <!-- <div class="swiper-slide">
              <a data-href="join-link" class="swiper--promos__card">
                <img src="<?php // echo $promoImg4; ?>" width="414" height="242" alt="" loading="lazy">
              </a>
            </div> -->
            <div class="swiper-slide">
              <a data-href="join-link" class="swiper--promos__card">
                <img src="<?php echo $promoImg5; ?>" width="414" height="242" alt="" loading="lazy">
              </a>
            </div>
            <?php // if($_SERVER['QUERY_STRING'] === "lang=vn" || $_SERVER['QUERY_STRING'] === "lang=my"){ 
            ?>
            <!-- empty -->
            <?php // }else{ 
            ?>
            <!-- <div class="swiper-slide">
              <a data-href="join-link" class="swiper--promos__card">
                <img src="<?php // echo $promoImg6; 
                          ?>" width="414" height="242" alt="" loading="lazy">
              </a>
            </div> -->
            <?php // } 
            ?>
            <!-- <div class="swiper-slide">
              <a data-href="join-link" class="swiper--promos__card">
                <img src="<?php // echo $promoImg7; 
                          ?>" width="414" height="242" alt="" loading="lazy">
              </a>
            </div> -->
            <div class="swiper-slide">
              <a data-href="join-link" class="swiper--promos__card">
                <img src="<?php echo $promoImg8; ?>" width="414" height="242" alt="" loading="lazy">
              </a>
            </div>

          </div>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

        </div>
      </div>
    </div>


    <!-- <ol class="tnc__content">
    <li data-txt="tnc-li1"></li>
    <li data-txt="tnc-li2"></li>
    <li data-txt="tnc-li3"></li>
    <li data-txt="tnc-li4"></li>
    <li data-txt="tnc-li5"></li>
    <li data-txt="tnc-li6"></li>
    <li data-txt="tnc-li7"></li>
    <li data-txt="tnc-li8"></li>
    <li data-txt="tnc-li9"></li>
    <li data-txt="tnc-li10"></li>
    <li data-txt="tnc-li11"></li>
    <li data-txt="tnc-li12"></li>
    <li data-txt="tnc-li13"></li>
    <li data-txt="tnc-li14"></li>
    <li data-txt="tnc-li15"></li>
  </ol> -->

  </div>
</section>