
export interface IPaths {
	entry: string,
	output: string,
	html: string,
}

export interface IOutputFileName {
	fileName: string,
	chunkFileName?: string,
	assetModuleFilename?: string,
}

export interface IMiniCssFileName {
	fileName: string,
	chunkFileName?: string
}

export interface IFileNames {
	output: IOutputFileName,
	miniCss: IMiniCssFileName,
	cssModule: string
}

export interface IEnv {
	mode:typeof __ENV__,
	analyzer?: boolean,
	port?: number,
	platform?:typeof __PLATFORM__
};

export interface IWebpackBuild {
	env: IEnv,
	paths: IPaths,
	fileNames: IFileNames
}