exports.getDate = function (lang) {
    const today = new Date();
    const _ = require('lodash');
    const options = {
        year: 'numeric',
        month: 'long',
        weekday: 'short'
    };

    const reqLang = _.lowerCase(lang);

    if (reqLang === 'english') {
        return today.toLocaleString('en-US', options);
    }
    else if (reqLang === 'chinese') {
        return today.toLocaleString('zh-TW', options);
    }
    else if (reqLang === 'nepali') {
        return today.toLocaleString('ne-NP', options);
    }
    else {
        return "invalid entry";
    }
}