import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { IWebpackBuild } from "./types/types";

export function devServerBuild({env, paths}: IWebpackBuild): DevServerConfiguration {
	return {
		static: paths.output,
		port: env.port,
		open: true,
		hot: true,
		historyApiFallback: true			
	}
}