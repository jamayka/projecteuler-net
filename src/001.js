export default () => ((limit) => {
    let multiples = (n) => function* (end) {
            for (let i = n; i < end; i += n) {
                yield i;
            }
        },
        mergeUnique = (a, b) => [...new Set([...a, ...b])];
    return mergeUnique(multiples(3)(limit), multiples(5)(limit))
        .reduce((n, m) => n + m, 0);
})(1000);