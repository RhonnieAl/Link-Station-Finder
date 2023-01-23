/* 
This module finds the best Link Station Router (Stations) with the highest power 
for a set of given devices (Points)
*/

function findBestLinkStation(point, stations) {
    // Store highest power is the variable bestPower. 
    // Lowest (out of range) power possble is 0 
    let bestPower = 0;
    let bestStation = null;

    for (let i = 0; i < stations.length; i++) {
        // Get distance between each Link Station (station) and Device (point)
        let distance = Math.sqrt(Math.pow(stations[i][0] - point[0], 2)
         + Math.pow(stations[i][1] - point[1], 2));
        
         // Create undefined container variable
         let power;
         
        if (distance > stations[i][2]) {
            // Define lowest power
            power = 0;
        } else {
            // Get power of a Link Station to a given device
            power = Math.pow(stations[i][2] - distance, 2);
        }
        if (power > bestPower) {
            // Get highest powered value if above 0 of given device (point) 
            // Get coordinates of station with highest power to given device (point)
            bestPower = power;
            bestStation = stations[i];
        }
    }

    // Output message to user
    if (bestPower > 0) {
        return `Best link station for point ${point[0]},${point[1]} is ${bestStation[0]},${bestStation[1]} with power ${bestPower}`;
    } else {
        return `No link station within reach for point ${point[0]},${point[1]}`;
    }
}

// List of all available Link Stations (Add more Station if installed)
let stations = [
    [0, 0, 10],
    [20, 20, 5],
    [10, 0, 12]
];

// List of all available Devices (Add more Station if installed)
let points = [
    [0, 0],
    [100, 100],
    [15, 10],
    [18, 18]
];

// Get best Link Station for all given Devices (points)
for (let i = 0; i < points.length; i++) {
    findBestLinkStation(points[i], stations);
}

export default findBestLinkStation;
