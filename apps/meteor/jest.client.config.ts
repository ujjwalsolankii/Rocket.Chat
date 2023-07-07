export default {
	errorOnDeprecated: true,

	testEnvironment: 'jsdom',
	modulePathIgnorePatterns: ['<rootDir>/dist/'],
	testMatch: ['<rootDir>/client/hooks/**/**.spec.[jt]s?(x)', '<rootDir>/client/components/**/**.spec.tsx'],
	transform: {
		'^.+\\.(t|j)sx?$': '@swc/jest',
	},
	moduleNameMapper: {
		'\\.css$': 'identity-obj-proxy',
		'^react($|/.+)': '<rootDir>/node_modules/react$1',
	},
};
