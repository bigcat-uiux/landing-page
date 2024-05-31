

var urlParams = new URLSearchParams(window.location.search);
var urlParamLang = urlParams.get('lang');
var langJson;
// if(urlParamLang = 'en') {
if (urlParamLang = 'cn') {
  if (urlParamLang != 'th' && urlParamLang != 'en' && urlParamLang != 'vn' && urlParamLang != 'inr' && urlParamLang != 'krw' && urlParamLang != 'cn' && urlParamLang != 'mycn' && urlParamLang != 'id' && urlParamLang != 'jpy') {
    urlParamLang = 'en';
  }
  fetchLangJson(urlParamLang);
}
else if (urlParamLang == null || urlParamLang == "") {
  fetchLangJson("en");
}
else {
  $.get("https://ipinfo.io", function (response) {
    var detectedCountry = response.country;
    switch (detectedCountry.toLowerCase()) {
      case 'id':
        langJson = 'id';
        break;
      case 'inr':
        langJson = 'inr';
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
      case 'mycn':
        langJson = 'mycn';
        break;
      case 'krw':
        langJson = 'krw';
        break;
      case 'jpy':
        langJson = 'jpy';
        break;
      default:
        langJson = 'en';
        break;
    }
    fetchLangJson(langJson);
  }, "jsonp");
}

// fetchLangJson("en");

function fetchLangJson(country) {
  $('.header__langs .sel-lang').prepend('<img src="assets/images/flags/' + country + '.svg">');
  $('body').attr('data-lang', country);
  $.ajax({
    url: "assets/js/langcontent/" + country + ".json",
    type: 'GET',
    cache: false,
    dataType: 'json',
    success: function (result) {
      Object.entries(result).map(obj => {
        const key = obj[0];
        const value = obj[1];
        $('[data-txt="' + key + '"]').html(value);
        $('[data-label="' + key + '"]').html(value);
        $('[data-placeholder="' + key + '"]').attr("placeholder", value);
        $('[data-cta="' + key + '"]').attr('href', value);
      });
    },
    error: function () {
      alert("No");
    }
  });
}

// tnc content
//const tncContent = document.querySelector('.tnc__content');
//setTimeout(function () {
//  if ($('body').attr('data-lang') === 'cn') {
//    tncContent.innerHTML = tncCN;
//  }
//  if ($('body').attr('data-lang') === 'mycn') {
//    tncContent.innerHTML = tncMYCN;
//  }
//}, 1000)

//function toggleTnc() {
//  $('.tnc__head').toggleClass("active");
//  $('.to-top').toggleClass("active");
//  $('.tnc__content').slideToggle();
//}
//$('.content__banner__tnc, .tnc__head').on("click", (function () {
//  toggleTnc();
//  $([document.documentElement, document.body]).animate({
//    scrollTop: $(".tnc").offset().top
//  }, 500);
//}));
//$(".to-top .btn").on("click", (function () {
//  toggleTnc();
//  $([document.documentElement, document.body]).animate({
//    scrollTop: $("body").offset().top
//  }, 500);
//}));

// For the accordion
//const faqs = document.querySelectorAll('.option-hover');
//faqs.forEach(faq => {
//  faq.addEventListener("click", () => {
//    faq.classList.toggle("roll-active");
//  })
//})

// Date
// date counter
var today = new Date().toUTCString();
var currentDate = new Date().getTime();
var now = new Date().getTime();

var miniGame1Start = new Date("Sep 18, 2023 00:00:00").getTime(); // Sep 18
var miniGame1End = new Date("Sep 24, 2023 23:59:59").getTime(); // Sep 24

var miniGame2Start = new Date("Sep 25, 2023 00:00:00").getTime(); // Sep25
var miniGame2End = new Date("Oct 1, 2023 23:59:59").getTime(); // Oct 1

var miniGame3Start = new Date("Oct 2, 2023 00:00:00").getTime(); // Oct 2
var miniGame3End = new Date("Oct 8, 2023 23:59:59").getTime(); // Oct 8

// swiper


// });
$(document).ready(function () {
  // modals
  $(".modals__lbox").on("click", function (e) {
    e.stopPropagation();
    // console.log("clicked");
  });
  $(".modals, .modals__lbox__close, .btn--modal, .modals__lbox__foot .btn, .bar.mobi").on("click", function () {
    $(".modals").removeClass("act");
    $("body").css("overflow", "auto");
    // sliderCountdownContent.init();
    // console.log("clicked");
  });
  if ($(".modals").hasClass("act")) {
    $("body").css("overflow", "hidden");
  }
});

// const dbForm1 = document.forms["minigameForm1"];
// const dbForm2 = document.forms["minigameForm2"];
// const dbForm3 = document.forms["minigameForm3"];
const betIdForm = document.forms["betIdForm"];

// $('#minigameForm1 input').bind('keyup blur click enter', function () { // fires on every keyup & blur
//   if ($('#minigameForm1').validate().checkForm()) {                   // checks form for validity
//     $('#submitMinigame1').removeClass('deact'); // enables button
//   } else {
//     $('#submitMinigame1').addClass('deact');    // disables button
//   }
// });

// $('#minigameForm2 input').bind('keyup blur click enter', function () { // fires on every keyup & blur
//   if ($('#minigameForm2').validate().checkForm()) {                   // checks form for validity
//     $('#submitMinigame2').removeClass('deact'); // enables button
//   } else {
//     $('#submitMinigame2').addClass('deact');    // disables button
//   }
// });

// $('#minigameForm3 input').bind('keyup blur click enter', function () { // fires on every keyup & blur
//   if ($('#minigameForm3').validate().checkForm()) {                   // checks form for validity
//     $('#submitMinigame3').removeClass('deact'); // enables button
//   } else {
//     $('#submitMinigame3').addClass('deact');    // disables button
//   }
// });

$('#betIdForm input').bind('keyup blur click enter', function () { // fires on every keyup & blur
  if ($('#betIdForm').validate().checkForm()) {                   // checks form for validity
    $('#submitBetIdForm').removeClass('deact'); // enables button
  } else {
    $('#submitBetIdForm').addClass('deact');    // disables button
  }
});

function saveToSession1() {
  inputMinigame = document.getElementById("minigameMg1");
  inputUsername = document.getElementById("m88usernameMg1");
  inputAnswer1 = document.getElementById("answer1Mg1");
  inputAnswer2 = document.getElementById("answer2Mg1");
  inputAnswer3 = document.getElementById("answer3Mg1");

  sessionStorage.setItem("minigameMg1", inputMinigame.value);
  sessionStorage.setItem("m88usernameMg1", inputUsername.value);
  sessionStorage.setItem("answer1Mg1", inputAnswer1.value);
  sessionStorage.setItem("answer2Mg1", inputAnswer2.value);
  sessionStorage.setItem("answer3Mg1", inputAnswer3.value);
}

function saveToSession2() {
  inputMinigame = document.getElementById("minigameMg2");
  inputUsername = document.getElementById("m88usernameMg2");
  inputAnswer1 = document.getElementById("answer1Mg2");
  inputAnswer2 = document.getElementById("answer2Mg2");

  sessionStorage.setItem("minigameMg2", inputMinigame.value);
  sessionStorage.setItem("m88usernameMg2", inputUsername.value);
  sessionStorage.setItem("answer1Mg2", inputAnswer1.value);
  sessionStorage.setItem("answer2Mg2", inputAnswer2.value);
}

function saveToSession3() {
  inputMinigame = document.getElementById("minigameMg3");
  inputUsername = document.getElementById("m88usernameMg3");
  inputAnswer1 = document.getElementById("answer1Mg3");
  inputAnswer2 = document.getElementById("answer2Mg3");

  sessionStorage.setItem("minigameMg3", inputMinigame.value);
  sessionStorage.setItem("m88usernameMg3", inputUsername.value);
  sessionStorage.setItem("answer1Mg3", inputAnswer1.value);
  sessionStorage.setItem("answer2Mg3", inputAnswer2.value);
}

function saveToSessionBetId() {
  inputMinigame = document.getElementById("betId");
  inputUsername = document.getElementById("m88usernameMg3");
  inputRemark = document.getElementById("remark");

  sessionStorage.setItem("betId", inputMinigame.value);
  sessionStorage.setItem("m88username", inputUsername.value);
  sessionStorage.setItem("remark", inputRemark.value);
}

$("#submitMinigame1").on("click", function () {
  saveToSession1();
});
$("#submitMinigame2").on("click", function () {
  saveToSession2();
});
$("#submitMinigame3").on("click", function () {
  saveToSession3();
});
$("#submitBetIdForm").on("click", function () {
  saveToSessionBetId();
});

var callLSGetItem = function () {
  // var minigameMg1 = (sessionStorage.getItem('minigameMg1') !== null) ? sessionStorage.getItem('minigameMg1') : "";
  // var m88usernameMg1 = (sessionStorage.getItem('m88usernameMg1') !== null) ? sessionStorage.getItem('m88usernameMg1') : "";
  // var answer1Mg1 = (sessionStorage.getItem('answer1Mg1') !== null) ? sessionStorage.getItem('answer1Mg1') : "";
  // var answer2Mg1 = (sessionStorage.getItem('answer2Mg1') !== null) ? sessionStorage.getItem('answer2Mg1') : "";
  // var answer3Mg1 = (sessionStorage.getItem('answer3Mg1') !== null) ? sessionStorage.getItem('answer3Mg1') : "";

  // var minigameMg2 = (sessionStorage.getItem('minigameMg2') !== null) ? sessionStorage.getItem('minigameMg2') : "";
  // var m88usernameMg2 = (sessionStorage.getItem('m88usernameMg2') !== null) ? sessionStorage.getItem('m88usernameMg2') : "";
  // var answer1Mg2 = (sessionStorage.getItem('answer1Mg2') !== null) ? sessionStorage.getItem('answer1Mg2') : "";
  // var answer2Mg2 = (sessionStorage.getItem('answer2Mg2') !== null) ? sessionStorage.getItem('answer2Mg2') : "";

  // var minigameMg3 = (sessionStorage.getItem('minigameMg3') !== null) ? sessionStorage.getItem('minigameMg3') : "";
  // var m88usernameMg3 = (sessionStorage.getItem('m88usernameMg3') !== null) ? sessionStorage.getItem('m88usernameMg3') : "";
  // var answer1Mg3 = (sessionStorage.getItem('answer1Mg3') !== null) ? sessionStorage.getItem('answer1Mg3') : "";

  var betId = (sessionStorage.getItem('betId') !== null) ? sessionStorage.getItem('betId') : "";
  var m88username = (sessionStorage.getItem('m88username') !== null) ? sessionStorage.getItem('m88username') : "";
  var remark = (sessionStorage.getItem('remark') !== null) ? sessionStorage.getItem('remark') : "";

  // $("#minigameMg1").val(minigameMg1);
  // $("#m88usernameMg1").val(m88usernameMg1);
  // $("#answer1Mg1").val(answer1Mg1);
  // $("#answer2Mg1").val(answer2Mg1);
  // $("#answer3Mg1").val(answer3Mg1);

  // $("#minigameMg2").val(minigameMg2);
  // $("#m88usernameMg2").val(m88usernameMg2);
  // $("#answer1Mg2").val(answer1Mg2);
  // $("#answer2Mg2").val(answer2Mg2);

  // $("#minigameMg3").val(minigameMg3);
  // $("#m88usernameMg3").val(m88usernameMg3);
  // $("#answer1Mg3").val(answer1Mg3);

  $("#betId").val(betId);
  $("#m88username").val(m88username);
  $("#remark").val(remark);

}

if (window.location.hash) {
  if (window.location.hash.indexOf("submitted")) {
    setTimeout(function () {
      // dbForm1.classList.add("submitted");
      // dbForm2.classList.add("submitted");
      // dbForm3.classList.add("submitted");
      betIdForm.classList.add("submitted");
      $(".submitted .btn--submit").addClass("deact");
      $(".submitted .participated").addClass("act");
      $(".modals").addClass("act");
    }, 500);
  }
  callLSGetItem();
}

if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}

function textLength(value) {
  var maxLength = 150;
  console.log(value.length);
  if (value.length > maxLength) alert("备注仅可支持 150 个字");
  return true;
}

document.getElementById('remark').onkeyup = function () {
  document.querySelector('.count-limit__counter').innerHTML = this.value.length;
  if (!textLength(this.value)) ;
}

