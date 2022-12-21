import React, { useEffect, useState } from "react";
import "./index.scss";
import FollowerCard from "../../components/FollowerCard";
import { useParams } from "react-router-dom";
import { api } from "../../API";

const index = () => {
  const [follow, setFollow] = useState([]);
  const { user_name } = useParams();
  useEffect(() => {
    api.getFollower(user_name).then((res) => {
      setFollow(res.data);
    });
  }, [user_name]);
  console.log(follow);
  return (
    <div>
      <FollowerCard data={follow} />;
    </div>
  );
};

export default index;
