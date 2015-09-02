var should = require("chai").should();
var nlp = require("index.js");

define("The NLP Library", function () {
    
    it("Should load a list of Stopwords",function(done) {
        
        
        
        done();
    });
    
    it("Should load an array of known nouns",function() {});
    
    it("Should load an array of known adjectives",function() {});
    
    it("Should load a part of speech tagging library",function() {});
    
    it("Should load an html entity decoder",function() {}); //should it really, sureley this is already built into node?
    
    it("Should normalise unicode punctuation",function() {});
    
    it("Should split text into sentences",function() {});
    
    it("Should split sentences into word level tokens",function() {});
    
    it("Should be able to convert words into their stemmed forms",function() {}); // Get the 'stem' form of a word e.g. 'cats' -> 'cat'
    
    it("Should be able to find interesting words in the corpus",function() {}); // not that important for my use case
    
    it("Should be able to build a sentence out of a list of tikis",function() {});
    
    it("Should be able to determine if we need a space between two tokens",function() {});
    
    it("Should be able to identify if a token is block of punctuation",function() {});
    
    it("Should be able to identify if a token is a stopword",function() {});
    
    it("Should be able to tell if output contains unmatched brackets or quotes",function() {});
    
    it("Should be able to determine if a sequence is a subsequence of another sequence",function() {});
    
})