// JavaScript code for the countdown timer

// The end time of the countdown in milliseconds
var targetDate = new Date();
targetDate.setFullYear(targetDate.getFullYear(), 6, 22); // Set the target date to June 3rd of the current year
targetDate.setHours(13, 0, 0, 0); // Set the time to 0 hours, 0 minutes, 0 seconds, and 0 milliseconds

var endTime = targetDate.getTime(); // One day from now

// The path to the images folder
var imgPath = "images/number/60px/"; // Change this to your images folder path

// The image elements for each digit
var dayTen = document.getElementById("day-ten");
var dayOne = document.getElementById("day-one");
var hourTen = document.getElementById("hour-ten");
var hourOne = document.getElementById("hour-one");
var minTen = document.getElementById("min-ten");
var minOne = document.getElementById("min-one");
var secTen = document.getElementById("sec-ten");
var secOne = document.getElementById("sec-one");

// A function to format the time remaining in DD:HH:MM:SS format
function formatTimeLeft(time) {
    var days = Math.floor(time / (60 * 60 * 24));
    var hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    var minutes = Math.floor((time % (60 * 60)) / 60);
    var seconds = time % 60;

    if (days < 10) {
        days = "0" + days;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return days + ":" + hours + ":" + minutes + ":" + seconds;
}

// A function to update the src attribute of the image elements based on the digits in the time remaining
function updateImages(time) {
    var digits = time.split("");
    dayTen.src = imgPath + digits[0] + ".png";
    dayOne.src = imgPath + digits[1] + ".png";
    hourTen.src = imgPath + digits[3] + ".png";
    hourOne.src = imgPath + digits[4] + ".png";
    minTen.src = imgPath + digits[6] + ".png";
    minOne.src = imgPath + digits[7] + ".png";
    secTen.src = imgPath + digits[9] + ".png";
    secOne.src = imgPath + digits[10] + ".png";
}

// A function to update the countdown timer
function updateTimer() {
    var now = Date.now();
    var diff = endTime - now;
    var seconds = Math.floor(diff / 1000);

    if (diff > 0) {
        var timeLeft = formatTimeLeft(seconds);
        updateImages(timeLeft);
        setTimeout(updateTimer, 1000);
    } else {
        updateImages("00:00:00:00");
    }
}


// function updateTimer() {
//     var now = Date.now();
//     var diff = endTime - now;
//     var seconds = Math.floor(diff / 1000);

//     if (diff > 0) {
//         var timeLeft = formatTimeLeft(seconds);
//         updateImages(timeLeft);
//         setTimeout(updateTimer, 1000);
//         // Hide the event div for the day of the event
//         document.getElementById("event-div-day-of").style.display = "none";
//         // Show the countdown timer
//         document.getElementById("countdown-timer").style.display = "block";
//         // Hide the event div for the other days
//         document.getElementById("event-div-other-days").style.display = "none";
//     } else {
//         // Hide the countdown timer
//         document.getElementById("countdown-timer").style.display = "none";
//         // Show the event div for the day of the event
//         document.getElementById("event-div-day-of").style.display = "block";
//         // Hide the event div for the other days
//         document.getElementById("event-div-other-days").style.display = "none";
//     }
// }


// Call the updateTimer function when the page loads
updateTimer();