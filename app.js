const axios = require("axios");
const cheerio = require("cheerio");

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
    default:
      console.log(`
                  ${urls[0]}
                  `)
      break;
  }

}).catch(err => console.log(err))

