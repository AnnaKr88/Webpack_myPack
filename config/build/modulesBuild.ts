import webpack from 'webpack'
import { IWebpackBuild } from './types/types';
import ReactRefreshTypeScript from 'react-refresh-typescript'
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function modulesBuild({env, fileNames}: IWebpackBuild): webpack.ModuleOptions {

	const isDev = env.mode === 'development'
	const isProd = env.mode === 'production'

	const tsLoader = {
		test: /\.[tj]sx?$/,
		exclude: /node_modules/,
		use: [
			{
				loader: 'ts-loader',
				options: {
					getCustomTransformers: () => ({
						before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
					}),
					transpileOnly: isDev
				}
			}
		]
	}

	const babelLoader = {
		test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
							'@babel/preset-env',
							'@babel/preset-typescript',
							[
								'@babel/preset-react',
								{
									runtime: isDev ? 'automatic' : 'classic'
								}
							],
						]
          }
        }
	}

	const styleLoader = {
		test: /\.css$/,
		use: [
			isProd ? MiniCssExtractPlugin.loader : 'style-loader', 
			{
				loader: 'css-loader',
				options: {
					sourceMap: true,
					modules: {
						localIdentName: fileNames.cssModule
					}
				}
			}
		]
	}

	const lessLoader = {
		test: /\.less$/i,
		use: [
			isProd ? MiniCssExtractPlugin.loader : 'style-loader', 
			{
				loader: 'css-loader',
				options: {
					sourceMap: true,
					modules: {
						localIdentName: fileNames.cssModule
					}
				}
			},
			{
				loader: 'less-loader',
				options: {
					sourceMap: true
				}
			}
		]
	}

	const imageLoader = {
		test: /\.(png|jpeg|jpg|gif)$/,
		type: 'asset/resource'
	}

	const svgrLoader = {
		test: /\.svg$/i,
		use: [
			{ 
				loader: '@svgr/webpack', 
				options: { 
					icon: true,
					svgoConfig: {
						plugins: [
							{
								name: 'convertColors',
								params: {
									currentColor: true
								}
							}
						]
					}
				} 
			}
		],
	}

	const fontsLoader = {
		test: /\.(woff|woff2|eot|ttf|otf)$/i,
		type: 'asset/resource',
	}

	return {
		rules: [
			babelLoader,
			styleLoader,
			lessLoader,
			imageLoader,
			svgrLoader,
			fontsLoader
		]
	}
}