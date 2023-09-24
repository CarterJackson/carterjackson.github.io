import { Outlet } from 'react-router-dom';
import Header from './views/header/Header'

function AppLayout() {
	return (
		<div className="h-screen w-screen">
			<Header />
			<div className="relative">
				<Outlet />
			</div>
		</div>
	)
}

export default AppLayout;
