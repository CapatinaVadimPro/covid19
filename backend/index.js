const express = require("express");
const cors = require("cors");
const scrapper = require("./scrapper");

const app = express();


app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: "Scriping is Fun!"
  });
});

app.get('/all-info', (req, res) => {
  scrapper.getAllInfo().then(data => {
    res.json(data);
  });
});

app.get('/global-info', (req, res) => {
  scrapper.getTotalWorldStat().then(data => {
    res.json(data);
  });
});

app.get('/all-country/:country', (req, res) => {
  console.log(req.params.country);
    scrapper
      .getInfoByCountry(req.params.country)
      .then(data=> {
           res.json(data);
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
