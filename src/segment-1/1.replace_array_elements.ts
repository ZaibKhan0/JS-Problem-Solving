// 1. Given an array of integers, replace all occurances of elementToReplace with substractionElem.

type Fn = (arr: number[], elementToReplace: number, substractionElem: number) => number[]

export const replaceArrayElems: Fn = (arr, elementToReplace, substractionElem) => {
    return arr.map((elem) => {
        if (elem === elementToReplace) {
            return substractionElem
        }
        return elem
    })
}
