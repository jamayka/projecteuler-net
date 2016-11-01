import * as problems from './src/problems';
import * as answers from './src/correct-answers';

let run = (n) => {
    if (problems['p' + n]) {
        let result = problems['p' + n]();
        console.info(
            'Problem #' + n + ': ' + result +
            (answers['s' + n] === result ? ' Correct!' : ' - should be ' + answers['s' + n])
        );
    }
};

if (process.argv.length > 2) {
    run(('000' + process.argv[2]).substr(-3));
} else {
    Object.keys(problems).forEach((k) => { run(k.substr(1)); });
}
