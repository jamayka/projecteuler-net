var projectEuler002 = (function (limit) {
    let (
        fibonacci = function (limit) {
            var fn1 = 1, fn2 = 1;
            while (fn2 <= limit) {
                [fn1, fn2] = [fn2, fn1 + fn2];
                yield fn2;
            }
        }
    ) {
        return [i for each (i in fibonacci(limit)) if (i % 2 === 0)].reduce((n, m) => n + m, 0);
    }
}(4000000));