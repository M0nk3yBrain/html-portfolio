var score = 0;
let x = 1;

function drawNumber(number, ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = "30px Arial";
    ctx.fillStyle = "blue";
    ctx.textAlign = "center";

    ctx.fillText(number, canvas.width /2, canvas.height /2);
}

function updateNumber() {
    score +=x;
    drawNumber(score, ctx, canvas);
}

function upgradeScore5() {
    if (score >= 10) {
        x += 5;
        score -= 10;
        drawNumber(score, ctx, canvas);
    } else {
        alert("You need at least 10 points to purchase.");
    }
}

function upgradeScore10() {
    if (score >= 100) {
        x += 10;
        score -= 100;
        drawNumber(score, ctx, canvas);
    } else {
        alert ("You need at least 100 point to purchase.");
    }
}