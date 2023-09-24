import { createContext } from 'react';

export interface GithubUser {
	username: string;
	name: string;

	id?: number;
	avatarUrl?: string;
	location?: string;
	bio?: string;
}

export const UserContext = createContext<GithubUser | undefined>(undefined);

interface ProviderProps {
	username: string;
	name: string;
	children: React.ReactNode;
}

export function UserProvider({ username, name, children }: ProviderProps) {
	const user: GithubUser = {
		username: username,
		name: name,
		avatarUrl: 'https://avatars.githubusercontent.com/u/15017257?v=4',
	};

	return (
		<UserContext.Provider value={user}>
			{children}
		</UserContext.Provider>
	)
}


