# Customer Relationship Management Web Application

# Environment setup

## Install Node.js 

### Ubuntu 18.04

Install Node.js through nvm (Node Version Manager)
- Access the nvm repository: https://github.com/nvm-sh/nvm
- Copy the cURL command in "Install & Update script" and run it in your terminal.
- See all Node.js version by nvm: `nvm list-remote`
- Install the a specific Node.js version using nvm: `nvm [node.js version]`. Example, if you want to install node.js version v14.17.0, you will run the command: `nvm v14.17.0`
- Check the installation
```
node --version # or node -v
npm --version # or npm -v
```

### Windows

- Download Node.js here (choose Windows Installer): https://nodejs.org/en/download/
- Check the installation
```
node --version # or node -v
npm --version # or npm -v
```

# Run the project

## Preparing

Open the terminal and run: `npm install`

## Running

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Create a new workspace

## Create a new project
```
cd your_dir
npx create-react-app your-project-name
```
1. Dependencies for ReactJS
```
npm install bootstrap
npm install jquery popper.js
npm install node-sass
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
npm install react-router-dom
npm install bootstrap-daterangepicker moment
npm install react-bootstrap-daterangepicker
npm install formik 
npm install yup
npm install axios
```

2. Dependencies for NodeJS
```
npm install express
npm install mongoose
npm install dotenv
npm install cors
npm install morgan
npm install passport passport-jwt passport-local jsonwebtoken
npm install -g nodemon
```