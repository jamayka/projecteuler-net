import { range } from './functions'

export default () => ((digits) => {
    let
        products = function* (digits) {
            let
                max = Math.pow(10, digits) - 1,
                min = Math.pow(10, digits - 1);

            for (let i of range(max)) {
                for (let j of range(i, Math.ceil(i / 2))) {
                    if (max - j > min && max - (i - j) > min) {
                        yield (max - j) * (max - (i - j));
                    }
                }
            }
        },
        str = (n) => n + '',
        isPalindrome = (s) => str(s) === str(s).split('').reverse().join('');

    for (let product of products(digits)) {
        if (isPalindrome(product)) {
            return product;
        }
    }
})(3);
