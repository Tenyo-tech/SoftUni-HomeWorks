function solve(speed, place)
{
    switch (place) {
        case "motorway":
            if (speed <= 130) {
                console.log(`Driving ${speed} km/h in a 130 zone`);
            } 
            else if (speed <= 130 + 20) {
                console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - speeding`);
            }
            else if (speed <= 130 + 40) {
                console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - excessive speeding`);
            }
            else if (speed > 130 + 40) {
                console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - reckless driving`);
            }
            
            break;

        case "interstate":
            if (speed <= 90) {
                console.log(`Driving ${speed} km/h in a 90 zone`);
            } 
            else if (speed <= 90 + 20) {
                console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - speeding`);
            }
            else if (speed <= 90 + 40) {
                console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - excessive speeding`);
            }
            else if (speed > 90 + 40) {
                console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - reckless driving`);
            }
            
            break;

            case "city":
            if (speed <= 50) {
                console.log(`Driving ${speed} km/h in a 50 zone`);
            } 
            else if (speed <= 50 + 20) {
                console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - speeding`);
            }
            else if (speed <= 50 + 40) {
                console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - excessive speeding`);
            }
            else if (speed > 50 + 40) {
                console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - reckless driving`);
            }
            
            break;

            case "residential":
            if (speed <= 20) {
                console.log(`Driving ${speed} km/h in a ${20} zone`);
            } 
            else if (speed <= 20 + 20) {
                console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - speeding`);
            }
            else if (speed <= 20 + 40) {
                console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - excessive speeding`);
            }
            else if (speed > 20 + 40) {
                console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - reckless driving`);
            }
            
            break;
    
        default:
            break;
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');