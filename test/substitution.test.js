const expect = require("chai").expect;
const {substitution} = require("../src/substitution.js");

describe("return false value" , ()=>{
    it("return false if no alphabet is included" , ()=>{
        const expected = false;
        const actual = substitution("hello");
        expect(actual).to.equal(expected);
    });
    it("return false if alphabet is not 26 characters" , ()=>{
        const expected = false;
        const actual = substitution("hello" , "alphabetshort");
        expect(actual).to.equal(expected);
    });
    it("return false if alphabet has duplicates" , ()=>{
        const expected = false;
        const actual = substitution("hello" , "abcdefggggggggggqrstuvwwwz");
        expect(actual).to.equal(expected);
    });
})

describe("encode a message" , ()=>{
    it("encode a message using the inputted alphabet" , ()=>{
        const expected = "itssg";
        const actual = substitution("hello" , "qwertyuiopasdfghjklzxcvbnm");
        expect(actual).to.equal(expected);
    });
    it("encode a message with multiple words" , ()=>{
        const expected = "itssg vgksr";
        const actual = substitution("hello world" , "qwertyuiopasdfghjklzxcvbnm");
        expect(actual).to.equal(expected);
    });
    it("encode a message where capital letters are ignored" , ()=>{
        const expected = "itssg";
        const actual = substitution("Hello" , "qwertyuiopasdfghjklzxcvbnm");
        expect(actual).to.equal(expected);
    });
    it("encode a message with special characters" , ()=>{
        const expected = "itssg";
        const actual = substitution("$hello" , "qwertyuiopasdfghjklzxcvbnm");
        expect(actual).to.equal(expected);
    });
})

describe("decode a message" , ()=>{
    it("decode a message using the inputted alphabet" , ()=>{
        const expected = "hello";
        const actual = substitution("pcssi" , "qwertyuiopasdfghjklzxcvbnm" , encode === false);
        expect(actual).to.equal(expected);
    });
    it("decode a message with multiple words" , ()=>{
        const expected = "hello world";
        const actual = substitution("pcssi bidsm" , "qwertyuiopasdfghjklzxcvbnm" , encode === false);
        expect(actual).to.equal(expected);
    });
    it("decode a message where capital letters are ignored" , ()=>{
        const expected = "hello";
        const actual = substitution("pcssi" , "qwertyuiopasdfghjklzxcvbnm" , encode === false);
        expect(actual).to.equal(expected);
    });
    it("decode a message with special characters" , ()=>{
        const expected = "hello";
        const actual = substitution("$pcssi" , "qwertyuiopasdfghjklzxcvbnm" , encode === false);
        expect(actual).to.equal(expected);
    });
})