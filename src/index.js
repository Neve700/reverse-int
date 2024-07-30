module.exports = function reverse (n) {
        let str = n.toString();
        let splitString = str.split('');
        let reverseString = splitString.reverse();
        return parseInt(reverseString.join(''));
};
