var util = require('util');
var twitter = require('twitter');
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 3000 });
var lenArray = []; //keywordの一覧

var twit = new twitter({
    consumer_key: '0g0UZF2fwQrl3wt4TizelVdvt',
    consumer_secret: 'D5gERnxKLuQnJn7usCDqBbhVLijUMK7Q7UCUJbTVftFFd6h38T',
    access_token_key: '750635248027774976-S1Xl8jujK92UsNDqTeDHGDDtl6Kilyw',
    access_token_secret: 'lsRA08AN0T6eB6maxqNhw557Lr1CkzCZUzbXiE2IzSxAW'
});

var keyword = process.argv[2];
var option = { 'track': keyword };
console.log(keyword + 'を含むツイートを取得します。');

var items = [
    {
        obj: "star",
        key: "a",
        keywords: ["星", "star", "stars", "stella"]
    },
    {
        item: "univ",
        key: "b",
        keywords: ["筑波大学", "つくばだいがく", "university of tsukuba","itf"]
    },
    {
        item: "grade",
        key: "c",
        keywords: ["単位", "たんい"]
    },
    {
        item: "sun",
        key: "d",
        keywords: ["太陽", "sun"]
    },
    {
        item: "cres",
        key: "e",
        keywords: ["三日月", "mikazuki","Crescent Moon"]
    },
    {
        item: "full",
        key: "f",
        keywords: ["満月","full moon","moon"]
    },
    {
        item: "earth",
        key: "g",
        keywords: ["地球","earth", "ちきゅう"]
    },
    {
        item: "sat",
        key: "h",
        keywords: ["土星", "saturn", "ドーナッツ", "どーなっつ","donuts"]
    },
    {
        item: "proj",
        key: "i",
        keywords: ["投影機君", "投影機", "projector"]
    },
    {
        item: "venus",
        key: "j",
        keywords: ["金星", "venus"]
    },
    {
        item: "uranu",
        key: "k",
        keywords: ["天王星", "uranus"]
    },
    {
        item: "plu",
        key: "l",
        keywords: ["冥王星", "pluto"]
    },
    {
        item: "nept",
        key: "m",
        keywords: ["海王星", "neptune"]
    },
    {
        item: "mercu",
        key: "n",
        keywords: ["水星", "mercury"]
    },
    {
        item: "mars",
        key: "o",
        keywords: ["火星", "mars"]
    },
    {
        item: "jupi",
        key: "p",
        keywords: ["木星", "jupiter"]
    },
    {
        item: "aql",
        key: "q",
        keywords: ["わし座", "鷲座", "aquila"]
    },
    {
        item: "cyg",
        key: "r",
        keywords: ["はくちょう座", "白鳥座", "cygnus"]
    },
    {
        item: "lyr",
        key: "s",
        keywords: ["こと座", "琴座", "lyra"]
    },
    {
        item: "ori",
        key: "t",
        keywords: ["オリオン座", "orion"]
    }
];

makeKeywords = function() {
    var index = 0;
    for (var i = 0; i < items.length; i++) {
        for (var j = 0; j < items[i].keywords.length; j++) {
            lenArray[index++] = [items[i].keywords[j].replace(/\s+/g, "").toLowerCase(), items[i].key];
        }
    }
    lenArray.sort(function(a, b) {
        if (a[0].length > b[0].length) return -1;
        if (a[0].length < b[0].length) return 1;
        return 0;
    });
    // console.log(lenArray);
    // ws.send(str);
};
makeSend = function(text){
    var str = "";
    if(!text) return "";
    // console.log(text);
    for(var i = 0; i < lenArray.length;i++){
        // console.log(lenArray[i]);
        var n = text.length;
        while(true){
            text = text.replace(lenArray[i][0],"");
            if(n != text.length){
                str += lenArray[i][1];
                n = text.length;
            } else {
                break;
            }
        }
    }
    if(str)
        console.log(str);
    return str;
};
makeKeywords();
wss.on('connection', function(ws) {
    twit.stream('statuses/filter', option, function(stream) {
        stream.on('data', function(data) {
            var text = data.text;
            var str = "";
            if((str = makeSend(text))){
                ws.send(str);
                //console.log(str);
            }
        });
    });
});