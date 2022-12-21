import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import UserProvider from "./Context";
import RepoProvider from "./Context/Repo";
import SearchUserList from "./Context/SearchUserList";
import UserNameProvider from "./Context/UserName";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <UserProvider>
          <RepoProvider>
            <SearchUserList>
              <UserNameProvider>
                <App />
              </UserNameProvider>
            </SearchUserList>
          </RepoProvider>
        </UserProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
