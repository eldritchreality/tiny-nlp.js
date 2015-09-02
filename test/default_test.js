var should = require("chai").should();
var nlp = require(__dirname+"/../index.js");

describe("The NLP Library", function () {
    
    it("Should load a list of Stopwords",function(done) {
        nlp.stopwords.should.be.an('array');
        nlp.stopwords.should.have.length.of.at.least(500);
        done();
    });
    
    it("Should load an array of known nouns",function(done) {
        nlp.nouns.should.be.an('array');
        nlp.nouns.should.have.length.of.at.least(500);
        done();
    });
    
    it("Should load an array of known adjectives",function(done) {
        nlp.adjectives.should.be.an('array');
        nlp.adjectives.should.have.length.of.at.least(500);
        done();
    });
    
    it("Should normalise unicode punctuation",function() {throw new Error("unwritten test");});
    
    it("Should split text into sentences",function() {});
    
    it("Should split sentences into word level tokens",function(done) {
        var testSentence = "is this a proper sentence";
        var expectedResult = ["is","this","a","proper","sentence"];
        var result = nlp.tweetTokenizer.tokenize(testSentence);
        
        result.toString().should.equal(expectedResult.toString());
        done()
    });
    
    it("Should be able to convert words into their stemmed forms",function() {throw new Error("unwritten test");}); // Get the 'stem' form of a word e.g. 'cats' -> 'cat'
    
    it("Should be able to find interesting words in the corpus",function() {throw new Error("unwritten test");}); // not that important for my use case
    
    it("Should be able to build a sentence out of a list of tikis",function() {throw new Error("unwritten test");});
    
    it("Should be able to determine if we need a space between two tokens",function() {throw new Error("unwritten test");});
    
    it("Should be able to identify if a token is block of punctuation",function() {throw new Error("unwritten test");});
    
    it("Should be able to identify if a token is a stopword",function() {throw new Error("unwritten test");});
    
    it("Should be able to tell if output contains unmatched brackets or quotes",function() {throw new Error("unwritten test");});
    
    it("Should be able to determine if a sequence is a subsequence of another sequence",function() {throw new Error("unwritten test");});
    
    it("Should load an html entity decoder",function() {throw new Error("unwritten test");}); //should it really, sureley this is already built into node?
    
});