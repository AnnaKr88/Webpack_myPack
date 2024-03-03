import webpack from 'webpack'
import { IEnv, IWebpackBuild } from './types/types'
import { pluginsBuild } from './pluginsBuild'
import { modulesBuild } from './modulesBuild'
import path from 'path'
import { devServerBuild } from './devServerBuild'
import { resolveBuild } from './resolveBuild'

export default function webpackBuild(options: IWebpackBuild): webpack.Configuration {
	const {env, paths, fileNames} = options
	const isDev = env.mode === 'development'
	const isProd = env.mode === 'production'
	return{
		mode: env.mode,
		entry: paths.entry,
		output: {
			path: paths.output,
			filename: fileNames.output.fileName,
			assetModuleFilename:(pathData) => {
				const filePath = path
					.dirname(pathData.filename)
					.split("/")
					.slice(1)
					.join("/")
				return `${filePath}/${fileNames.output.assetModuleFilename}`

			},
			clean: true
		},
		plugins: pluginsBuild(options),
		module: modulesBuild(options),
		devServer: isDev ? devServerBuild(options) : undefined,
		devtool: isDev && 'source-map',
		resolve: resolveBuild(options)
	}
}