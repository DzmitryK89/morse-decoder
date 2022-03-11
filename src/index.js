const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let emptyArr = []
    for (let i = 0; i < expr.length; i = i + 10) {
        emptyArr.push(expr.slice(i, i + 10))
    }
    let mappedEmptyArr = emptyArr.map(x => x.length < 10 ? x.padStart(10, '0') : x) 
    let withSpaceArr = mappedEmptyArr.map(s => s === '**********' ? ' ': s) 
    let replaceArr = withSpaceArr.map(y => y.replace(/10/g, '.'))
    let replace1Arr = replaceArr.map(z => z.replace(/11/g, '-'))
    let withoutNullArr = replace1Arr.map(k => k.replace(/00/g, '')) 
    
    let result = withoutNullArr.map(a => a === ' ' ? ' ':MORSE_TABLE[a])
    let finalResult = ''
    for (let i = 0; i < result.length; i++) {

        finalResult = finalResult + result[i]   
    }
    return finalResult
}
module.exports = {
    decode
}
