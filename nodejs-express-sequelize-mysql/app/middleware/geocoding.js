/* 
    The following must be run first 
        npm install request --save 
*/
var request = require("request");
const googleConfig = require("../config/google.config.js");

exports.FindByKeyWord = function (req, res, next) {

    var API_KEY = googleConfig.API_KEY;
    var BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";

    var address = "1242 Bloor West Toronto Ontario Canada";

    var url = BASE_URL + address + "&key=" + API_KEY;

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("Success!");
            //res.json(body);
            console.log(body);
        }
        else {
            // The request failed, handle it
        }
    });
};
