const term         = require('terminal-kit').terminal;
const VERBOSE      = require('./arguments');
const { DateTime } = require('luxon');

const log = (txt, color = 'white', level = 0, length = null, fillWith = " ", showDate = true) => {
    if (VERBOSE >= level) {
        let now = DateTime.now().toFormat("HH:mm:ss");
        if (showDate) {
            term[color](`[${now}] `);
        }
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

    return true;
}

exports.log = log;