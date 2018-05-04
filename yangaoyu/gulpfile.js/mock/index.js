var homeData = require('./data/main.json');
var homeData1 = require('./data/main1.json');
var mockApi = {
    '/api/get_home_data': homeData,
    '/api/get_home_data1': homeData1
}

module.exports = function(url) {
    return mockApi[url]
}