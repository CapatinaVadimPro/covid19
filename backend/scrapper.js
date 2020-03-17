const fetch = require('node-fetch');
const cheerio = require('cheerio');
const cheerioTableParser = require('cheerio-tableparser');

const searchUrl = 'https://www.worldometers.info/coronavirus';

function getAllInfo() {
    return fetch(`${searchUrl}`)
        .then(response => response.text()).then(body => {
        const infos = [];
        const $ = cheerio.load(body);
        $('div#maincounter-wrap').each(function(i, element) {
           const $element = $(element);
           const $title = $element.find('h1');
           const $number = $element.find('.maincounter-number span');
           const info = {
               title : $title.text(),
               number : $number.text()
           }
           infos.push(info)
        });

        return infos;
    });
}

function getInfoAllCoutry() {
    return fetch(`${searchUrl}`)
        .then(response => response.text()).then(body => {
        const $ = cheerio.load(body);
        cheerioTableParser($);
        const tableDatas= [];
        var data = $('table').parsetable(true, true, true);
        data[0].shift();
        data[0].pop();
        data[1].shift();
        data[1].pop();
        data[2].shift();
        data[2].pop();
        data[3].shift();
        data[3].pop();
        data[4].shift();
        data[4].pop();
        data[5].shift();
        data[5].pop();
        data[6].shift();
        data[6].pop();
        data[7].shift();
        data[7].pop();

        for(let i = 0; i<data[0].length; i++){
            const tableData = {
              id : i,
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

function getInfoByCountry(country) {
    return getInfoAllCoutry().then(data =>{
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
    getInfoAllCoutry,
    getInfoByCountry,
}