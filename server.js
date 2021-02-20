'use strict';
const express = require (`express`);
const app = express();
const expressHandlebars = require(`express-handlebars`);
const tsParticles = require(`tsparticles`)

const PORT = process.env.PORT || 8080;

app.use(express.static(`public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine(`handlebars`, expressHandlebars({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);
require("./routes/html-routes.js")(app);
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
