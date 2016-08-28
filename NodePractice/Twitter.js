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
    },
    {
        item: "cma",
        key: "u",
        keywords: ["おおいぬ座", "大犬座",　"canis major"]
    },
    {
        item: "cmi",
        key: "v",
        keywords: ["こいぬ座", "子犬座",　"canis minor"]
    },
    {
        item: "tau",
        key: "w",
        keywords: ["おうし座", "牡牛座",　"taurus"]
    },
    {
        item: "gem",
        key: "x",
        keywords: ["ふたご座", "双子座",　"gemini"]
    },
    {
        item: "vir",
        key: "y",
        keywords: ["おとめ座", "乙女座",　"virgo"]
    },
    {
        item: "cnc",
        key: "z",
        keywords: ["かに座", "蟹座",　"cancer"]
    },
    {
        item: "leo",
        key: "0",
        keywords: ["しし座", "獅子座",　"leo"]
    },
    {
        item: "sgr",
        key: "1",
        keywords: ["いて座", "射手座",　"sagittarius"]
    },
    {
        item: "sco",
        key: "2",
        keywords: ["さそり座", "蠍座",　"scorpius"]
    },
    {
        item: "lib",
        key: "3",
        keywords: ["てんびん座", "天秤座",　"libra"]
    },
    {
        item: "ari",
        key: "4",
        keywords: ["おひつじ座", "牡羊座",　"aries"]
    },
    {
        item: "aqr",
        key: "5",
        keywords: ["みずがめ座", "水瓶座",　"aquarius"]
    },
    {
        item: "cap",
        key: "6",
        keywords: ["やぎ座", "山羊座",　"capricornus"]
    },
    {
        item: "psc",
        key: "7",
        keywords: ["うお座", "魚座",　"pisces"]
    },
    {
        item: "uma",
        key: "8",
        keywords: ["おおぐま座", "大熊座",　"ursa major"]
    },
    {
        item: "umi",
        key: "9",
        keywords: ["こぐま座", "子熊座",　"ursa minor"]
    },
    {
        item: "boo",
        key: "A",
        keywords: ["うしかい座", "牛飼い座",　"bootes"]
    },
    {
        item: "cvn",
        key: "B",
        keywords: ["りょうけん座", "猟犬座",　"canes venatici"]
    },
    {
        item: "aur",
        key: "C",
        keywords: ["ぎょしゃ座", "馭者座",　"auriga"]
    },
    {
        item: "cas",
        key: "D",
        keywords: ["カシオペヤ座", "カシオペア座",　"cassiopeia"]
    },
    {
        item: "peg",
        key: "E",
        keywords: ["ペガスス座", "ペガサス座",　"pegasus"]
    },
    {
        item: "per",
        key: "F",
        keywords: ["ペルセウス座", "perseus"]
    },
    {
        item: "her",
        key: "G",
        keywords: ["ヘルクレス座", "hercules"]
    },
    {
        item: "gala",
        key: "H",
        keywords: ["アンドロメダ銀河", "銀河"]
    },
    {
        item: "iss",
        key: "I",
        keywords: ["国際宇宙ステーション", "iss"]
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