import { RouterProvider } from 'react-router-dom';
import { UserProvider } from './models/user'
import { router } from './router';

function App() {
	return (
		<>
			<UserProvider username="CarterJackson" name="Carter Jackson">
				<RouterProvider router={router} />
			</UserProvider>
		</>
	)
}

export default App;
