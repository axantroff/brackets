module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length; i++) {
        let bracketsCollection = bracketsConfig[i].join('');
        if (str.includes(bracketsCollection)) {
          i = - 1;
          str = str.replace(bracketsCollection, '');
        }
    }
    if (!str || str === '')
        return true
    else
        return false
}