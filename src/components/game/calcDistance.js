export function calcDistance(player, value) {
  let topDistance = player.top - value.top;
  let leftDistance = player.left - value.left;

  topDistance *= topDistance;
  leftDistance *= leftDistance;

  return Math.sqrt(topDistance + leftDistance);
}
