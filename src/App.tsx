import reactLogo from './assets/react.svg'
import './App.css'
import Header from './views/Header'

function App() {
	return (
		<>
			<Header />
			<h1>Hello World</h1>
			<div className="flex justify-center">
				<img src={reactLogo} className="logo react" alt="React logo" />
			</div>
		</>
	)
}

export default App;
