export function* range (end, start = 0, step = 1) {
    for (let i = start; i <= end; i += step) {
        yield i;
    }
}

export function* primes (end) {
    let numbers = [];
    for (let i of range(end)) {
        if (!numbers[0] || numbers.every((j) => i % j)) {
            numbers.push(i);
            yield i;
        }
    }
}

export function* even (gen) {
    for (let i of gen) {
        if (i % 2 === 0) {
            yield i;
        }
    }
}

export function* odd (gen) {
    for (let i of gen) {
        if (i % 2 === 0) {
            yield i;
        }
    }
}

export function* fibonacci (limit) {
    let fn1 = 1, fn2 = 1;
    while (fn2 <= limit) {
        [fn1, fn2] = [fn2, fn1 + fn2];
        yield fn2;
    }
}
