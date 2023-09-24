import { useContext } from 'react';
import { UserContext } from './UserContext';

export function useUser() {
	const user = useContext(UserContext);
	if (!user) {
		throw new Error('useUser called outside UserProvider');
	}

	if (user && !user.id) {
		console.warn('GitHub user could not be retrieved. The rate limit may have been reached.')
	}

	return user;
}
