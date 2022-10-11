// Code your solution in this file!

function distanceFromHqInBlocks(someValue){
    let scuberHQ = 42;
    return Math.abs(scuberHQ - someValue); 
}

function distanceFromHqInFeet (someValue){
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * 264
}

function calculatesFarePrice (start, destination){
    let distanceTravelled = distanceTravelledInFeet(start, destination);
    if (distanceTravelled <= 400){
        return 0;
    } else if (distanceTravelled > 400 && distanceTravelled < 2000){
        return (distanceTravelled - 400) * 0.02
    } else if (distanceTravelled > 2000 && distanceTravelled < 2500){
        return 25;
    } else {
        return `cannot travel that far`;
    }
}