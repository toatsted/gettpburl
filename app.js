const axios = require("axios");
const chalk = require("chalk");
const cheerio = require("cheerio");

if( process.argv[2] === "-o" || process.argv[2] === "-u" ||
   process.argv[2] === "--onion" || process.argv[2] === "--url" ) {
  axios({
    method: "get",
    url: "https://old.reddit.com/r/tpb"
  }).then(function(response) {
    const $ = cheerio.load(response.data);

    let urls = [];

    $("form.usertext div.md p strong a").each(function(idx) {
      urls.push($(this).attr("href"));
    })

    switch(process.argv[2]) {
      case "-o":
      case "--onion":
        console.log(`
                    ${urls[1]}
                    `)
        break;
      case "-u":
      case "--url":
        console.log(`
                    ${urls[0]}
                    `)
        break;
      default:
        console.log(`
                    you did something wrong
                    `)
        break;
    }

  }).catch(err => console.log(err))


} else {
  require("./tpb")(process.argv.slice(2).join(" "));
}

