import webpack from 'webpack'
import { IWebpackBuild } from './types/types';
import HtmlPlugin from 'html-webpack-plugin'
import miniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function pluginsBuild({env, paths, fileNames}: IWebpackBuild): webpack.Configuration['plugins'] {

	const isDev = env.mode === 'development'
	const isProd = env.mode === 'production'

	const html = new HtmlPlugin({
		template: paths.html,
		favicon: paths.favicon
	})

	const definePlugin = new webpack.DefinePlugin({
		__PLATFORM__: JSON.stringify(env.platform)
	})

	const miniCssPlugin = new miniCssExtractPlugin({
		filename: fileNames.miniCss.fileName,
		chunkFilename: fileNames.miniCss.chunkFileName
	})

	const plugins: webpack.Configuration['plugins'] = [
		html,
		definePlugin
	]

	if(isProd) {
		plugins.push(miniCssPlugin)
	}

	if(env.analyzer) {
		plugins.push(new BundleAnalyzerPlugin())
	}

	return plugins
}