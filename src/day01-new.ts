// new operator

// 1. create an Object
// 2. prototype & execute
// 3. this
// 4. return

const myNew = <Args extends Array<any>, Instance extends object>(Fn: new (..._: Args) => Instance, ...args: Args): Instance => {
    let res: Instance = {} as any
    if(Fn.prototype !== null) {
        // @ts-ignore
        res.__proto__ = Fn.prototype
    }
    let rec = Fn.apply(res,args) as any
    if((typeof rec === 'object' || typeof rec === 'function') && rec !== null) {
        return rec
    }
    return res
}

// test case

class A {
    name: string
    age: number
    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
    sayName(){
        console.log(this.name)
    }
    sayAge(){
        console.log(this.age)
    }
}

let a = myNew(A,'james',18)

console.log(a)
a.sayName()
a.sayAge()

// let b = new A('james',18)

class C {
    c: number
    constructor(num: number){
        this.c = num
    }
}
let d = {

}
C.call(d,1111) // newable

function D(this: any, num: number) {
    this.d = num
}
D.call(d,999) // callable