export const camelize = str => {
	str = str.toLowerCase()

    return str.replace(/\W+(.)/g, function(match, chr) {
        return chr.toUpperCase()
    })
}

// Source: http://browserhacks.com/#hack-3e68270c67701bc3a7c9523ed706025e
export const isSafari =
	/a/.__proto__==='//' /* Safari <= 5 */
	|| ( !!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && typeof document.body.style.webkitFilter !== "undefined" && !window.chrome ) /* Safari 6 */
	|| /constructor/i.test(window.HTMLElement)

export const isFirefox =
	!!window.sidebar
	|| 'MozAppearance' in document.documentElement.style
	|| typeof InstallTrigger !== 'undefined' /* FF >= 1.5 */
	|| /a/[-1] === 'a' /* FF 2-3 */
	|| (function x(){})[-5] === 'x' /* FF 3 */
	|| !!navigator.userAgent.match(/firefox/i)
	|| !!window.globalStorage /* FF 2-13 */
	|| (function x(){})[-6] === 'x' /* FF 2 */
