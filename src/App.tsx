import reactLogo from './assets/react.svg'
import './App.css'
import Header from './views/header/Header'
import { UserProvider } from './models/user'

function App() {
	return (
		<>
			<UserProvider username="CarterJackson" name="Carter Jackson">
				<Header />
				<div className="flex justify-center">
					<h1>Hello World</h1>
					<img src={reactLogo} className="logo react ml-4" alt="React logo" />
				</div>
			</UserProvider>
		</>
	)
}

export default App;
