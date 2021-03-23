/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import { v4 as uuidv4 } from 'uuid';
const axios = require('axios').default;

require('dotenv').config();

const uuid = uuidv4();
console.log(`UUID generado por la librería 'uuid' de NPM: ${uuid}`);

axios.get('http://swapi.dev/api/planets/')
    .then((response) => {
        console.log('Lista de planetas de Star Wars: ', response);
    })
    .catch((error) => {
        console.log(error);
    });