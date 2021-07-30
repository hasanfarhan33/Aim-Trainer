var startTime = new Date().getTime();
var endTime, timeDifference, fastestTime;
fastestTime = 10000000000000;
var timeOut;

function drawShape() {
  var randomLeft, randomTop, randomWidth, randomHeight;
  randomLeft = Math.floor(Math.random() * 86) + 10;
  randomTop = Math.floor(Math.random() * 76) + 10;
  //   console.log(randomTop);
  var shape = document.getElementById("shape").style;
  shape.left = randomLeft + "vw";
  shape.top = randomTop + "vh";
  shape.display = "block";
  startTime = new Date().getTime();
}

function calculateFastestTime() {
  if (timeDifference / 1000 < fastestTime) {
    fastestTime = timeDifference / 1000;
    document.getElementById("timeTaken").style.color = "rgb(91, 217, 125)";
  } else {
    document.getElementById("timeTaken").style.color = "white";
  }
}

document.getElementById("shape").onclick = function () {
  document.getElementById("shape").style.display = "none";
  document.getElementById("start").style.display = "none";
  endTime = new Date().getTime();
  timeDifference = endTime - startTime;
  calculateFastestTime();
  document.getElementById("timeTaken").innerHTML =
    timeDifference / 1000 + "<span> seconds </span>";
  timeOut = Math.random() * 2000;
  console.log(timeOut);
  setTimeout(drawShape, timeOut);
};
