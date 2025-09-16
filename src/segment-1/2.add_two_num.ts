// 2. Write a function that returns the sum of two numbers
// Write a function that returns the sum of all numbers regardless of the numbers of params

export const addTwoNum = (num1: number, num2: number): number => {
    return num1 + num2
}

export const addNums = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr, 0)
}
