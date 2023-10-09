function drawNumber(number, ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = "30px Arial";
    ctx.fillStyle = "blue";
    ctx.textAlign = "center";

    ctx.fillText(number, canvas.width /2, canvas.height /2);
}

var score = 0;

function updateNumber() {
    score++;
    drawNumber(score, ctx, canvas);
}