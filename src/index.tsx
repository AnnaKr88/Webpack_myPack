import React from 'react'
import reactDom from 'react-dom/client'
import { App } from './app/App'

const conteiner = document.getElementById('root')

if(conteiner){
	const root = reactDom.createRoot(conteiner)
	root.render(
		<React.StrictMode>
			<App></App>
		</React.StrictMode>
	)
}