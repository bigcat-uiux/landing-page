var urlParams = new URLSearchParams(window.location.search);
var urlParamLang = urlParams.get("lang");
var langJson;
if (urlParamLang == null || urlParamLang == "") {
  fetchLangJson("en");
} else if (urlParamLang) {
  if (
    urlParamLang != "id" &&
    urlParamLang != "vn" &&
    urlParamLang != "th" &&
    urlParamLang != "cn" &&
    urlParamLang != "my-cn" &&
    urlParamLang != "jp" &&
    urlParamLang != "inr"
  ) {
    urlParamLang = "en";
  }
  fetchLangJson(urlParamLang);
} else {
  $.get(
    "https://ipinfo.io",
    function (response) {
      var detectedCountry = response.country;
      switch (detectedCountry.toLowerCase()) {
        case "id":
          langJson = "id";
          break;
        case "vn":
          langJson = "vn";
          break;
        case "th":
          langJson = "th";
          break;
        case "cn":
          langJson = "cn";
          break;
        case "my-cn":
          langJson = "my-cn";
          break;
        case "krw":
          langJson = "krw";
          break;
        case "jpy":
          langJson = "jpy";
          break;
        case "inr":
          langJson = "inr";
          break;
        default:
          langJson = "en";
          break;
      }
      fetchLangJson(langJson);
    },
    "jsonp"
  );
}

var dateUntil = new Date("2024-04-30");
$(".col-days .num-bg:eq(0)").countdown({ until: dateUntil, layout: "{dnn}" });
$(".col-hour .num-bg:eq(0)").countdown({ until: dateUntil, layout: "{hnn}" });
$(".col-min .num-bg:eq(0)").countdown({ until: dateUntil, layout: "{mnn}" });
$(".col-sec .num-bg:eq(0)").countdown({ until: dateUntil, layout: "{snn}" });

$(".accordion-parent").click(function () {
  $(".accordion-content").slideToggle();
  $(".accordion-parent").toggleClass("active");
});

// if($('#accordion-parent').hasClass('active')) {
// 	console.log('accordion');
// 	$('.accordion-parent').display.backgroundColor = '#4e5461';
// }

function closePopup() {
  $("body").removeClass("popup-active");
  $(".area-popup").removeClass("active");
}

function openSearchRankPopup(un) {
  closePopup();
  $(".popup-search-rank .popup-content .msg").removeClass("inactive");
  $(".popup-search-rank .popup-content .txt-1 .msg-invalid .un").text("");
  if (un) {
    $(".popup-search-rank .popup-content .msg-default").addClass("inactive");
    $(".popup-search-rank .popup-content .txt-1 .msg-invalid .un").text(un);
  }
  $("body").addClass("popup-active");
  $(".popup-search-rank").addClass("active");
}

function openSearchRankResultPopup(indx) {
  console.log(indx);
  closePopup();
  // $('.popup-search-rank-result .popup-content .rank-result').text(indx+1);
  $("body").addClass("popup-active");
  $(".popup-search-rank-result").addClass("active");
  Papa.parse(`assets/csv/${lang.toUpperCase()}.csv`, {
    header: true,
    download: true,
    dynamicTyping: true,
    complete: function (results) {
      var tbodyHTML = "";

      results.data.forEach(function (row, index) {
        if (index == indx) {
          console.log(row.prize);
          $(".popup-search-rank-result .popup-content .rank-result").text(
            row.prize
          );
        }
      });
      $(".ledger tbody").html(tbodyHTML);
      var unBoxMaxWidth = Math.max.apply(
        Math,
        $(".un-box")
          .map(function () {
            return $(this).width();
          })
          .get()
      );
      $(".un-box").width(unBoxMaxWidth);
    },
  });
}

$(".btn-show-more").click(function () {
  $(".ledger").toggleClass("active");
  $(this).toggleClass("active");
});

function unEncrypt(un) {
  var str = un.toString().split("");
  for (var i = 2; i < str.length - 1; i += 5) {
    str[i] ? (str[i] = "*") : "";
    str[i + 1] ? (str[i + 1] = "*") : "";
    str[i + 2] ? (str[i + 2] = "*") : "";
  }
  return str.join("");
}

function fetchLangJson(country) {
  // $('.header__langs .sel-lang').prepend('<img src="assets/images/flags/'+country+'.svg">');
  $("body").attr("data-lang", country);
  $.ajax({
    url: "assets/js/langcontent/" + country + ".json",
    type: "GET",
    cache: false,
    dataType: "json",
    success: function (result) {
      Object.entries(result).map((obj) => {
        const key = obj[0];
        const value = obj[1];
        $('[data-txt="' + key + '"]').html(value);
        $('[data-cta="' + key + '"]').attr("href", value);
      });
    },
    error: function () {
      alert("No");
    },
  });
}

var playerList = [];
var path = window.location.href;
var lang = path.slice(-7, -5);

if (lang == "cn") {
  if (path.slice(-9, -7) == "my") {
    lang = "my";
  } else {
    lang = "cn";
  }
}

if (
  !(
    lang == "cn" ||
    lang == "id" ||
    lang == "jp" ||
    lang == "kr" ||
    lang == "th" ||
    lang == "vn"
  )
) {
  if (lang == "nr") {
    lang = "inr";
  } else {
    lang = "my";
  }
}

Papa.parse(`assets/csv/${lang.toUpperCase()}.csv`, {
  header: true,
  download: true,
  dynamicTyping: true,
  complete: function (results) {
    var tbodyHTML = "";
    var counter = 0;
    results.data.forEach(function (row) {
      if (row.username) {
        var uFlag;
        var uRank;

        // flag designation
        switch (lang) {
          case "jp":
            uFlag = "jpy";
            break;
          case "my":
            uFlag = "en";
            break;
          default:
            uFlag = lang;
            break;
        }

        switch (counter) {
          case 0:
            uRank = "first";
            break;
          case 1:
            uRank = "second";
            break;
          case 2:
            uRank = "third";
            break;
          default:
            uRank = "";
        }

        if (counter < 20) {
          tbodyHTML += '<tr id="row-' + uRank + '">';
          tbodyHTML +=
            '<td class="rank"><span class="num ' +
            uRank +
            '">' +
            (counter + 1) +
            "</span></td>";
          tbodyHTML +=
            '<td class="un"><div class="un-box"><img src="assets/images/flags/' +
            uFlag +
            '.svg" /><span>' +
            unEncrypt(row.username) +
            "</span></div></td>";
          tbodyHTML += '<td class="wager">' + row.prize + " </td>";
          tbodyHTML += "</tr>";
        }
        playerList.push(row);
        counter++;
      }
    });

    $(".ledger tbody").html(tbodyHTML);
    var unBoxMaxWidth = Math.max.apply(
      Math,
      $(".un-box")
        .map(function () {
          return $(this).width();
        })
        .get()
    );
    $(".un-box").width(unBoxMaxWidth);
  },
});

$(document).on("keyup change blur", '[data-required="true"]', function () {
  var thisSubmitBtn = $(this).closest("form").find('[type="submit"]');
  if ($(this).val() != "") {
    thisSubmitBtn.addClass("active");
  } else {
    thisSubmitBtn.removeClass("active");
  }
});

function findIndexByKeyValue(obj, key, value) {
  for (var i = 0; i < obj.length; i++) {
    if (obj[i][key] == value) {
      return i;
    }
  }
}

function submitRankSearchForm(thisForm) {
  var serRes = $(thisForm).serializeArray();
  serResObj = {};

  $(serRes).each(function (i, field) {
    serResObj[field.name] = field.value;
  });
  if (serResObj.un) {
    var val = findIndexByKeyValue(playerList, "username", serResObj.un);
    if (typeof val !== "undefined" || val != null) {
      openSearchRankResultPopup(val);
    } else {
      openSearchRankPopup(serResObj.un);
    }
  }
}

// For the accordion
const faqs = document.querySelectorAll(".option-hover");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("roll-active");
  });
});

if (window.innerWidth <= 767) {
  console.log("pumasok");
  $(".laliga").insertBefore(".sponsors-list");
}

window.onresize = function () {
  if (window.innerWidth >= 768) {
    $(".laliga").insertBefore(".first-blurb");
  } else if (window.innerWidth <= 767) {
    console.log("pumasok");
    $(".laliga").insertBefore(".sponsors-list");
  }
};
