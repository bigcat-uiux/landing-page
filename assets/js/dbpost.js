jQuery(function () {

  'use strict';

  // window.googleDocCallback = function () { return true; };

  // GET THE FORM ID
  const dbForm1 = document.forms["minigameForm1"];
  const dbForm2 = document.forms["minigameForm2"];
  const dbForm3 = document.forms["minigameForm3"];

  // GET THE SUBMIT BUTTON CLASS or ID
  const formBtn1 = document.querySelector("#submitMinigame1");
  const formBtn2 = document.querySelector("#submitMinigame2");
  const formBtn3 = document.querySelector("#submitMinigame3");

  // TIME AS UNIQUE ID
  const formTimeID1 = document.querySelector("#timestamp1").value = Date();
  const formTimeID2 = document.querySelector("#timestamp2").value = Date();
  const formTimeID3 = document.querySelector("#timestamp3").value = Date();

  // SCRIPT API FOR SHEET POST
  const scriptSheet = "https://script.google.com/macros/s/AKfycbykpaH0ROQLCXUOE0mytAKqI-upsa7PymZPsyeXaA1vl56uNS7BV-5_88vlolcy0jcpCQ/exec";

  let inputDate1, inputDate2, inputDate3, inputMinigame, inputUsername, inputAnswer1, inputAnswer2, inputAnswer3;

  // save to sessionstorage
  inputDate1 = document.getElementById("timestamp1");
  inputDate2 = document.getElementById("timestamp2");
  inputDate3 = document.getElementById("timestamp3");
  inputMinigame = document.getElementById("minigame");
  inputUsername = document.getElementById("m88username");
  inputAnswer1 = document.getElementById("answer1");
  inputAnswer2 = document.getElementById("answer2");
  inputAnswer3 = document.getElementById("answer3");

  sessionStorage.setItem("timestamp", inputDate1.value);
  sessionStorage.setItem("timestamp", inputDate2.value);
  sessionStorage.setItem("timestamp", inputDate3.value);
  sessionStorage.setItem("minigame", inputMinigame.value);
  sessionStorage.setItem("m88username", inputUsername.value);
  sessionStorage.setItem("answer1", inputAnswer1.value);
  sessionStorage.setItem("answer2", inputAnswer2.value);
  sessionStorage.setItem("answer3", inputAnswer3.value);

  // addEventLister to fetch a script then throw data
  dbForm1.addEventListener('submit', e => {
    // if (!$(formBtn1).hasClass("deact")) {
    e.preventDefault()
    let requestBody1 = new FormData(dbForm1)
    fetch(scriptSheet, {
      method: 'POST',
      body: requestBody1,
    })
      .then(response => {
        // console.log(response);
        // console.log("SUCCESS");
        // dbForm1.reset();
        dbForm1.classList.add("submitted");
        document.querySelector(".submitted .btn--submit").classList.add("deact");
        document.querySelector(".submitted .participated").classList.add("act");
        document.querySelector(".modals").classList.add("act");
      })
      .catch(error => {
        console.log("ERROR See File", error);
        formBtn1.disabled = false
      })
    // }
  });

  dbForm2.addEventListener('submit', e => {
    // if (!$(formBtn2).hasClass("deact")) {
    e.preventDefault()
    let requestBody2 = new FormData(dbForm2)
    fetch(scriptSheet, {
      method: 'POST',
      body: requestBody2,
    })
      .then(response => {
        // console.log(response);
        // console.log("SUCCESS");
        // dbForm2.reset();
        dbForm2.classList.add("submitted");
        document.querySelector(".submitted .btn--submit").classList.add("deact");
        document.querySelector(".submitted .participated").classList.add("act");
        document.querySelector(".modals").classList.add("act");
      })
      .catch(error => {
        console.log("ERROR See File");
        formBtn2.disabled = false
      })
    // }
  });

  dbForm3.addEventListener('submit', e => {
    // if (!$(formBtn3).hasClass("deact")) {
    e.preventDefault()
    let requestBody3 = new FormData(dbForm3)
    fetch(scriptSheet, {
      method: 'POST',
      body: requestBody3,
    })
      .then(response => {
        // console.log(response);
        // console.log("SUCCESS");
        // dbForm3.reset();
        dbForm3.classList.add("submitted");
        document.querySelector(".submitted .btn--submit").classList.add("deact");
        document.querySelector(".submitted .participated").classList.add("act");
        document.querySelector(".modals").classList.add("act");
      })
      .catch(error => {
        console.log("ERROR See File");
        formBtn3.disabled = false
      })
    // }
  });


  /**
  * Start
  * Call sessionStorage Get Item
  * Pass the value to the hidden input
  */
  var callLSGetItem = function () {
    var date_time1 = (sessionStorage.getItem('timestamp') !== null) ? sessionStorage.getItem('timestamp') : "";
    var date_time2 = (sessionStorage.getItem('timestamp') !== null) ? sessionStorage.getItem('timestamp') : "";
    var date_time3 = (sessionStorage.getItem('timestamp') !== null) ? sessionStorage.getItem('timestamp') : "";
    var minigame = (sessionStorage.getItem('minigame') !== null) ? sessionStorage.getItem('minigame') : "";
    var m88username = (sessionStorage.getItem('m88username') !== null) ? sessionStorage.getItem('m88username') : "";
    var answer1 = (sessionStorage.getItem('answer1') !== null) ? sessionStorage.getItem('answer1') : "";
    var answer2 = (sessionStorage.getItem('answer2') !== null) ? sessionStorage.getItem('answer2') : "";
    var answer3 = (sessionStorage.getItem('answer3') !== null) ? sessionStorage.getItem('answer3') : "";

    $("#timestamp1").val(date_time1);
    $("#timestamp2").val(date_time2);
    $("#timestamp3").val(date_time3);
    $("#minigame").val(minigame);
    $("#m88username").val(m88username);
    $("#answer1").val(answer1);
    $("#answer2").val(answer2);
    $("#answer3").val(answer3);

  }

  /**End */
  callLSGetItem();

});


