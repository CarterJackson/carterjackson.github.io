import { useContext } from 'react';
import { UserContext } from './UserContext';

export function useUser() {
	const user = useContext(UserContext);
	if (!user) {
		throw new Error('useUser called outside UserProvider');
	}

	return user;
}
