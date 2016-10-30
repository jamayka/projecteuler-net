export default () => ((limit) => {
    let fibonacci = function* (limit) {
            let fn1 = 1, fn2 = 1;
            while (fn2 <= limit) {
                [fn1, fn2] = [fn2, fn1 + fn2];
                yield fn2;
            }
        },
        even = function* (gen) {
            for (let i of gen) {
                if (i % 2 === 0) {
                    yield i;
                }
            }
        };

    return [...even(fibonacci(limit))].reduce((n, m) => n + m, 0);
})(4000000);