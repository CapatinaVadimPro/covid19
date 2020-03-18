const fetch = require('node-fetch');
const cheerio = require('cheerio');
const cheerioTableParser = require('cheerio-tableparser');

const searchUrl = 'https://www.worldometers.info/coronavirus';

function getAllInfo() {
  return fetch(`${searchUrl}`)
    .then(response => response.text())
    .then(body => {
      const $ = cheerio.load(body);
      cheerioTableParser($);
      const tableDatas = [];
      var data = $("table").parsetable(true, true, true);
      data[0].shift();
      data[1].shift();
      data[2].shift();
      data[3].shift();
      data[4].shift();
      data[5].shift();
      data[6].shift();
      data[7].shift();
      for (let i = 0; i < data[0].length; i++) {
        const tableData = {
          id: i,
          country: data[0][i],
          totalCases: data[1][i],
          newCases: data[2][i],
          totalDeaths: data[3][i],
          newDeaths: data[4][i],
          totalRecovered: data[5][i],
          activeCases: data[6][i],
          serious: data[7][i]
        };
        tableDatas.push(tableData);
      }

      return tableDatas;
    });
};


function getTotalWorldStat() {
    return getAllInfo().then(data =>{
            return data[data.length-1];
            }
        );
};

function getInfoByCountry(country) {
    return getAllInfo().then(data =>{
            for(let i = 0; i<data.length; i++){
                console.log(data[i].country);
                if (data[i].country == country ){
                    console.log(data[i]);
                    return data[i];
                }
            }
        });
};

module.exports = {
    getAllInfo,
    getTotalWorldStat,
    getInfoByCountry,
}