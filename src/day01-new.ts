// new operator

// 1. create an Object
// 2. prototype & execute
// 3. this
// 4. return

const myNew = (Fn: any, ...args: any) => {
    let res = {} as any
    if(Fn.prototype !== null) {
        res.__proto__ = Fn.prototype
    }
    let rec = Fn.apply(res,args)
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