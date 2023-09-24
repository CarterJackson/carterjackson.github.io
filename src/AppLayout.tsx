import { Outlet } from 'react-router-dom';
import { Header } from './views/header'

function AppLayout() {
	return (
		<div className="h-screen w-screen">
			<Header />
			<div className="relative p-4">
				<Outlet />
			</div>
		</div>
	)
}

export default AppLayout;
