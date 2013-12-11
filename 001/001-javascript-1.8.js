var projectEuler001 = (function (limit) {
    let (
        naturals = function (end) {
            for (let i = 0; i < end; ++i) {
                yield i;
            }
        }
    ) {
        return [i for each (i in naturals(limit)) if (i % 3 == 0 || i % 5 == 0)]
            .reduce((n, m) => n + m, 0);
    };
}(1000));