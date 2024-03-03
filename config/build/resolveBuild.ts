import { Configuration } from "webpack";
import TsConfigPathsWebpackPlugin from 'tsconfig-paths-webpack-plugin'
import { IWebpackBuild } from "./types/types";

export function resolveBuild (options: IWebpackBuild): Configuration['resolve'] {
	return  {
		extensions:['.tsx', '.ts', '.js', '.jsx'],
		plugins: [
			new TsConfigPathsWebpackPlugin()
		]
	}
}