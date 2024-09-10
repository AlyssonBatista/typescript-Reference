function toNumber(num: number|string) {
    if(typeof num === 'string'){
        return num
    }else if(typeof num === 'number'){
        return Number(num)
    } else{
     throw "Deve ser um number | string"
    }
}

console.log('teste 1', toNumber(3))
console.log('teste 2', toNumber('3'))
console.log('teste 3', toNumber('#'))