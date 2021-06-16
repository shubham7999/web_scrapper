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
    
}