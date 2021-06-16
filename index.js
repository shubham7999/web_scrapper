const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentar";
const request = require("request");
console.log("before");
request(url , callback);
function callback(err, response, html)
{
   if(err)
   {
       console.log("Something went wrong");
   }
   else{
       console.log(html);
       console.log("No error");
   }
}
console.log("After");