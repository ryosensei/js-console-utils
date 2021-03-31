const term         = require('term').terminal;
const VERBOSE      = require('./arguments');
const { DateTime } = require('luxon');

const log = (txt, color = 'white', level = 0, length = null) => {
    if (VERBOSE >= level) {
        let now = DateTime.now().toFormat("HH:mm:ss");
        term[color](`[${now}] `);
        if (length !== null) {
            if (txt.length < length - 1) {
                do {
                    txt += fillWith;
                } while (txt.length < length);
                txt += " ";
            }
        }
        if (txt instanceof Object) {
            console.log(txt);
        }
        term[color](txt);
    }
}

exports.log = log;