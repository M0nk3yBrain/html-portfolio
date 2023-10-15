var score = 0;
let x = 1;

function updateNumber() {
    score +=x;
    document.getElementById("showScore").innerText = score;
}


/*
function startUpdating() {
    // Start updating the score when the button is pressed
    updateNumber(); // Initial update
    updateInterval = setInterval(updateNumber, 100); // Update every 100ms
}

function stopUpdating() {
    // Stop updating the score when the button is released or the cursor leaves the button
    clearInterval(updateInterval);
}
*/

//Upgrade buttons.
function upgradeScore1() {
    if (score >= 10) {
        x += 1;
        score -= 10;
        document.getElementById("showScore").innerText = score;
        document.getElementById("showPointsPerClick").innerText = x;
    } else {
        alert("You need at least 10 points to purchase.");
    }
}

function upgradeScore2() {
    if (score >= 100) {
        x += 2;
        score -= 100;
        document.getElementById("showScore").innerText = score;
        document.getElementById("showPointsPerClick").innerText = x;
    } else {
        alert ("You need at least 100 points to purchase.");
    }
}

function upgradeScore5() {
    if (score >= 1000) {
        x += 2;
        score -= 1000;
        document.getElementById("showScore").innerText = score;
        document.getElementById("showPointsPerClick").innerText = x;
    } else {
        alert ("You need at least 1,000 points to purchase.");
    }
}

function upgradeScore10() {
    if (score >= 10000) {
        x += 2;
        score -= 10000;
        document.getElementById("showScore").innerText = score;
        document.getElementById("showPointsPerClick").innerText = x;
    } else {
        alert ("You need at least 10,000 points to purchase.");
    }
}