export const camelize = function(str) {
    return str.replace(/\W+(.)/g, function(match, chr) {
        return chr.toUpperCase();
    });
}
