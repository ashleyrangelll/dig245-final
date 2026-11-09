
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
            resultHeader.innerHTML = "YOU GOT: THE RIZZLER";
            resultImg.src =
              "assets/img/the rizzler jpg.jpg";
            break;

          case counterCheck[1]:
            resultHeader.innerHTML = "YOU GOT: ZENDAYA";
            resultImg.src =
              "assets/img/Zendaya jpg.jpg";
            break;

          case counterCheck[2]:
            resultHeader.innerHTML = "YOU GOT: THE ROCK";
            resultImg.src =
              "assets/img/the rock jpg.jpg";
            break;

          case counterCheck[3]:
            resultHeader.innerHTML = "YOU GOT: MERYL STREEP";
            resultImg.src =
              "assets/img/meryl streep jpg.jpg";
            break;
        }
      }
    }

    if (counterCheck[0] == max && counterCheck[1] == max) {
      resultHeader.innerHTML = "YOU GOT: TAYLOR SWIFT";
      resultImg.src =
        "https://images.unsplash.com/photo-1516906346363-f61cc0219b22?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e2de3b723eb67152127d1738f2b86df7&auto=format&fit=crop&w=800&q=60";
    } else if (counterCheck[2] == max && counterCheck[3] == max) {
      resultHeader.innerHTML = "YOU GOT: RIHANNA";
      resultImg.src =
        "https://images.unsplash.com/photo-1515565324614-5b1976a7ada9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d2ed0bb617d30b964e9565121960aecd&auto=format&fit=crop&w=800&q=60";
    } else if (mostPicked == 0) {
      resultHeader.innerHTML = "YOU GOT: KIM KARDASHIAN";
      resultImg.src =
        "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7cf9e788a332a736734044e1ed74a283&auto=format&fit=crop&w=800&q=60";
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