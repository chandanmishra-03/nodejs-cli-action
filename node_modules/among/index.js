const isString = str => typeof str === 'string';

module.exports = function among(start, end, preserved) {
    if (!isString(start) || !isString(end)) {
        throw new TypeError('Check your start and end argument!');
    }

    // Init the regexp once for performance boost. Let the magic happen in the closure.
    const regexp = new RegExp(`\\${start}(.*?)\\${end}`, 'gm');

    return str => {
        const result = [];

        let found;

        while ((found = regexp.exec(str)) !== null) {
            if (preserved) {
                result.push(found[0]);

                continue;
            }

            result.push(found[1]);
        }

        return result;
    };
};
