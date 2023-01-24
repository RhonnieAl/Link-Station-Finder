# The Link Sation Finder

This is a Javascript programme that finds the most suitable (with most power) link station for a device at given:
``
point [x,y]
``

The problem is solved in 2-dimensional space.


## Follow the steps below to find your most suitable Link Station available:

1. Visit following link to use the app: https://link-station-finder.vercel.app
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

# Maintainer Processes : Contributing to Link Station Finder


### This is an Example project but if you wish to build it out further, Code Contributions are welcome :)

#### Step 1: Clone

Clone the project on [GitHub](https://github.com/RhonnieAl/Link-Station-Finder) 

   ``` bash
   $ git clone https://github.com/RhonnieAl/Link-Station-Finder
   $ cd Link-Station-Finder
   ```

For developing new features and bug fixes, the development branch should be pulled and built upon.

#### Step 2: Branch

Create a new topic branch to contain your feature, change, or fix:

   ``` bash
   $ git checkout -b <topic-branch-name>
   ```

#### Step 3: Commit

Remember to make sure git knows your name and email address, here's how if you need to do this step:

   ``` bash
   $ git config --global user.name "Example User"
   $ git config --global user.email "user@example.com"
   ```

Add and commit:

   ``` bash
   $ git add my/changed/files
   $ git commit
   ```

#### Step 4: Rebase

Use git rebase to synchronize your work with the main repository.

   ``` bash
   $ git fetch upstream
   $ git rebase upstream/master
   ```

#### Step 5: Push

Push your topic branch:

   ``` bash
   $ git push origin <topic-branch-name>
   ```

#### Step 6: Pull Request

Open a Pull Request with title and description. And Add @RhonnieAl as Reviewer for Merge

Done & Dusted. Thank you for building this out. 
