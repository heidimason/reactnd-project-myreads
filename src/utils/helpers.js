export const camelize = function(str) {
	str = str.toLowerCase();

    return str.replace(/\W+(.)/g, function(match, chr) {
        return chr.toUpperCase();
    });
}
