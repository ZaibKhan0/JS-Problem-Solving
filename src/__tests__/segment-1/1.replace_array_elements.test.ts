import { describe, it, expect } from "bun:test";
import { replaceArrayElems } from "@/segment-1/1.replace_array_elements";

describe("replaceArrayElems", () => {
    it("should replace all occurances of provided elements with specified element", () => {
        const arr = [1, 2, 1];
        const elementToReplace = 1;
        const substractionElem = 3;

        const result = replaceArrayElems(arr, elementToReplace, substractionElem);

        expect(result).toEqual([3, 2, 3])
    })

    it("should return the same array when no replacement is needed", () => {
        const arr = [1, 2, 3];

        const result = replaceArrayElems(arr, 4, 5);

        expect(result).toEqual(arr)
    })

    it("should handle an empty array", () => {
        const arr: number[] = [];

        const result = replaceArrayElems(arr, 2, 3);

        expect(result).toEqual([])
    })

    it("should return same length", () => {
        const arr = [3, 2, 3, 4, 3, 1, 4, 5, 1, 3];
        const result = replaceArrayElems(arr, 3, 1);
        expect(result.length).toBe(arr.length);
    })
})
