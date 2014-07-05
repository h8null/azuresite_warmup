function warmup() {
    warmUpSite("http://<yoursite>.azurewebsites.net/");
    warmUpSite("http://<yoursite>.azurewebsites.net/");
}

function warmUpSite(url) {
    console.info("warming up: " + url);
    
    var req = require('request');
    req.get({ url: url }, function(error, response, body) {
        if (!error) {
            console.info("hot! " + url);
        } else {
            console.error('error warming up ' + url + ': ' + error);
        }       
    });
}
