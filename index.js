const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";
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
    let ele = $(".d-flex.match-comment-padder.align-items-center>div>div>div>div>p");
    let val = $(ele[0]).text();
    let htmldoc = $(ele[0]).html();
    console.log("html" , htmldoc);
    console.log(val);
    console.log($(ele[0]).html());
   console.log(ele);
 
}












// .d-flex.match-comment-padder.align-items-center>div>div>div>div>p