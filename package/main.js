
const languages = require('./languages.json');

exports.getDate = function (lang) {
    const today = new Date();

    const options = {
        year: 'numeric',
        month: 'long',
        weekday: 'short',
        day: 'numeric'
    };

    var bcpCode = '';

    if (lang === '') {
        return "invalid entry";
    }
    else {

        Object.entries(languages).forEach(function ([key, value]) {

            if (lang.toLowerCase() === key.toLowerCase()) {
                bcpCode = value;

            }
        });

        if (bcpCode !== '') {
            return today.toLocaleString(bcpCode, options);
        }
        else {
            return `${lang} is not available.`;
        }

    }

}

