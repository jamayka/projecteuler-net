import { primes } from './functions';

export default () => ((n) => {
    for (let i of primes(n)) {
        if (n <= i) {
            return n;
        }

        while (i > 1 && !(n % i)) {
            n = n / i;
        }
    }
})(600851475143);
