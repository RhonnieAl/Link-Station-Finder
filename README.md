# The Link Sation Finder

This is a Javascript programme that finds the most suitable (with most power) link station for a device at given:
``
point [x,y]
``

The problem is solved in 2-dimensional space.


## Follow the steps below to find your most suitable Link Station available:


1. Visit following link to use the app: https://link-station-finder-7ed8rbqsg-rhonnieal.vercel.app
2. To find the most suitable Link Station for your Device, please input your device's coordinates (x, y) into the input field - input fields only accept numbers on the cartesian plane. You can start with the following device locations : `(0,0), (100, 100), 15,10), (18, 18)`
3. Click the button to see the `coordinates` and `power` of the most suitable Link Station available to you





Link stations have reach and power. A link station’s power can be calculated:
```
power = (reach - device's distance from linkstation)^2

if distance > reach, power = 0
```

Program outputs following line:
```
“Best link station for point x,y is x,y with power z”
```

or:

```
“No link station within reach for point x,y”
```

Link stations are located at points (x, y) and have reach (r) ([x, y, r]):
1. [[0, 0, 10]
2. [20, 20, 5]
3. [10, 0, 12]]

Print out function output from points (x, y):

- (0,0), 
- (100, 100), 
- (15,10)
- (18, 18)

## To read the JS script code:

Please see the `LinkStationFinder.js` file, under `Components` inside `src` folder

## To read deployed React-App code:

Please see the `App.js` file, under `src` folder
