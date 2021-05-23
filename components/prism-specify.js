Prism.languages.specify = Prism.languages.extend('clike', {
    'class-name': {
		pattern: /(\b(?:rule|methods|invariant|definition|hook|ghost|sort|function)\s+)(?!\d)[\w$]+/,
		lookbehind: true
	},
	'keyword': /\b(?:rule|methods|invariant|definition|hook|ghost|sort|function|if|else|returns?|in|@new|@old|require|assert|requireInvariant|havoc|assuming|envfree|filtered|at|as|using|import|use|builtin|lastReverted|lastHasThrown|lastStorage|preserved|with|Sstore|Sload|offset|STORAGE|KEY|INDEX|axiom|init_state|max_uint|max_uint256|max_uint160|max_address|max_uint128|max_uint96|max_uint64|max_uint32|max_uint16|max_uint8|@withrevert|@norevert|@dontsummarize|fallback|NONDET|CONSTANT|DISPATCHER|ALWAYS|HAVOC|HAVOC_ECF|HAVOC_ALL|PER_CALLEE_CONSTANT|AUTO|forall|exists|call|s?invoke|loop_invariant)\b/,
	'operator': /[<>]=?|<?=>|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/
});

Prism.languages.insertBefore('specify', 'keyword', {
	'builtin': /\b(?:env|method|calldataarg|storage|address|bool|string|mathint|u?int(?:8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?|byte|bytes(?:[1-9]|[12]\d|3[0-2])?)\b/
});

Prism.languages.spec = Prism.languages.specify;