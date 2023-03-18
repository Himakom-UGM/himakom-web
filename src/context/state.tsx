import { createContext, useContext, useState } from 'react';

const AppContext = createContext({
	hamburger: false,
	updateHamburger: () => {},
});

export const AppWrapper = (props: { children: any }) => {
	const [hamburger, setHamburger] = useState<boolean>(false);

	function updateHamburger() {
		setHamburger((val) => !val);
	}

	let sharedState = {
		hamburger,
		updateHamburger,
	};

	return (
		<AppContext.Provider value={sharedState}>
			{props.children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};
