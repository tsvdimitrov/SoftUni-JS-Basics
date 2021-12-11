function demo(input) {

    let resto = Number(input[0]);
    let integralPart = Math.trunc(resto)
    let coinsI = Math.trunc(integralPart / 2) + integralPart % 2;
    let coinsPm = 0;
    let coinsPn = 0;
    let coins = 0
    resto = resto.toFixed(2)
    let m = resto[resto.length - 1]
    let n = resto[resto.length - 2]
    switch (m) {
        case '1':
        case '2':
        case '5': coinsPm = 1; break;
        case '3':
        case '4':
        case '6':
        case '7': coinsPm = 2; break;
        case '8':
        case '9': coinsPm = 3; break;
        default:
    }
    switch (n) {
        case '1':
        case '2':
        case '5': coinsPn = 1; break;
        case '3':
        case '4':
        case '6':
        case '7': coinsPn = 2; break;
        case '8':
        case '9': coinsPn = 3; break;
        default:
    }
    coins = coinsI + coinsPm + coinsPn
    console.log(coins);
}
demo(["1.23"]);