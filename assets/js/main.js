
/* javascript */

// [AI-Assisted: Copilot SDK | 2026-11-09]
// Intent: Map the updated Digital Doppelganger answer values to the existing four-way scoring logic.
function getAnswers() {
  var c1counter = 0;
  var c2counter = 0;
  var c3counter = 0;
  var c4counter = 0;

  var socialMedia = document.getElementsByName("socialMedia");
  var landscape = document.getElementsByName("landscape");
  var amazonOrder = document.getElementsByName("amazonOrder");
  var activity = document.getElementsByName("activity");
  var soulAge = document.getElementsByName("soulAge");

  var qLocation = document.getElementsByClassName("questionBanner");

  for (var socialMediaChoice in socialMedia) {
    if (socialMedia[socialMediaChoice].checked) {
      switch (socialMedia[socialMediaChoice].value) {
        case "tiktok":
          inc1();
          break;
        case "insta":
          inc2();
          break;
        case "strava":
          inc3();
          break;
        case "facebook":
          inc4();
          break;
      }
      window.scrollTo(0, qLocation[1].offsetTop);
    }
  }

  for (var lanChoice in landscape) {
    if (landscape[lanChoice].checked) {
      switch (landscape[lanChoice].value) {
        case "beach":
          inc1();
          break;
        case "city":
          inc2();
          break;
        case "country":
          inc3();
          break;
        case "suburbs":
          inc4();
          break;
      }
      window.scrollTo(0, qLocation[2].offsetTop);
    }
  }

  for (var brChoice in amazonOrder) {
    if (amazonOrder[brChoice].checked) {
      switch (amazonOrder[brChoice].value) {
        case "squishies":
          inc1();
          break;
        case "airpods":
          inc2();
          break;
        case "smoker-grill":
          inc3();
          break;
        case "amazon-echo":
          inc4();
          break;
      }
      window.scrollTo(0, qLocation[3].offsetTop);
    }
  }

  for (var actChoice in activity) {
    if (activity[actChoice].checked) {
      switch (activity[actChoice].value) {
        case "doomscrolling":
          inc1();
          break;
        case "friends":
          inc2();
          break;
        case "outside":
          inc3();
          break;
        case "family":
          inc4();
          break;
      }
      window.scrollTo(0, qLocation[4].offsetTop);
    }
  }

  for (var ageChoice in soulAge) {
    if (soulAge[ageChoice].checked) {
      switch (soulAge[ageChoice].value) {
        case "teens":
          inc1();
          break;
        case "20s-30s":
          inc2();
          break;
        case "40s-50s":
          inc3();
          break;
        case "60-plus":
          inc4();
          break;
      }
    }
  }

  var counterCheck = [c1counter, c2counter, c3counter, c4counter];
  var max = 2;
  var mostPicked = 0;
  var resultHeader = document.getElementById("resultHeader");
  var resultImg = document.getElementById("resultImg");

  if (c1counter + c2counter + c3counter + c4counter > 4) {
    countChoices();
    window.scrollTo(0, qLocation[5].offsetTop);
  }

  function countChoices() {
    for (var i = 0; i < counterCheck.length; i++) {
      if (counterCheck[i] > max) {
        mostPicked = counterCheck[i];
        switch (counterCheck[i]) {
          case counterCheck[0]:
            resultHeader.innerHTML = "YOU GOT: JAKE";
            resultImg.src =
              "assets/img/111Jake.jpg";
            break;

          case counterCheck[1]:
            resultHeader.innerHTML = "YOU GOT: GINA";
            resultImg.src =
              "assets/img/111Gina.jpg";
            break;

          case counterCheck[2]:
            resultHeader.innerHTML = "YOU GOT: TERRY";
            resultImg.src =
              "assets/img/111Terry.jpg";
            break;

          case counterCheck[3]:
            resultHeader.innerHTML = "YOU GOT: RAYMOND";
            resultImg.src =
              "assets/img/111Raymond.jpg";
            break;
        }
      }
    }

    if (counterCheck[0] == max && counterCheck[1] == max) {
      resultHeader.innerHTML = "YOU GOT: AMY";
      resultImg.src =
        "assets/img/111Amy.jpg";
    } else if (counterCheck[2] == max && counterCheck[3] == max) {
      resultHeader.innerHTML = "YOU GOT: ROSA";
      resultImg.src =
        "assets/img/111Rosa.jpg";
    } else if (mostPicked == 0) {
      resultHeader.innerHTML = "YOU GOT: KIM KARDASHIAN";
      resultImg.src =
        "assets/img/Kim Kardashian jpg.jpg";
    }
  }

  function inc1() {
    c1counter++;
  }

  function inc2() {
    c2counter++;
  }

  function inc3() {
    c3counter++;
  }

  function inc4() {
    c4counter++;
  }
}




async function fetchFunction() {
	let jsonData;
	await fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=easy")
		.then((response) => response.json())
		.then((json) => {
			jsonData = json;
		});
	return jsonData;
}

(async () => {
	let data = await fetchFunction();
	console.log(data.results[0]);
})();