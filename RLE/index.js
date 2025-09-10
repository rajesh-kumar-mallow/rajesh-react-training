const compress = (a) => {
    if(!a.trim()){
        throw 'Invalid string'
    }
    let acc = '';
    for (i = 0; i < a.length; i++) {
        if (a[i] === a[i + 1]) {
            let count = 2
            for (j = i + 2; j < a.length; j++) {
                if (a[i] === a[j]) {
                    count++
                } else {
                    break;
                }
            }
            acc = acc + `${a[i]}${count}`
            i = i + count - 1;
        } else {
            acc = acc + a[i] + '1'
        }
    }
    return acc;
}
const decompress = (a) => {
    if(!a.trim()){
        throw 'Invalid string'
    }

    let arr = a.match(/[a-zA-Z]\d+|\d+/g)
    let acc;
    return arr.reduce((acc, cur) => {
        let [chr, ...count] = cur;
        let acount = count.join('')
        console.log(chr, acount);
        if (!acount) {
            return acc + ' '.repeat(Number(chr))
        }
        return acc + chr.repeat(Number(acount))
    }, acc = '');
}

let a = 'A1bbbbcc  AAbbbbcc'
console.log('compress', compress(a));

console.log('decompress', decompress(compress(a)))
