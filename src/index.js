import template from './partials/template.hbs';

import { users } from './data.js';

const output = template({ users });

document.getElementById('app').innerHTML = output;
