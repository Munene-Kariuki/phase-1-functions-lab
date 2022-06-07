// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  if (location > 42) {
    return location - 42
  }else {
    return 42- location
  } 
}

function distanceFromHqInFeet(location) {
  let distanceInBlocks = distanceFromHqInBlocks(location)
  return distanceInBlocks * 264
}

function distanceTravelledInFeet(start, destination) {
  let distance = start > destination ? (start - destination) * 264 : (destination- start) * 264
  return distance
}

function calculatesFarePrice(start, destination) {
  let distanceTravelled = distanceTravelledInFeet(start, destination)
  if (distanceTravelled <=400){
    return 0
  }
  else if (distanceTravelled > 400 &&distanceTravelled <= 2000) {
    return (distanceTravelled - 400) * 0.02
  }else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
    return 25
  }else {
    return 'cannot travel that far'
  }
}