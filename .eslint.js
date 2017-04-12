module.exports = {
	"praser": 'babel-eslint',
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true
	},
	"extends": ["eslint:recommended", "plugin:react/recommended"],
	"parserOptions": {
		"ecmaFeatures": {
				"experimentalObjectsRestSpread": true,
				"jsx": true
		},
		"sourceType": "module"
	},
	"plugins": ["react"],
	"rules": {
		"indent": ["error", 2],
		"linebreak-style": ["error", "unix"],
		"quotes": ["error", "single"],
		"semi": ["error", "always"],
		"no-console": ["warn", {"allow": ["info", "error"]}]
	}
};
