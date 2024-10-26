/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocity= 10000; // velocity (km/h)
const acceleration= 3; // acceleration (m/s^2)
const  timeInSeconds  = 3600; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const initialFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)


// Pick up an error with how the function below is called and make it robust to such errors

// Function to calculate new velocity
const calcNewVelocity = (initialVelocity, acceleration, timeInSeconds) => {
  if (typeof initialVelocity !== 'number' || typeof acceleration !== 'number' ||typeof timeInSeconds !== 'number') {
      throw new Error('All parameters must be numbers');
        }
// Convert acceleration to km/h
 return initialVelocity + (acceleration * timeInSeconds * (3600/1000))
}

// Function to calculate new distance
const calcNewDistance =( initialDistance, initialVelocity,timeInSeconds) => { 
  if (typeof initialDistance !== 'number' || typeof initialVelocity !== 'number' ||typeof timeInSeconds !== 'number') {
    throw new Error('All parameters must be numbers');
      }
//converts time from seconds to hours
    return initialDistance + (initialVelocity * (timeInSeconds/3600)) //converts time from seconds to hours
    }
    
// Function to calculate remaining fuel
const calcRemainingFuel = (initialFuel,fuelBurnRate,timeInSeconds) => {
  if (typeof initialFuel !== 'number' || typeof fuelBurnRate !== 'number'|| typeof timeInSeconds !== 'number') {
    throw new Error('Invalid input: Ensure initialFuel, fuelBurnRate and timeInSeconds are numbers.');
      }
//remaining fuel in kg
   return initialFuel - (fuelBurnRate*timeInSeconds) //calculates remaining fuel
    }  

    
const newDistance = calcNewDistance(initialDistance, initialVelocity,timeInSeconds) //calcultes new distance
const remainingFuel  =calcRemainingFuel( initialFuel, fuelBurnRate, timeInSeconds )//calculates remaining fuel
const newVelocity = calcNewVelocity( initialVelocity,acceleration, timeInSeconds) //calculates new velocity based on acceleration
    

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






