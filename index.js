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
// Check if all parameters are numbers; throw an error if not  
  if (typeof initialVelocity !== 'number' || typeof acceleration !== 'number' ||typeof timeInSeconds !== 'number') {
      throw new Error('All parameters must be numbers');
        }
// Convert acceleration to km/h and calculate the new velocity
 return initialVelocity + (acceleration * timeInSeconds * (3600/1000))
}

// Function to calculate new distance
const calcNewDistance =( initialDistance, initialVelocity,timeInSeconds) => { 
// Check if all parameters are numbers; throw an error if not
  if (typeof initialDistance !== 'number' || typeof initialVelocity !== 'number' ||typeof timeInSeconds !== 'number') {
    throw new Error('All parameters must be numbers');
      }
//converts time from seconds to hours and calculate the new distance
    return initialDistance + (initialVelocity * (timeInSeconds/3600)) 
    }
    
// Function to calculate remaining fuel
const calcRemainingFuel = (initialFuel,fuelBurnRate,timeInSeconds) => {
// Check if all parameters are numbers; throw an error if not
  if (typeof initialFuel !== 'number' || typeof fuelBurnRate !== 'number'|| typeof timeInSeconds !== 'number') {
    throw new Error('Input error: initialFuel, fuelBurnRate, and timeInSeconds must all be numbers.');
      }
// Calculate remaining fuel after fuel burn over the given time
   return initialFuel - (fuelBurnRate*timeInSeconds) 
    }  

// Calculate new values based on the functions    
const newDistance = calcNewDistance(initialDistance, initialVelocity,timeInSeconds) //new distance
const remainingFuel  =calcRemainingFuel( initialFuel, fuelBurnRate, timeInSeconds )//remaining fuel
const newVelocity = calcNewVelocity( initialVelocity,acceleration, timeInSeconds) // new velocity based on acceleration
    
// Display the corrected results
console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






