const expect = require("chai").expect;
const {polybius} = require("../src/polybius.js");

describe("encode a message" , ()=>{
    it("encodes a message with each letter turned into a polybius square" , () =>{
        const expected = "3251131343";
        const actual = polybius("hello");
        expect(actual).to.equal(expected);
    })
    it("encode a message where spaces are maintained " , () =>{
        const expected = "3251131343 2543241341";
        const actual = polybius("hello world");
        expect(actual).to.equal(expected);
    })
    it("encode a message where capital letters are ignored" , () =>{
        const expected = "3251131343 2543241341";
        const actual = polybius("Hello World");
        expect(actual).to.equal(expected);
    })
    it("encode a message where i and j are converted to 42" , () =>{
        const expected = "421123";
        const actual = polybius("jam");
        expect(actual).to.equal(expected);
    })
})

describe("decode a message" , ()=>{
    it("decode a message with each numbered pair turned into a letter" , () =>{
        const expected = "hello";
        const actual = polybius("3251131343" , encode = false);
        expect(actual).to.equal(expected);
    })
    it("decode a message where spaces are maintained" , () =>{
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341" , encode = false);
        expect(actual).to.equal(expected);
    })
    it("decode a message where the number 42 returns both 'i' and 'j'" , () =>{
        const expected = "i/jam";
        const actual = polybius("421123" , encode = false);
        expect(actual).to.equal(expected);
    })
    it("returns false if the string is an odd number with the addition of spaces" , () =>{
        const expected = false;
        const actual = polybius("25244333221" , encode = false);
        expect(actual).to.equal(expected);
    })
})