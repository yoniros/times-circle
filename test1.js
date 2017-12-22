function graph() {
  var canvas = document.getElementById("myCanvas");
  var width = canvas.width;
  var height = canvas.height;

  var r = height / 2 * 0.8;
  var numOfPoints = 115;
  var centerX = width/2;
  var centerY = height/2;
  var multiplicator = 2;

  var points = getPointsArray(numOfPoints, centerX, centerY, r);

  var ctx = canvas.getContext("2d");
  
  drawCircle(ctx, centerX, centerY, r);
  //plotPoints(ctx, points);
  drawLines(ctx, points, multiplicator);  
}

function getPointsArray(numOfPoints, centerX, centerY, r) {
  var points = [];
  for (p=0; p<numOfPoints; p++) {
    alpha = 2 * Math.PI / numOfPoints * p;

    var y = Math.sin(alpha) * r + centerY;
    var x = Math.cos(alpha) * r + centerX;
    points.push([x,y]);
  }
  return points;
}

function plotPoints(ctx, points) {
  for (i=0; i<points.length; i++) {
    var p = points[i];
    var x = p[0];
    var y = p[1];
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI, true);
    ctx.stroke();
  }
}

function drawCircle(ctx, centerX, centerY, r) {
  ctx.beginPath();
  ctx.arc(centerX, centerY, r, 0, 2 * Math.PI, true);
  ctx.stroke();
}

/**
 * Draw line from point i to point j in the given array of points.
 *
 * @param {ctx} canvas context
 * @param {points}
 * @param {i}
 * @param {j}
 */
function drawLine(ctx, points, i, j) {
  var p1 = points[i];
  var p2 = points[j];
  ctx.beginPath();
  ctx.moveTo(p1[0], p1[1]);
  ctx.lineTo(p2[0], p2[1]);
  ctx.stroke();
}

function drawLines(ctx, points, multiplicator) {
  for (i=0; i<points.length; i++) {
    var j = (i * multiplicator) % points.length;
    drawLine(ctx, points, i, j);
  }
}
