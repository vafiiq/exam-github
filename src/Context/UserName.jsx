import { createContext, useState } from "react";

export const UserNameContext = createContext(null);
export default function UserNameProvider({ children }) {
  const [userName, setUserName] = useState("Mirziyod-saidov");
  return (
    <UserNameContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserNameContext.Provider>
  );
}
