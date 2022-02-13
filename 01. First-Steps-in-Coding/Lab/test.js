function f(num) {
    if (num <= 1) return 1;
    return f(num - 1) + f(num - 2);
}
console.log(f(5))