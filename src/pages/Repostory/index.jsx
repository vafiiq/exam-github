import React, { useContext, useEffect, useState } from "react";
import SearchBAr from "../../components/Search-bar";
import Repo from "../../components/Repos";
import { useParams } from "react-router-dom";
import { api } from "../../API";
import { RepoContext } from "../../Context/Repo";
const index = () => {
  const { repo, setRepo } = useContext(RepoContext);
  // const [repo, setRepo] = useState([]);
  const { user_name } = useParams();
  useEffect(() => {
    api.getRepos(user_name).then((res) => {
      setRepo(res.data);
    });
  }, [user_name]);
  const [postPage, setPostPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);
  const lastIndex = postPerPage * postPage;
  const firstIndex = lastIndex - postPerPage;
  const currentPost = repo.slice(firstIndex, lastIndex);
  return (
    <>
      <div className="repo-wrapper">
        <SearchBAr />
        <Repo
          data={currentPost}
          postPerPage={postPerPage}
          setPostPage={setPostPage}
          total={repo}
        />
      </div>
    </>
  );
};

export default index;
