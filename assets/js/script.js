jQuery(function () {
  "use strict";

  // sessionStorage.clear();

  var urlParams = new URLSearchParams(window.location.search);
  var urlParamLang = urlParams.get("lang");
  var langJson;
  // console.log(urlParamLang);
  if (urlParamLang) {
    if (urlParamLang != 'id' && urlParamLang != 'vn' && urlParamLang != 'th' && urlParamLang != 'cn' && urlParamLang != 'my') {
      urlParamLang = "en";
    }
    fetchLangJson(urlParamLang);
  } else if (urlParamLang == null || urlParamLang == "") {

    fetchLangJson("en");

  } else {
    // fetchLangJson("en");

    $.get(
      "https://ipinfo.io",
      function (response) {
        console.log(response);;
        var detectedCountry = response.country;
        console.log(detectedCountry);
        switch (detectedCountry.toLowerCase()) {
          case 'id':
            langJson = 'id';
            break;
          case 'vn':
            langJson = 'vn';
            break;
          case 'th':
            langJson = 'th';
            break;
          case 'cn':
            langJson = 'cn';
            break;
          case 'my':
            langJson = 'my';
            break;
          case 'kr':
            langJson = 'kr';
            break;
          default:
            langJson = 'en';
            break;
        }
        urlParamLang = langJson;
        console.log(urlParamLang)
        fetchLangJson(urlParamLang);
      },
      "jsonp"
    );
  }

  function fetchLangJson(country) {
    
    $("body").attr("data-lang", country);
    $("body").addClass(country);

    let urlJson;

    if (window.location.href.indexOf("MF") > -1 || window.location.href.indexOf("mf") > -1) {
      urlJson = "./assets/js/langcontent/MF-" + country + ".json";
  } else if (window.location.href.indexOf("MI") > -1 || window.location.href.indexOf("mi") > -1) {
      urlJson = "./assets/js/langcontent/MI-" + country + ".json";
  } else if (window.location.href.indexOf("MD") > -1 || window.location.href.indexOf("md") > -1) {
      urlJson = "./assets/js/langcontent/MD-" + country + ".json";
  } else if (window.location.href.indexOf("MEC5FREETNC") > -1 || window.location.href.indexOf("mec5freetnc") > -1) {
      urlJson = "../assets/js/langcontent/mec5freetnc-" + country + ".json";
  } else if (window.location.href.indexOf("MEC") > -1 || window.location.href.indexOf("mec") > -1) {
      urlJson = "./assets/js/langcontent/MEC-" + country + ".json";
  } else if (window.location.href.indexOf("335CG") > -1 || window.location.href.indexOf("335cg") > -1) {
      urlJson = "./assets/js/langcontent/335CG-" + country + ".json";
  } else if (window.location.href.indexOf("WxC") > -1 || window.location.href.indexOf("wxc") > -1) {
      urlJson = "./assets/js/langcontent/WxC-" + country + ".json";
  } else if (window.location.href.indexOf("Dejet") > -1 || window.location.href.indexOf("dejet") > -1) {
      urlJson = "./assets/js/langcontent/Dejet-" + country + ".json";
  } else if (window.location.href.indexOf("AG") > -1 || window.location.href.indexOf("ag") > -1) {
      urlJson = "./assets/js/langcontent/AG-" + country + ".json";
  } else if (window.location.href.indexOf("23VN") > -1 || window.location.href.indexOf("23vn") > -1) {
      urlJson = "./assets/js/langcontent/23VN-" + country + ".json";
  } else if (window.location.href.indexOf("MT") > -1 || window.location.href.indexOf("mt") > -1) {
      urlJson = "./assets/js/langcontent/MT-" + country + ".json";
  } else if (window.location.href.indexOf("G25FREETNC") > -1 || window.location.href.indexOf("g25freetnc") > -1) {
      urlJson = "../assets/js/langcontent/g25freetnc-" + country + ".json";
  } else if (window.location.href.indexOf("FACEIT5FREETNC") > -1 || window.location.href.indexOf("faceit5freetnc") > -1) {
      urlJson = "../assets/js/langcontent/faceit5freetnc-" + country + ".json";
  } else if (window.location.href.indexOf("001") > -1) {
      urlJson = "./assets/js/langcontent/001-" + country + ".json";
  } else if (window.location.href.indexOf("002") > -1) {
      urlJson = "./assets/js/langcontent/002-" + country + ".json";
  } else if (window.location.href.indexOf("003") > -1) {
      urlJson = "./assets/js/langcontent/003-" + country + ".json";
  } else if (window.location.href.indexOf("004") > -1) {
      urlJson = "./assets/js/langcontent/004-" + country + ".json";
  } else if (window.location.href.indexOf("005") > -1) {
      urlJson = "./assets/js/langcontent/005-" + country + ".json";
  } else if (window.location.href.indexOf("006") > -1) {
      urlJson = "./assets/js/langcontent/006-" + country + ".json";
  } else if (window.location.href.indexOf("007") > -1) {
      urlJson = "./assets/js/langcontent/007-" + country + ".json";
  } else if (window.location.href.indexOf("008") > -1) {
      urlJson = "./assets/js/langcontent/008-" + country + ".json";
  } else if (window.location.href.indexOf("009") > -1) {
      urlJson = "./assets/js/langcontent/009-" + country + ".json";
  } else if (window.location.href.indexOf("010") > -1) {
      urlJson = "./assets/js/langcontent/010-" + country + ".json";
  } else {
      urlJson = "./assets/js/langcontent/" + country + ".json";
  }

  var flagAsset = '<img src="./assets/img/langs/' + country + '.svg">'
  var flagAssetNew = '<img src="../assets/img/langs/' + country + '.svg">'


  if (urlJson.indexOf('g25freetnc') !== -1) {
    $(".header__langs__default").prepend(
        flagAssetNew
    );
} else if (urlJson.indexOf('mec5freetnc') !== -1) {
    $(".header__langs__default").prepend(
      flagAssetNew
  );
} else if (urlJson.indexOf('faceit5freetnc') !== -1) {
  $(".header__langs__default").prepend(
    flagAssetNew
);
} else {
    // Code to execute when the file path does not contain 'g25freetnc'
    $(".header__langs__default").prepend(
        flagAsset
    );
}

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
  $(".header__langs__default").on("click", function (e) {
    e.stopPropagation();
    $(".header__langs__default, .header__langs__list").toggleClass("active");
  });
  $(".header__langs__list__sub").on("click", function (e) {
    e.stopPropagation();
    $(this).toggleClass("active");
    $(this).find("ul").slideToggle();
  });
  $("body").on("click", function () {
    $(".header__langs__default, .header__langs__list").removeClass("active");
  });

  // parallax

  const layer1 = $(".prllx").find(".prllx__layer__img--1");
  const layer2 = $(".prllx").find(".prllx__layer__img--2");
  const layer2a = $(".prllx").find(".prllx__layer__img--2a");
  const layer2b = $(".prllx").find(".prllx__layer__img--2b");
  const layer2c = $(".prllx").find(".prllx__layer__img--2c");
  const layer3 = $(".prllx").find(".prllx__layer__img--3");
  const layer4 = $(".prllx").find(".prllx__layer__img--4");
  const layer5 = $(".prllx").find(".prllx__layer__img--5");
  const layer6 = $(".prllx").find(".prllx__layer__img--6");
  const layer7 = $(".prllx").find(".prllx__layer__img--7");
  // const layer8 = $(".prllx").find(".prllx__layer--8");
  const layer9 = $(".prllx").find(".prllx__layer__img--9");
  const layer10 = $(".prllx").find(".prllx__layer__img--10");
  const layer11 = $(".prllx").find(".prllx__layer__img--11");


  const layer1Holder = $(".prllx").find(".prllx__layer--1");
  const layer2Holder = $(".prllx").find(".prllx__layer--2");
  const layer2aHolder = $(".prllx").find(".prllx__layer--2a");
  const layer2bHolder = $(".prllx").find(".prllx__layer--2b");
  const layer2cHolder = $(".prllx").find(".prllx__layer--2c");
  const layer3Holder = $(".prllx").find(".prllx__layer--3");
  const layer4Holder = $(".prllx").find(".prllx__layer--4");
  const layer5Holder = $(".prllx").find(".prllx__layer--5");
  const layer6Holder = $(".prllx").find(".prllx__layer--6");
  const layer7Holder = $(".prllx").find(".prllx__layer--7");
  // const layer8Holder = $(".prllx").find(".prllx__layer--8");
  const layer9Holder = $(".prllx").find(".prllx__layer--9");
  const layer10Holder = $(".prllx").find(".prllx__layer--10");
  const layer11Holder = $(".prllx").find(".prllx__layer--11");


  // $(window).on("load", function () {
		// parallax
		var winScrollTop=0;
		$.fn.is_on_screen = function(){    
				var win = $(window);
				var viewport = {
						top : win.scrollTop(),
						left : win.scrollLeft()
				};
				//viewport.right = viewport.left + win.width();
				viewport.bottom = viewport.top + win.height();
				var bounds = this.offset();
				//bounds.right = bounds.left + this.outerWidth();
				bounds.bottom = bounds.top + this.outerHeight();
				return (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));
		};

		function parallax() { 
			var scrolled = $(window).scrollTop();
			// $('.prllx').each(function(){    
				if ($(".prllx").is_on_screen()) {	

					// show on view

					const firstTop = $(".prllx").offset().top; 
					
					const moveTop = (winScrollTop-firstTop);
					
					layer1Holder.css("transform","translateY("+-moveTop*-0.1+"px)");
          layer2Holder.css("transform","translateY("+-moveTop*+0.15+"px)");
          layer2aHolder.css("transform","translateY("+-moveTop*+0.15+"px)");
          layer2bHolder.css("transform","translateY("+-moveTop*-0.3+"px)");
          layer2cHolder.css("transform","translateY("+-moveTop*+0.5+"px)");
          layer3Holder.css("transform","translateY("+-moveTop*-0.2+"px)");
					layer4Holder.css("transform","translateY("+-moveTop*-0.25+"px)");
					layer5Holder.css("transform","translateY("+-moveTop*-0.2+"px)");
					layer6Holder.css("transform","translateY("+-moveTop*-0.6+"px)");
					layer7Holder.css("transform","translateY("+-moveTop*-0.4+"px)");
					// layer8.css("transform","translateY("+-moveTop*-0.1+"px)");
					layer9Holder.css("transform","translateY("+-moveTop*-0.4+"px)");
          layer10Holder.css("transform","translateY("+-moveTop*-0.75+"px)");
          layer11Holder.css("transform","translateY("+-moveTop*+0.7+"px)");

				} else {
					// hide off view
					// $(".prllx__layer").hide();
					// $(".prllx__content > *").hide();
				}     
			// });
		}

		$(window).scroll(function(e){
			winScrollTop = $(this).scrollTop();
			parallax();
		});

    
    // fadein animations
    animateLayer10();
    animateLayer9();
    animateLayer7();
    animateLayer5();
    animateLayer4();
    animateLayer3();
    

	// });

  function animateLayer10(){
		setTimeout(function(){
			$(layer10).css("opacity","1");
			layer10.addClass('animate__animated animate__fadeInUp animate__slower');
      

      layer10.on('animationend', () => {
        animateLayer9();
      });

      animateLayer2();
      animateLayer2Rocks();
      animateLayerCoins();

      layer2.on('animationend', () => {
        layer2a.removeClass('animate__animated animate__fadeIn');
        layer2b.removeClass('animate__animated animate__fadeIn');
        layer2c.removeClass('animate__animated animate__fadeIn');
        
        layer6.removeClass('animate__animated animate__fadeIn');
        layer11.removeClass('animate__animated animate__fadeIn');

        layer2a.addClass('ani-sway4');
        layer2b.addClass('ani-sway4');
        layer2c.addClass('ani-sway3');
        
        layer6.addClass('ani-sway1');
        layer11.addClass('ani-sway2');
      });

      
      
		}, 500);
	}
  function animateLayer9(){
    setTimeout(function(){
      $(layer9).css("opacity","1");
      layer9.addClass('animate__animated animate__fadeInBottomRight animate__slower');
    }, 500);
	}
  function animateLayer7(){
    setTimeout(function(){
      $(layer7).css("opacity","1");
      layer7.addClass('animate__animated animate__fadeInLeft animate__slower');
    }, 500);
	}
  function animateLayer5(){
    setTimeout(function(){
      $(layer5).css("opacity","1");
      layer5.addClass('animate__animated animate__fadeInRight animate__slower');
    }, 500);
	}
  function animateLayer4(){
    setTimeout(function(){
      $(layer4).css("opacity","1");
      layer4.addClass('animate__animated animate__fadeInTopLeft animate__slower');
    }, 500);
	}
  function animateLayer3(){
    setTimeout(function(){
      $(layer3).css("opacity","1");
      layer3.addClass('animate__animated animate__fadeInTopRight animate__slower');
    }, 500);
	}
  function animateLayer2(){
    setTimeout(function(){
      $(layer2).css("opacity","1");
      layer2.addClass('animate__animated animate__fadeIn');
    }, 1000);
	}
  function animateLayer2Rocks(){
    setTimeout(function(){
      $(layer2a).css("opacity","1");
      $(layer2b).css("opacity","1");
      $(layer2c).css("opacity","1");
      layer2a.addClass('animate__animated animate__fadeIn');
      layer2b.addClass('animate__animated animate__fadeIn');
      layer2c.addClass('animate__animated animate__fadeIn');
    }, 1000);
	}
  function animateLayerCoins(){
    setTimeout(function(){
      $(layer6).css("opacity","1");
      $(layer11).css("opacity","1");
      layer6.addClass('animate__animated animate__fadeIn');
      layer11.addClass('animate__animated animate__fadeIn');
    }, 1000);
	}


  // tnc promos
  $(".tnc__content, .promo__content").slideUp();
  $(".tnc, .promo, .tnc__content").removeClass("act");
  $(".tnc").on("click", function () {
    $(".tnc__content, .promo__content").slideToggle();
    $(".tnc, .promo").toggleClass("act");
  });

  $(".swiper--promos").on("click", function (e) {
    e.stopPropagation();
  });

  // swiper promos

  var sliderPromos = null;

  function initSwiper() {
    if (window.innerWidth >= 600) {
      
      var sliderPromos = new Swiper(".swiper--promos", {
        slidesPerView: "auto",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerGroupAuto: true,
        slidesPerGroup: 1,
        freeMode: {
          enabled: true,
          sticky: true,
        },
        slideToClickedSlide: true,
        watchSlidesProgress: true,
        allowTouchMove: true,
        simulateTouch: true,
        breakpoints: {
          0: {
            spaceBetween: 8,
          },
          768: {
            spaceBetween: 9,
          },
          1024: {
            spaceBetween: 10,
          }
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      });
      
    } else {
      if (sliderPromos) {
        sliderPromos.destroy();
      }
    }
  }

  var timer;

  window.addEventListener('resize', function () {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(initSwiper, 200);
  });

  initSwiper();

});
