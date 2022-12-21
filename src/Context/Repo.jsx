import { createContext, useState } from "react";

export const RepoContext = createContext(null);
export default function RepoProvider({ children }) {
  const [repo, setRepo] = useState([]);
  return (
    <RepoContext.Provider value={{ repo, setRepo }}>
      {children}
    </RepoContext.Provider>
  );
}
