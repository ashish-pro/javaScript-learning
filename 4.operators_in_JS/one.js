let a = 10
let b= 20
let c = 30.5
let d = '40'
let e = "forty"
let f = "Rahul"
let g = true
let i;

console.log(a+b)  // 30
console.log(a+c)  //40.5
console.log(a+d)  // num + digit-string = 1040  (concatenation happens)
console.log(a+e)  // 10forty   (concatenation)
console.log(a+f)  // 10Rahul
console.log(a+g)  // 11 -- it treates true as 1 and false as 0
console.log(a+i)  // NaN   -- num + undefined = Nan


console.log("Multiplication")

console.log(a*b) // 200
console.log(a*c) // 305
console.log(a*d) // 400  -- num * digit-string = multiplication  -- digit string treated as num when we are doing multiplication
console.log(a*e) // Nan  -- num * String = NaN  (Not a Number)
console.log(a*f) // NaN
console.log(a*g) // 10    -- num * boolean = num   (boolean true - 1 & false -0)
console.log(a*i) // NaN   -- num * undefined = NaN