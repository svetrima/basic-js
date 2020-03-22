module.exports = function createDreamTeam(members) {
    // throw 'Not implemented';
    // remove line with error and write your code here
    if (!Array.isArray(members)) {
        return false;
    }
    let filterMem = members.filter(value => {
        if (typeof value === 'string') {
            return value;
        }
    }).map(word => {
        return word.trim()[0].toUpperCase(); // cut zero index
    }).sort().join('');
    return filterMem;
};