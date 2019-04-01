## Heroku
This app is published on Heroku, where it runs without back-end setup and uses localStorage to store markers with faked 
HTTP APIs.

[https://medwings.herokuapp.com/](https://medwings.herokuapp.com/)
 

## Setup
Install npm and run below command
### `npm i`


## Launch scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Design

### Reactstrap
Using [reactstrap](https://reactstrap.github.io/), which will make development faster with 
pre-defined components

###Bootstrap CSS

Makes styling more convenient
  
## Functional design
- If Geocode provider returns multiple address for given input, we will show them option to select. e.g. search for `torstra`
- Spinner states while loading resources.

## Mobile Responsive

Application is mobile responsive to all devices and all view ports 
