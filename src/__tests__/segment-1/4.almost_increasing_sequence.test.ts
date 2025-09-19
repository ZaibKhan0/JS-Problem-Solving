import { increasingSequence } from "@/segment-1/4.almost_increasing_sequence";
import { describe, it, expect } from "bun:test"

describe("increasingSequence", () => {
    it("should return true if an incremental sequence is provided", () => {
        const sequence = [1, 2, 3];
        const result = increasingSequence(sequence);
        expect(result).toBeTrue()
    })

    it("should reutrn false if a decremental sequence is provided", () => {
        const sequence = [3, 2, 1];
        const result = increasingSequence(sequence);
        expect(result).toBeFalse()
    })

    it("should return false if removing an element would not sequence incrementally", () => {
        const randomSequence = [1, 3, 2, 1];
        const result = increasingSequence(randomSequence);
        expect(result).toBeFalse();
    })
    
    it("should handle both negative and positive numbers", () => {
        const arr = [...Array(201).keys()].map((_, i) => i - 100);
        const result = increasingSequence(arr);
        expect(result).toBeTrue()
    })
})
