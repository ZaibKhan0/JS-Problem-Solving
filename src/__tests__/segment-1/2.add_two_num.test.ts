import { describe, it, expect } from "bun:test";
import { addNums, addTwoNum } from "@/segment-1/2.add_two_num";

describe("addTwoNum", () => {
    it("should add two positive numbers", () => {
        const result = addTwoNum(2, 2);
        expect(result).toBe(4);
    })
    
    it("should add two negative numbers", () => {
        const result = addTwoNum(-2, -3);
        expect(result).toBe(-5)
    })
    
    it("should add a positive and a negaive number", () => {
        const result = addTwoNum(-2, 3);
        expect(result).toBe(1);
    })
})

describe("addNums", () => {
    it("should return sum of all provided numbers", () => {
        const result = addNums(1, 2);

        expect(result).toBe(3);
    })
    
    it("should return sum of positive and negative numbers", () => {
        const result = addNums(1, -2);
        expect(result).toBe(-1)
    })
    
    it("should handle more than two arguments", () => {
        const result = addNums(1, 2, 3, 4, 5);
        expect(result).toBe(15);
    })
})
