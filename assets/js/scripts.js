jQuery(function () {
  "use strict";

  console.log(window.location.href);

  const urlLang = window.location.href;
  let urlParamLang = null;

  // var urlParams = new URLSearchParams(window.location.search);
  // var urlParamLang = urlParams.get("lang");
  let langJson;

  if (urlLang.includes("maEN") || urlLang.includes("maen")) {
    urlParamLang = "en";
    $(".header__langs__list__en").addClass("act");
  }
  if (urlLang.includes("maCN") || urlLang.includes("macn")) {
    urlParamLang = "cn";
    $(".header__langs__list__cn").addClass("act");
  }
  if (urlLang.includes("maID") || urlLang.includes("maid")) {
    urlParamLang = "id";
    $(".header__langs__list__id").addClass("act");
  }
  if (urlLang.includes("maJP") || urlLang.includes("majp")) {
    urlParamLang = "jp";
    $(".header__langs__list__jp").addClass("act");
  }
  if (urlLang.includes("maKR") || urlLang.includes("makr")) {
    urlParamLang = "kr";
    $(".header__langs__list__kr").addClass("act");
  }
  if (urlLang.includes("maTH") || urlLang.includes("math")) {
    urlParamLang = "th";
    $(".header__langs__list__th").addClass("act");
  }
  if (urlLang.includes("maVN") || urlLang.includes("mavn")) {
    urlParamLang = "vn";
    $(".header__langs__list__vn").addClass("act");
  }

  // console.log(urlParamLang);
  if (urlParamLang) {
    if (urlParamLang != 'id' && urlParamLang != 'vn' && urlParamLang != 'cn' && urlParamLang != 'th' && urlParamLang != 'kr' && urlParamLang != 'jp') {
      urlParamLang = "en";
    }
    fetchLangJson(urlParamLang);
  } else if (urlParamLang == null || urlParamLang == "") {
    // fetchLangJson("en");
    $.get(
      "https://ipinfo.io/?token=20f64d691c293a",
      function (response) {
        // console.log(response);;
        var detectedCountry = response.country;
        console.log(detectedCountry);
        switch (detectedCountry.toLowerCase()) {
          case 'id':
            langJson = 'id';
            break;
          case 'th':
            langJson = 'th';
            break;
          case 'vn':
            langJson = 'vn';
            break;
          case 'kr':
            langJson = 'kr';
            break;
          case 'jp':
            langJson = 'jp';
            break;
          case 'cn':
            langJson = 'cn';
            break;
          default:
            langJson = 'en';
            break;
        }
        urlParamLang = langJson;
        // console.log(urlParamLang)
        fetchLangJson(urlParamLang);
      },
      "jsonp"
    );
  } else {
    fetchLangJson("en");
  }

  function fetchLangJson(country) {
    $(".header__langs__default").prepend(
      '<img src="../assets/img/langs/flag-' + country + '.svg">'
    );
    $("body").attr("data-lang", country);
    $("body").addClass(country);

    let urlJson;

    urlJson = "../assets/js/langcontent/" + country + ".json"

    $.ajax({
      url: urlJson,
      type: "GET",
      cache: false,
      dataType: "json",
      success: function (result) {
        Object.entries(result).map((obj) => {
          const key = obj[0];
          const value = obj[1];
          $('[data-lang="' + key + '"]').attr("lang", value);
          $('[data-txt="' + key + '"]').html(value);
          $('[data-cta="' + key + '"]').attr("href", value);
          $('[data-placeholder="' + key + '"]').attr("placeholder", value);
          $('[data-value="' + key + '"]').attr("value", value);
          $('[data-href="' + key + '"]').attr("href", value);
          $('[data-src="' + key + '"]').attr("src", value);
        });
      },
      error: function () {
        alert("No");
      },
    });
  }

  $(".header__langs__default").on("mouseenter", function (e) {
    e.stopPropagation();
    $(".header__langs__default, .header__langs__list").addClass("act");
  });
  $(".header__langs__default").on("click", function (e) {
    e.stopPropagation();
    $(".header__langs__default, .header__langs__list").addClass("act");
  });

  $(".header__langs__list").on("mouseleave", function (e) {
    e.stopPropagation();
    $(this).removeClass("act");
    $(".header__langs__default").removeClass("act");
  });

  $("body").on("click", function (e) {
    e.stopPropagation();
    $(".header__langs__default, .header__langs__list").removeClass("act");
  });

  // tnc content
  const tncContent = document.querySelector('.tnc__content');
  setTimeout(function () {
    if ($('body').attr('data-lang') === 'en') {
      tncContent.innerHTML = tncEN;
    }
    if ($('body').attr('data-lang') === 'id') {
      tncContent.innerHTML = tncID;
    }
    if ($('body').attr('data-lang') === 'cn') {
      tncContent.innerHTML = tncCN;
    }
    // if ( $('body').attr('data-lang') === 'mycn' ) {
    // 	tncContent.innerHTML = tncMYCN;
    // }
    if ($('body').attr('data-lang') === 'th') {
      tncContent.innerHTML = tncTH;
    }
    if ($('body').attr('data-lang') === 'vn') {
      tncContent.innerHTML = tncVN;
    }
    if ($('body').attr('data-lang') === 'kr') {
      tncContent.innerHTML = tncKR;
    }
    if ($('body').attr('data-lang') === 'jp') {
      tncContent.innerHTML = tncJP;
    }
    // if ( $('body').attr('data-lang') === 'in' ) {
    // 	tncContent.innerHTML = tncIN;
    // }
  }, 1000)

  function toggleTnc() {
    $('.tnc__head').toggleClass("active");
    $('.to-top').toggleClass("active");
    $('.tnc__content').slideToggle();
  }
  $('.to-tnc, .tnc__head').click(function () {
    toggleTnc();
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".tnc").offset().top
    }, 500);
  });
  // $(".to-top .btn").click(function() {
  // 	toggleTnc();
  // 	$([document.documentElement, document.body]).animate({
  // 			scrollTop: $("body").offset().top 
  // 	}, 500);
  // });

  // feature maxheight 
  
  function setTriangleHeight(){
    let featureHeight = $(".feature").innerHeight();
    let featureWidth = $(".feature").innerWidth();
    console.log(featureHeight);

    $(".feature--1, .feature--3").css("--triRightDown", featureHeight + "px 0 0 16px");
    $(".feature--2, .feature--4").css("--triLeftUp", "0 16px " + featureHeight + "px 0");
    $(".feature--2, .feature--4").css("--triRightUp", featureHeight + "px 16px 0 0");
    $(".feature--3, .feature--5").css("--triLeftDown", "0 0 " + featureHeight + "px 16px");

    $(".feature--1, .feature--3").css("--triBottomLeft", "24px " + featureWidth + "px 0 0");
    $(".feature--2, .feature--4").css("--triTopRight", "0 0 24px " + featureWidth + "px");
    $(".feature--2, .feature--4").css("--triBottomRight", "0 " + featureWidth + "px 24px 0");
    $(".feature--3, .feature--5").css("--triTopLeft", "24px 0 0 "+ featureWidth +"px");
  }
  setTimeout(function(){
    setTriangleHeight();
  }, 500);
  $(window).on("resize", function(){
    setTriangleHeight();
  });

});