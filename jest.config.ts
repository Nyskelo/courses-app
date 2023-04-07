import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';
import type { JestConfigWithTsJest } from 'ts-jest';
const jestConfig: JestConfigWithTsJest = {
	// [...]
	// Replace `ts-jest` with the preset you want to use
	// from the above list
	// preset: 'ts-jest',
	testEnvironment: 'node',
	transform: {
		// '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
		// '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
		'^.+\\.tsx?$': [
			'ts-jest',
			{
				// ts-jest configuration goes here
			},
		],
	},
	// moduleNameMapper: {
	// 	'^@App/(.*)$': '<rootDir>/$1',
	// 	'^lib/(.*)$': '<rootDir>/common/$1',
	// },
	roots: ['<rootDir>'],
	modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
	moduleNameMapper: pathsToModuleNameMapper(
		compilerOptions.paths /*, { prefix: '<rootDir>/' } */
	),
};

export default jestConfig;
