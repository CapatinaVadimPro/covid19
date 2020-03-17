const express = require("express");
const scrapper = require("./scrapper");

const app = express();


const all = require("./router.js");

app.get('/', (req, res) => {
  res.json({
    message: "Scriping is Fun!"
  });
});

app.get('/all', (req, res) => {
  scrapper.getAllInfo().then(infos => {
    const data = res.json(infos);
    return data;
  });
});

app.get('/all-country', (req, res) => {
  scrapper.getInfoAllCoutry().then(data => {
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
