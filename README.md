## Maps in React

Example app of Google Maps Platform usage with React where you can search for places and go to the location on the map.

![enter image description here](https://github.com/iammateus/maps-in-react/blob/assets/demo.png?raw=true)

## Requeriments
This project has a few dependencies that you need to install.
|  Method | Dependencies |
|--|--|
| Docker | [Docker](https://docs.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) |
| Without Docker | [Node](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)|

 ## Installation
Using Docker 

    $ docker-compose up
or

    $ yarn install
or

    $ npm install
To start without docker: yarn/npm start
 ## Env
 A list of required environment variables that you need to set:
| Name | Value |
|--|--|
| REACT_APP_PROXY_URL (A cors bypass) | https://cors-anywhere.herokuapp.com/ |
| REACT_APP_GOOGLE_MAPS_PLACE_AUTOCOMPLETE_API_URL | https://maps.googleapis.com/maps/api/place/autocomplete/json | 
| REACT_APP_GOOGLE_MAPS_PLACE_DETAILS_API_URL | https://maps.googleapis.com/maps/api/place/details/json | 
| REACT_APP_GOOGLE_MAPS_API_KEY |  [Your Google API key](https://support.google.com/googleapi/answer/6158862?hl=en)  | 

## License
[MIT](https://github.com/iammateus/maps-in-react/blob/master/LICENSE)
