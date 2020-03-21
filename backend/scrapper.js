const fetch = require('node-fetch');
const cheerio = require('cheerio');
const cheerioTableParser = require('cheerio-tableparser');

//scrapping for covid19 actualisation data real-time
const searchUrl = 'https://www.worldometers.info/coronavirus';


//scrapping for news about covid19
const actuUrl =
  'http://www.euro.who.int/fr/home/sections/news/news?root_node_selection=422654&page_asset_listing_43567_submit_button=Recherche';




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


function getAllActu(){
  return fetch(`${actuUrl}`).then(response => response.text())
    .then(body => {
      const actuTab = [];
      let j = 0;
      const $ = cheerio.load(body);
      $('.simple-list li').each(function(i,element) {
        { const $element = $(element);
          const $title = $element.find('div').contents().eq(0);
          const $date = $element.find('a div time');
          const $description = $element.find('a div p');
          const $src = $element.find('a').attr('href');
          const actu = {
            title : $title.text().trim(),
            date : $date.text(),
            description : $description.text(),
            src : $src
          }
          while (j<11) {
            actuTab.push(actu);
            j++;
          }
        }
      });
      return actuTab;
});
}


module.exports = {
    getAllInfo,
    getTotalWorldStat,
    getInfoByCountry,
    getAllActu,
}