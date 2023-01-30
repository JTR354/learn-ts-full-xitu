console.log('hello world2');

const age: number = 123
const you:string = 'str'
const yes: boolean = true
const o: object = {}
let a =  []
const s = Symbol.for('sss')
const b1:bigint = BigInt(666)

console.log(b1);
let u: void = undefined
// u = null
const o2: {} = []

const u2: unique symbol = Symbol('123')

// const u3: unique symbol = u2
interface IRes {
  code: 1 | 2| 3
}


type FuncFoo = (name: string) => number

interface FuncFoo2 {
  (name: string): number
}

const foo:FuncFoo2 = (name)=> name.length

const a2:Record<string, number> = {aa: 23, b: 123}

type Com = string & number


declare class TagProtector< T extends string> {
  protected __tag__: T;
}
type Nominal <T,U extends string> = T & TagProtector<U>

type CNY = Nominal<number, 'CNY'>
type USD = Nominal<number, 'USD'>
const c1 = 100 as CNY
const u1 = 100 as USD
console.log(c1 + u1);
