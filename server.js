// server.js
// where your node app starts

// init project
var express = require("express")
var app = express()
var ip = require("ip")
var PORT = process.env.PORT || 3210

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors")
app.use(cors({
    optionSuccessStatus: 200
})) // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html")
})

// your first API endpoint...
app.get("/api/hello", function (req, res) {
    res.json({
        greeting: "hello API"
    })
})

app.get("/api/whoami", function (req, res) {
    let endereco_ip = ip.address()
    let lang = req.headers["accept-language"]
    let soft = req.headers["user-agent"]
    res.json({
        ipaddress: endereco_ip,
        language: lang,
        software: soft
    })
})

// listen for requests :)
var listener = app.listen(PORT, function () {
    console.log("Your app is listening on port " + listener.address().port)
})