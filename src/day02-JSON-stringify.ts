// JSON.stringify

function stringify(obj: any): string {
    let TYPE = typeof obj
    if (TYPE !== 'object') {
        if(TYPE === 'undefined') return ''
        if (
            TYPE === 'function' ||
            TYPE === 'string'
        ) {
            return `"${obj}"`
        } else {
            return obj
        }
    } else {
        let arr = []
        let isArray = Array.isArray(obj)
        for (let [key, val] of Object.entries(obj)) {
            let TYPE = typeof val
            if(TYPE === 'undefined') continue
            if (
                TYPE === 'function' ||
                TYPE === 'string'
            ) {
                val = `"${val}"`
            } else if (TYPE === 'object' && val !== null) {
                val = stringify(val)
            }
            arr.push(isArray ? val : `"${key}":${val}`)
        }
        return isArray ? `[${arr.toString()}]` : `{${arr.toString()}}`
    }
}

let a2 = { x: 5 }

let b2 = [1, "false", false]
let c2 = { b: undefined, c: null }
let d2 = { b: undefined }

console.group('1')
console.log(stringify(a2))
console.log(JSON.stringify(a2))
console.groupEnd()

console.group('2')
console.log(stringify(b2))
console.log(JSON.stringify(b2))
console.groupEnd()

console.group('3')
console.log(stringify(c2))
console.log(JSON.stringify(c2))
console.groupEnd()

console.group('4')
console.log(stringify(d2))
console.log(JSON.stringify(d2))
console.groupEnd()