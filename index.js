import * as list from './src/list.js';

let run = (n) => {
    if (list['p' + n]) {
        console.info('Problem #' + n + ': ' + list['p' + n]());
    }
};

if (process.argv.length > 2) {
    run(('000' + process.argv[2]).substr(-3));
} else {
    Object.keys(list).forEach((k) => { run(k.substr(1)); });
}
