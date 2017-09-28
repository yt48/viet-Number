const n = Number(prompt('Enter n'));

function fibonacci1(n) {
    return n <= 1 ? n : fibonacci1(n - 1) + fibonacci1(n - 2);
}

document.write('Numer is' + fibonacci1(n) + ' ' + '</br>');

const n1 = Number(prompt('Enter n1'));

function loopFibonacci(n1) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n1; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
document.write(loopFibonacci(n1));
