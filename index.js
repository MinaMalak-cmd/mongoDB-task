import express from 'express';
import session from 'express-session';

import bootstrap from './src/index.router.js';

const app = express()
const port = 5000

bootstrap(app, express, session);

// to run the app `npm run start`
app.listen(port, () => console.log(`Example app listening on port ${port}!`))