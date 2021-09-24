const expect = require("chai").expect;
const {caesar} = require("../src/caesar.js");

describe("return false value" , () =>{
    it("return false if no shift value present", ()=>{
        const expected = false;
        const actual = caesar("hello world");
        expect(actual).to.equal(expected);
    });
    it("return false if shift is equal to 0", ()=>{
        const expected = false;
        const actual = caesar("hello world" , 0);
        expect(actual).to.equal(expected);
    });
    it("return false if shift is less then -25", ()=>{
        const expected = false;
        const actual = caesar("hello world" , -26);
        expect(actual).to.equal(expected);
    });
    it("return false if shift is greater then 25", ()=>{
        const expected = false;
        const actual = caesar("hello world" , 26);
        expect(actual).to.equal(expected);
    });
})

describe("encode a message" , () =>{
    it ("encode a message with one word" , ()=>{
        const expected = "jgnnq";
        const actual = caesar("hello" , 2);
        expect(actual).to.equal(expected);
    });
    it ("encode a message with multiple words" , ()=>{
        const expected = "jgnnq yqtnf";
        const actual = caesar("hello world" , 2);
        expect(actual).to.equal(expected);
    })
    it ("encode a message with a negative shift" , ()=>{
        const expected = "fcjjm";
        const actual = caesar("hello" , -2);
        expect(actual).to.equal(expected);
    })
    it ("encode a message at the end of the alphabet" , ()=>{
        const expected = "bcr";
        const actual = caesar("Zap" , 2);
        expect(actual).to.equal(expected);
    })
})

describe("decode a message" , () =>{
    it ("decodes a message with one word" , ()=>{
        const expected = "hello";
        const actual = caesar("jgnnq" , 2 , encode = false);
        expect(actual).to.equal(expected);
    });
    it ("decodes a message with multiple words" , ()=>{
        const expected = "hello world";
        const actual = caesar("jgnnq yqtnf" , 2, encode = false);
        expect(actual).to.equal(expected);
    })
    it ("decodes a message with a negative shift" , ()=>{
        const expected = "hello";
        const actual = caesar("fcjjm" , -2, encode = false);
        expect(actual).to.equal(expected);
    })
    it ("decodes a message at the end of the alphabet" , ()=>{
        const expected = "zap";
        const actual = caesar("bcr" , 2, encode = false);
        expect(actual).to.equal(expected);
    })
})