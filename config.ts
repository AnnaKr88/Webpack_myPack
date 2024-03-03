import path from "path";
import { IFileNames, IMiniCssFileName, IOutputFileName, IPaths } from "./config/build/types/types";

export const pathsConfig: IPaths = {
	entry: path.resolve(__dirname, './src', 'index.tsx'),
	output: path.resolve(__dirname, './public'),
	html: path.resolve(__dirname, './src', 'index.html'),
}

export const outputFileNamesConfig: IOutputFileName = {
	fileName: '[name].[contenthash].js',
	assetModuleFilename: '[name].[hash][ext][query]'
}

export const miniCssFilenames: IMiniCssFileName = {
	fileName: 'css/[name].[contenthash:8].css',
	chunkFileName: 'css/[name].[contenthash:8].css'
}

export const fileNameConfig: IFileNames = {
	output: outputFileNamesConfig,
	miniCss: miniCssFilenames,
	cssModule: "[path][name]__[local]--[hash:base64:5]"
}