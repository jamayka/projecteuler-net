
export default () => ((n) => {
    let
        naturals = function* (end) {
            for (let i = 0; i < end; ++i) {
                yield i;
            }
        },

        primes = function* (end) {
            let numbers = [];
            for (let i of naturals(end)) {
                if (!numbers[0] || numbers.every((j) => i % j)) {
                    numbers.push(i);
                    yield i;
                }
            }
        };

    for (let i of primes(n)) {
        if (n <= i) {
            return n;
        }

        while (i > 1 && !(n % i)) {
            n = n / i;
        }
    }
})(600851475143);
