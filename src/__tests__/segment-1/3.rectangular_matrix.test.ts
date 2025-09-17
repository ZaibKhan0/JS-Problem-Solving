import { describe, it, expect } from "bun:test";
import { addBorder } from "@/segment-1/3.rectangular_matrix";

describe("addBorder", () => {
    it("should add a border of asterisks around the content", () => {
        const picture = ["abc", "def"]
        const result = addBorder(picture)
        expect(result).toEqual(["*****", "*abc*", "*def*", "*****"])
    })

    it("should handle an empty array", () => {
        const result = addBorder([])
        expect(result).toEqual(["**", "**"])
    })

    it("should handle any number of unique elements", () => {
        const strings = new Set();
        while (strings.size < 10) {
            const uuid = crypto.randomUUID().replace(/-/g, "");
            const str = uuid.substring(0, 5)

            strings.add(str);
        }
        const picture = Array.from(strings) as string[];
        const pictureWithBorder = ["*******", ...picture.map(e => `*${e}*`), "*******"]

        const result = addBorder(picture)
        expect(result).toEqual(pictureWithBorder)
    })

    it("should handle elements with random length", () => {
        const strings = []
        const maxLen = 10;
        let strMaxLen = 0;
        while (strings.length < maxLen) {
            const uuid = crypto.randomUUID().replace(/-/g, "");
            const str = uuid.substring(0, Math.floor(Math.random() * maxLen + 1))
            if (strMaxLen < str.length) strMaxLen = str.length
            strings.push(str)
        }
        const asterisks = "*".repeat(strMaxLen + 2)
        const picture = strings;
        const pictureWithBorder = [
            asterisks,
            ...picture.map(e => {
                let elem = `*${e}`;
                for (let i = 0; i < strMaxLen - e.length; i++) {
                    elem = elem.concat(" ")
                }
                elem = elem.concat("*")
                return elem;
            }),
            asterisks];

        const result = addBorder(picture);
        expect(result).toEqual(pictureWithBorder);
    })
})
