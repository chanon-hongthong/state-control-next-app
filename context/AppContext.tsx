import { createContext, useContext, useMemo, useState } from "react";

interface Props {
    // children: ReactChild
    children: React.ReactNode;
  }

const AppContext = createContext();

export function AppWrapper({ children }: Props) {
  const [AppState, setAppState] = useState({});

  const contextValue = useMemo(() => {
    return [AppState, setAppState];
  }, [AppState, setAppState]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}