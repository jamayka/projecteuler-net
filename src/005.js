import { range, primes } from './functions';

export default () => ((end) => {
    let multiples = [];

    for (let n of range(end)) {
        let m = [...multiples];
        for (let i of primes(n)) {
            if (n === 1) {
                break;
            }

            while (i > 1 && !(n % i)) {
                n = n / i;

                if (m.includes(i)) {
                    m.splice(m.indexOf(i), 1);
                } else {
                    multiples.push(i);
                }
            }
        }
    }

    return multiples.reduce((a, b) => a * b, 1);
})(20);
