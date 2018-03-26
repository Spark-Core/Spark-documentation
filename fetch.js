var request = require("request");
var fs = require("fs")
var YAML = require('json2yaml')
var endpoint = "https://spark-stats-homepage-yszvjzhnmp6p.runkit.sh/"

request({ uri: endpoint, json: true }, (error, response, body) => {
    if (error || response.statusCode !== 200) { return }
    output = YAML.stringify(body);

    fs.writeFile("./_data/stats.yml", output, function(err) {
        console.error(err)
    })

})