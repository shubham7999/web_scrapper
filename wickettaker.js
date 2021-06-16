// https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");
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
    for(let i=0;i<element.length;i++)
    {
        let htmlele = $(element[i])
        // console.log(htmlele);
         let check = htmlele.hasClass("team-gray");
         console.log(htmlele.find("p").html());
         if(!check) console.log("This one is the winning team" , htmlele.text());
        console.log($(element[i]).html());
        // console.log("first elememt");
    }

    
}