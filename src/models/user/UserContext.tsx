import { createContext, useState, useCallback } from 'react';

interface GithubUser {
	username: string;
	name: string;

	id?: number;
	avatarUrl?: string;
	location?: string;
	bio?: string;
}

interface UserCtx extends GithubUser {
	fetchUser: () => void;
}

export const UserContext = createContext<UserCtx | undefined>(undefined);

interface ProviderProps {
	username: string;
	name: string;
	children: React.ReactNode;
}

export function UserProvider({ username, name, children }: ProviderProps) {
	const [githubUser, setGithubUser] = useState<GithubUser>({
		username: username,
		name: name,
	});

	const fetchUser = useCallback(() => {
		try {
			fetch(`https://github.com/${githubUser.username}`).then(resp => {
				console.log(resp);
				// TODO: Solve CORS and store resp
			})
		} catch {
			console.warn('GitHub user could not be retrieved. The rate limit may have been reached.')
		}
	}, [githubUser])

	return (
		<UserContext.Provider value={{...githubUser, fetchUser}}>
			{children}
		</UserContext.Provider>
	)
}


