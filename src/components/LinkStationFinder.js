/* 
This module finds the best Link Station Router (Stations) with the highest power 
for a set of given devices (Points)
*/

function GetBestLinkStation(x, y) {
    let Stations = [
        [0, 0, 10],
        [20, 20, 5],
        [10, 0, 12],
    ];

    // Store highest power in the variable "power". 
    // Lowest (out of range) power possble is defined as 0 
    let power = 0;
    let preferedStation_data = [];

    // Max number of iterations set to total number of stations
    for (let i = 0; i < Stations.length; i++) {
        let currentStation = Stations[i];

        // Get distance between each Link Station and Device point (x, y) on 2D plane
        let distance = Math.sqrt(
            Math.pow(currentStation[0] - x, 2) +
            Math.pow(currentStation[1] - y, 2) 
        );
        
        // Find if distance is greater than Station's reach
        if (distance > currentStation[2]) {
            continue;
        } else {
            // Get power of a Link Station to a given device
            let currrent_power = Math.pow(currentStation[2] - distance, 2);
            
            // Retrun the highest powered Link Station to Device, if any
            if (currrent_power > power) {
                power = currrent_power;
                preferedStation_data = currentStation;
            }
        }
    }
    // Output message to user
    if (power > 0) {
        return `Best link station for point (${x},${y}) is (${preferedStation_data[0]},${preferedStation_data[1]}) with power ${power}`;
    } else {
        return `No link station within reach for point (${x},${y})`;
       }
    
}

    // Find most suitable Link Station for all given Device points
    GetBestLinkStation(0, 0);
    GetBestLinkStation(100, 100);
    GetBestLinkStation(15, 10);
    GetBestLinkStation(18, 18);


    export default GetBestLinkStation;
