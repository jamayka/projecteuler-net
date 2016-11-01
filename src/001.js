import { range } from './functions'

export default () => ((limit) => {
    let mergeUnique = (a, b) => [...new Set([...a, ...b])];

    return mergeUnique(range(limit - 1, 3, 3), range(limit - 1, 5, 5))
        .reduce((n, m) => n + m, 0);
})(1000);