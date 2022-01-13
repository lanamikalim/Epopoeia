

function initializeAnimation() {
  window.requestAnimationFrame(draw);
}

function drawArt(ctx) {
  ctx.rotate(40 * Math.PI / 180);
    ctx.fillRect(-200, -150, 100, 100);


    ctx.beginPath();
    ctx.moveTo(-100, -150);
    ctx.bezierCurveTo(0, 50, -20, 100, -100, 200);
    ctx.stroke();
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 900, 700); // clear canvas

  // Figure out what pen we wanna draw with
  ctx.fillStyle = 'rgba(70, 70, 70, 0.8)';
  ctx.strokeStyle = 'rgba(200, 200, 200, 200)';

  ctx.save();
  ctx.lineWidth = 6;
  ctx.translate(450, 250);
  drawArt(ctx);
  ctx.restore();

window.requestAnimationFrame(draw);
}
initializeAnimation();
draw();
