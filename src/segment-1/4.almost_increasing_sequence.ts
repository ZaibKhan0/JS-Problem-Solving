export const increasingSequence = (arr: number[]) => {
    let curr = arr[0] || 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]! > curr) {
            curr = arr[i]!
        } else if (arr[i]! < curr) {
            return false
        }
    }

    return true;
}
