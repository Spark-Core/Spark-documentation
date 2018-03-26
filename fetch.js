var request = require("request");
var fs = require("fs")
var endpoint = "https://runkit.io/tobiasfeld22/spark-stats-homepage/2.0.0"

request({ uri: endpoint, json: true }, (error, response, body) => {
    if (error || response.statusCode !== 200) { process.exit(1) }
    var keys = Object.keys(body.stats)
    var values = Object.values(body.stats)
    var output = keys.map((i, n) => (`${i}: ${values[n]}`)).join("\n")
    fs.writeFile("./_data/stats.yml", output, function(err) {
        if (err) { return process.exit(1) }
        console.error("Fetching data succeeded.")
    })
})