var salient = require("salient"),
    fs = require("fs"),
    expect = require("chai").expect;

var nlp = {}

var stopwords = [];
var nouns = [];
var adjectives = [];
var punctuation = ".?!,";
var tweetTokenizer = new salient.tokenizers.TweetTokenizer();

/* ****************************
Load required data into memory
   **************************** */
void function loadStopWords() {
    var file = fs.readFileSync(__dirname+"/data/stopwords.txt");
    file = file.toString(); // was a buffer
    stopwords = file.split("\n");
} ()

void function loadNouns() {
    var file = fs.readFileSync(__dirname+"/data/nouns.txt");
    file = file.toString(); // was a buffer
    nouns = file.split("\n");
} ()

void function loadAdjectives() {
     var file = fs.readFileSync(__dirname+"/data/adjectives.txt");
     file = file.toString(); // was a buffer
     adjectives = file.split("\n");
} ()

/* ****************
Internal Functions
   **************** */







/* ************
Module Exports
   ************ */

nlp.stopwords = stopwords;
nlp.nouns = nouns;
nlp.adjectives = adjectives;
nlp.tweetTokenizer = tweetTokenizer;

module.exports = nlp;