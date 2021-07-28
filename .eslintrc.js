module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	extends: [
		'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
	],

	plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  overrides: [
		{
			files: ['**/*.tsx', '**/*.js'],
			rules: {
				'react/prop-types': 'off',
				'react/display-name': 'off'
			}
		},
		{
			files: ['**/*.js', '**/*.spec.*'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off'
			}
		}
	],
}
