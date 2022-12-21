import { createContext, useState } from "react";

export const SearchUserListContext = createContext(null);
export default function SearchUserList({ children }) {
  const [searchUser, setUserSearch] = useState([]);
  return (
    <SearchUserListContext.Provider value={{ searchUser, setUserSearch }}>
      {children}
    </SearchUserListContext.Provider>
  );
}
