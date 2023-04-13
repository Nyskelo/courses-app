module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	// extends: ['react-app', 'prettier'],
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	extends: [
		'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
		// 'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
		// 'plugin:prettier/recommended',
	],
	ignorePatterns: ['.eslintrc.js', '*.config.[jt]s'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
		project: ['tsconfig.json'],
	},
	plugins: ['react', 'prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				printWidth: 80,
				trailingComma: 'es5',
				semi: true,
				jsxSingleQuote: true,
				singleQuote: true,
				useTabs: true,
				endOfLine: 'auto',
				'max-len': ['error', { code: 80 }],
			},
		],
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'no-restricted-imports': 'off',
		'@typescript-eslint/no-restricted-imports': [
			'warn',
			{
				name: 'react-redux',
				importNames: ['useSelector', 'useDispatch'],
				message:
					'Use typed hooks `useAppDispatch` and `useAppSelector` instead.',
			},
		],
	},
	settings: {
		react: {
			version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
		},
	},
};
