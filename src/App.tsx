import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from '@/AppLayout';
import Projects from '@/components/projects/Projects';
import About from '@/components/about/About';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<Navigate to="/about" />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
				</Route>
			</Routes>
		</>
	)
}

export default App;
