import express from 'express';

import bootstrap from './src/index.router.js';

const app = express()
const port = 5000

bootstrap(app, express);

// to run the app `npm run start`
app.listen(port, () => console.log(`Example app listening on port ${port}!`))