// 3. Generate a rectangular matrix of characters, add a border of asterisks to it.

export const addBorder = (picture: string[]) => {
    let maxLen = 0;
    picture.forEach(e => {
        if (e.length > maxLen) {
            maxLen = e.length
        }
    })

    let asterisks = "**"
    for (let i = 0; i < maxLen; i++) {
        asterisks = asterisks.concat("*");
    }

    const arr = picture.map((e) => {
        let elem = `*${e}`
        for (let i = 0; i < maxLen - e.length; i++) {
            elem = elem.concat(" ");
        }
        elem = elem.concat("*");
        return elem;
    })

    arr.unshift(asterisks)
    arr.push(asterisks)

    return arr;
}
