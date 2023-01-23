function findBestLinkStation(point, stations) {
    let bestPower = 0;
    let bestStation = null;
    for (let i = 0; i < stations.length; i++) {
        let distance = Math.sqrt(Math.pow(stations[i][0] - point[0], 2)
         + Math.pow(stations[i][1] - point[1], 2));
        let power;
        if (distance > stations[i][2]) {
            power = 0;
        } else {
            power = Math.pow(stations[i][2] - distance, 2);
        }
        if (power > bestPower) {
            bestPower = power;
            bestStation = stations[i];
        }
    }
    if (bestPower > 0) {
        return `Best link station for point ${point[0]},${point[1]} is ${bestStation[0]},${bestStation[1]} with power ${bestPower}`;
    } else {
        return `No link station within reach for point ${point[0]},${point[1]}`;
    }
}

let stations = [[0, 0, 10], [20, 20, 5], [10, 0, 12]];
let points = [[0, 0], [100, 100], [15, 10], [18, 18]];
for (let i = 0; i < points.length; i++) {
    findBestLinkStation(points[i], stations);
}

export default findBestLinkStation;
