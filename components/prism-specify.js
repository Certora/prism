Prism.languages.specify = Prism.languages.extend('clike', {
    'class-name': {
		pattern: /(\b(?:rule|methods|invariant|definition|hook|ghost|function)\s+)(?!\d)[\w$]+/,
		lookbehind: true
	},
	'keyword': /\b(?:if|else|return|in|new|require|assert|requireInvariant|envfree)\b/,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/
});

Prism.languages.insertBefore('solidity', 'keyword', {
	'builtin': /\b(?:env|method|address|bool|string|u?int(?:8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?|byte|bytes(?:[1-9]|[12]\d|3[0-2])?)\b/
});

Prism.languages.spec = Prism.languages.specify;