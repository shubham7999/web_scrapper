
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");
const chalk = require('chalk');

console.log("before");
request(url , callback);
function callback(err, response, html)
{
   if(err)
   {
       console.log("Something went wrong");
   }
   else{
       extract(html);
       console.log("No error");
   }
}

function extract(html)
{
    let $ = cheerio.load(html);
    let element = $(".match-info.match-info-MATCH .team");
    let best_player = $(".best-player .best-player-name");
    let winteam;
    for(let i=0;i<element.length;i++)
    {
         let htmlele = $(element[i])
         let check = htmlele.hasClass("team-gray");
         let team = htmlele.find("p").text().trim();
         if(!check) 
         {
             console.log(chalk.green("This one is the winning team") + " " + chalk.yellow(team));
             winteam = team;
         }
         else{

            console.log(chalk.red("This one is the Loosing team") + " " + chalk.rgb(233, 148, 151)(team));

         }
    }

    console.log("Man of the Match is " + $(best_player).text());

    givemebowlers($, winteam);


    
}

function givemebowlers($, winteam)
{
    let table = $(".card.content-block.match-scorecard-table");
    for(let i=0;i<table.length;i++)
    {
        if(i<=1){
        let ele = ($(table[i]).find("h5").text());
        let arr = ele.split("INNINGS");
        let name = arr[0].trim();
        if(name != winteam){
        console.log(name);
       // console.log($(table[i]).html())
       let maxwickettaker = "";
       let maxi = -1000000000;
       let list = $(table[i]).find(".bowler tbody tr");

       for(let i=0;i<list.length;i++)
       {
          let row =  $(list[i]).find("td");
          let name = $(row[0]).text();
          let wickets = $(row[4]).text();
          if(wickets > maxi)
          {
              maxwickettaker=name;
              maxi = wickets;
          }

       }

       console.log("Maximum wicket taker is : " + maxwickettaker + " with wickets "+ maxi);

       
     }
   }
        
    }
}

function highestwicket(table)
{
    console.log(table);
}