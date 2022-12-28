const obj={
    a:20,
    b:30,
    c:40,
    d:30
}

const {a,b,...rest}=obj;

console.log(a);
console.log(b);
console.log(rest);