var util = require('util');
var twitter = require('twitter');
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 3000 });

var twit = new twitter({
   consumer_key: '0g0UZF2fwQrl3wt4TizelVdvt',
   consumer_secret: 'D5gERnxKLuQnJn7usCDqBbhVLijUMK7Q7UCUJbTVftFFd6h38T',
   access_token_key: '750635248027774976-S1Xl8jujK92UsNDqTeDHGDDtl6Kilyw',
   access_token_secret: 'lsRA08AN0T6eB6maxqNhw557Lr1CkzCZUzbXiE2IzSxAW'
});

var keyword = process.argv[2];
var option = { 'track': keyword };
console.log(keyword + 'を含むツイートを取得します。');
wss.on('connection', function(ws) {
   twit.stream('statuses/filter', option, function(stream) {
       stream.on('data', function(data) {
           ws.send(data.text);
           //ws.send("abcdefghijklmnopqrs");
           console.log(data);
       });
   });
});