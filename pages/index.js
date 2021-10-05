import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        console.log("response =>", response.data.results);
        setUser(response.data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const fetchNextUser = () => {
    axios.get("https://randomuser.me/api/").then((response) => {
      console.log("response =>", response.data.results);
      setUser(response.data.results[0]);
    });
  };

  return (
    <div className={styles.container}>
      <button onClick={fetchNextUser}>Fetch next user</button>
      {user && (
        <div>
          <div>{user.name.first + " " + user.name.last}</div>
          <img src={user.picture.large} alt="user" />
        </div>
      )}
    </div>
  );
}
