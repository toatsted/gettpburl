const chalk = require("chalk");
const Piratebay = require("thepiratebay");

module.exports = function tpb(movie) {
  Piratebay.search(movie, {
    category: "video",
    filter: {
      verified: true
    },
    orderBy: "seeds",
  })
  .then(res => {
    for(let i = 5; i > 0; i--) {
      console.log(`


        ${chalk.red('name')}: 
${res[i].name}
        size:
${res[i].size}
        uploadDate:
${res[i].uploadDate}
        seeders:
${res[i].seeders}
        leechers:
${res[i].leechers}
        link:
${res[i].link}
        magnetLink:
${res[i].magnetLink}

        
                   `);
    } 
  }).catch(err => console.warn(err))
}
