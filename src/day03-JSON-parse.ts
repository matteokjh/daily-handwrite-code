function parse(p: string) {
    return eval('('+p+')')
}


let a3 = parse(JSON.stringify({x : 5}))

let b3 = parse(JSON.stringify([1, "false", false]))


console.log(a3,b3)