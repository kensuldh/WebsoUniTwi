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
        keywords: ["星","ほし", "star", "stars", "stella"]
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
        keywords: ["太陽","たいよう", "sun"]
    },
    {
        item: "cres",
        key: "e",
        keywords: ["三日月","みかづき", "mikazuki","Crescent Moon"]
    },
    {
        item: "full",
        key: "f",
        keywords: ["満月","月","つき","full moon","moon"]
    },
    {
        item: "earth",
        key: "g",
        keywords: ["地球","earth", "ちきゅう"]
    },
    {
        item: "sat",
        key: "h",
        keywords: ["土星", "どせい","saturn", "ドーナッツ", "どーなっつ","donuts"]
    },
    {
        item: "proj",
        key: "i",
        keywords: ["投影機", "とうえいき","projector"]
    },
    {
        item: "venus",
        key: "j",
        keywords: ["金星","きんせい", "venus"]
    },
    {
        item: "uranu",
        key: "k",
        keywords: ["天王星","てんのうせい", "uranus"]
    },
    {
        item: "plu",
        key: "l",
        keywords: ["冥王星", "めいおうせい","pluto"]
    },
    {
        item: "nept",
        key: "m",
        keywords: ["海王星","かいおうせい", "neptune"]
    },
    {
        item: "mercu",
        key: "n",
        keywords: ["水星", "mercury"]
    },
    {
        item: "mars",
        key: "o",
        keywords: ["火星","かせい", "mars"]
    },
    {
        item: "jupi",
        key: "p",
        keywords: ["木星","もくせい", "jupiter"]
    },
    {
        item: "aql",
        key: "q",
        keywords: ["わし", "鷲", "aquila"]
    },
    {
        item: "cyg",
        key: "r",
        keywords: ["はくちょう", "白鳥", "cygnus"]
    },
    {
        item: "lyr",
        key: "s",
        keywords: ["こと", "琴", "lyra"]
    },
    {
        item: "ori",
        key: "t",
        keywords: ["オリオン","おりおん" ,"orion"]
    },
    {
        item: "cma",
        key: "u",
        keywords: ["おおいぬ", "大犬",　"canis major"]
    },
    {
        item: "cmi",
        key: "v",
        keywords: ["こいぬ", "子犬",　"canis minor"]
    },
    {
        item: "tau",
        key: "w",
        keywords: ["おうし", "牡牛",　"taurus"]
    },
    {
        item: "gem",
        key: "x",
        keywords: ["ふたご", "双子",　"gemini"]
    },
    {
        item: "vir",
        key: "y",
        keywords: ["おとめ", "乙女",　"virgo"]
    },
    {
        item: "cnc",
        key: "z",
        keywords: ["かに", "蟹",　"cancer"]
    },
    {
        item: "leo",
        key: "0",
        keywords: ["しし", "獅子",　"leo"]
    },
    {
        item: "sgr",
        key: "1",
        keywords: ["いて", "射手",　"sagittarius"]
    },
    {
        item: "sco",
        key: "2",
        keywords: ["さそり", "蠍",　"scorpius"]
    },
    {
        item: "lib",
        key: "3",
        keywords: ["てんびん", "天秤",　"libra"]
    },
    {
        item: "ari",
        key: "4",
        keywords: ["おひつじ", "牡羊",　"aries"]
    },
    {
        item: "aqr",
        key: "5",
        keywords: ["みずがめ", "水瓶",　"aquarius"]
    },
    {
        item: "cap",
        key: "6",
        keywords: ["やぎ", "山羊",　"capricornus"]
    },
    {
        item: "psc",
        key: "7",
        keywords: ["うお", "魚",　"pisces"]
    },
    {
        item: "uma",
        key: "8",
        keywords: ["おおぐま", "大熊",　"ursa major"]
    },
    {
        item: "umi",
        key: "9",
        keywords: ["こぐま", "子熊",　"ursa minor"]
    },
    {
        item: "boo",
        key: "A",
        keywords: ["うしかい", "牛飼い",　"bootes"]
    },
    {
        item: "cvn",
        key: "B",
        keywords: ["りょうけん", "猟犬",　"canes venatici"]
    },
    {
        item: "aur",
        key: "C",
        keywords: ["ぎょしゃ", "馭者",　"auriga"]
    },
    {
        item: "cas",
        key: "D",
        keywords: ["カシオペヤ", "カシオペア","かしおぺあ","かしおぺや",　"cassiopeia"]
    },
    {
        item: "peg",
        key: "E",
        keywords: ["ペガスス", "ペガサス","ぺがすす","ぺがさす",　"pegasus"]
    },
    {
        item: "per",
        key: "F",
        keywords: ["ペルセウス","ぺるせうす", "perseus"]
    },
    {
        item: "her",
        key: "G",
        keywords: ["ヘルクレス", "ヘラクレス","へるくれす","へらくれす", "hercules"]
    },
    {
        item: "gala",
        key: "H",
        keywords: ["銀河", "アンドロメダ","あんどろめだ"]
    },
    {
        item: "iss",
        key: "I",
        keywords: ["国際宇宙ステーション", "こくさいうちゅうすてーしょん","iss"]
    },
    {
        item: "come",
        key: "J",
        keywords: ["彗星", "すいせい","comet"]
    },
    {
        item: "kako",
        key: "K",
        keywords: ["過去", "かこ","past"]
    },
    {
        item: "sumtri",
        key: "qrs",
        keywords: ["夏の大三角", "なつのだいさんかく"]
    },
    {
        item: "wintri",
        key: "utv",
        keywords: ["冬の大三角", "ふゆのだいさんかく"]
    },
    {
        item: "wintri",
        key: "utvwxC",
        keywords: ["冬のダイヤモンド", "冬のダイアモンド", "ふゆのだいあもんど", "ふゆのだいやもんど"]
    },
    {
        item: "heart",
        key: "LLLLLLLLLL",
        keywords: ["プラネカフェ", "ぷらねかふぇ"]
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
    text = text.toLowerCase();
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