function printX(word) {
    const chars = [...word]
    const len = chars.length

    for (let i = 0; i < len; i++) {
        let row = chars.map((ch, j) =>
            j === i || j === len - i - 1 ? ch : " "
        ).join("")
        console.log(row)
    }
}

printX("testtest")
