type MapType<T> = {
    [
        Key in keyof T 
            as `${Key & string}${Key & string}${Key & string}`
    ]: [T[Key], T[Key], T[Key]]
}

type res = MapType<{a: 1, b: 2}>;

type aa = string
type bb = 'fefefe'
type cc = Promise<number>


const haha: aa = 'fefefe'


const ddd: bb = 'fefefe'


const ccc: cc = new Promise<number>((resolve, reject) => {
    resolve(123123)
})
