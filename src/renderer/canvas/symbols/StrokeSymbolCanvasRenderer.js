export function drawStroke(stroke, context, stroker) {
  if (stroker) {
    stroker.drawStroke(context, stroke);
  }
}
