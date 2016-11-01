import { fibonacci, even } from './functions';

export default () => ((limit) => {
    return [...even(fibonacci(limit))].reduce((n, m) => n + m, 0);
})(4000000);