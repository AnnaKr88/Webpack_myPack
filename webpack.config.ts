import webpack from 'webpack'
import { IEnv } from './config/build/types/types'
import webpackBuild from './config/build/webpackBuild'
import { fileNameConfig, pathsConfig } from './config'

export default(env: IEnv) => {
	const envArg: IEnv = {
		mode: env.mode ?? 'development',
		port: env.port ?? 3000,
		analyzer: env.analyzer,
		platform: env.platform ?? 'desktop'
	}

	const config: webpack.Configuration = webpackBuild({
		env: envArg,
		paths: pathsConfig,
		fileNames: fileNameConfig
	})
	return config
}
