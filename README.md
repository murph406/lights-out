# Getting Started with Lights Out

## Getting Started 
Instructions for getting the project running on your machine.

### `nvm use`

Run this script to set the correct node version. 
If you have not installed nvm yet you can follow the install instructions here [https://github.com/nvm-sh/nvm#installing-and-updating] 

### `npm install`
Installs project modules

## `npm run start`
Runs project on port 3000. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


## Project Requirements  
1. The game should display a 5x5 grid of tiles that can be in an "on"/"lit" or "off"/"unlit" state.
2. The game should start in a random state (some tiles on, some off).
3. Clicking a tile should toggle the tile + all adjacent tiles.
4. The game should track and display the total number of moves.
5. The game should have a "restart" button which resets the move count to zero and the game to a random state.
6. If the user is able to turn off all of the lights, the game should display a success message with the option to restart the game.