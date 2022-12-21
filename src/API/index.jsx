import axios from "axios";
const Base_URL = " https://api.github.com/users/";
export const api = {
  getUser: async (user_name) => {
    let data = await axios.get(`${Base_URL}${user_name}`);
    return data;
  },
  getFollower: async (userName) => {
    let data = await axios.get(
      `${Base_URL}${userName}/followers`
    );
    return data;
  },
  getFollowing: async (userName) => {
    let data = await axios.get(
      `${Base_URL}${userName}/following`
    );
    return data;
  },
  
  getRepos: async (user) => {
    let data = await axios.get(`${Base_URL}${user}/repos`);
    return data;
  },
  getSearch: async (user_name) => {
    let data = await axios.get(
      `https://api.github.com/search/users?q=${user_name}`
    );
    return data;
  },
  getUsers: async (user_name) => {
    let data = await axios.get(` ${Base_URL}${user_name}`);
    return data;
  },
};
