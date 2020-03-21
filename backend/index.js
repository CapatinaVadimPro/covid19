const express = require("express");
const cors = require("cors");
const scrapper = require("./scrapper");
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: "Scriping is Fun!"
  });
});

app.get('/all-info', (req, res) => {
  scrapper.getAllInfo().then(data => {
    res.send(data);
    console.log("action demanded all info");
  });
});

app.get('/global-info', (req, res) => {
  scrapper.getTotalWorldStat().then(data => {
    res.send(data);
    console.log("action demanded global info");
  });
});

app.get('/all-country/:country', (req, res) => {
  console.log(req.params.country);
    scrapper
      .getInfoByCountry(req.params.country)
      .then(data=> {
           res.send(data);
        });
});

app.get('/all-actu', (req, res) => {
  scrapper.getAllActu().then(data => {
    res.send(data);
  });
});

/*
app.get("/recoverd", (req, res) => {
  scraper.getArticleUbdx(req.params.category, req.params.link).then(article => {
    res.json(article);
  });
});

app.get("/deaths", (req, res) => {
  scraper.getArticleUbdx(req.params.category, req.params.link).then(article => {
    res.json(article);
  });
});
*/
const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
