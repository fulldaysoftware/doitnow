"use client";

import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState,
} from "react";

interface AppContextType {
	isCreateTaskOpen: boolean;
	setIsCreateTaskOpen: Dispatch<SetStateAction<boolean>>;
}

const AppUiContext = createContext<AppContextType | undefined>(undefined);

export function AppContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);

	return (
		<AppUiContext.Provider
			value={{
				isCreateTaskOpen,
				setIsCreateTaskOpen,
			}}
		>
			{children}
		</AppUiContext.Provider>
	);
}

export function useAppContext() {
	const context = useContext(AppUiContext);
	if (!context) {
		throw new Error(
			"useAppContext must be used within an <AppContextProvider>",
		);
	}
	return context;
}
