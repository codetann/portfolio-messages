import React, { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [username, setUserName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="logoContainer">
        <i class="far fa-comment-alt"></i>
        <h1>Messages</h1>
        <p>
          A simple chat room application developed using React, Node.js,
          Express, and Socket.io. To learn more, click the button below.
        </p>
        <button>Learn More</button>
      </div>

      <div className="joinContainer">
        <h1 className="heading">Join</h1>
        <div className="input">
          <label>Username</label>
          <input
            placeholder="Username"
            className=""
            type="test"
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div className="input">
          <label>Room Name</label>
          <input
            placeholder="Room"
            className=""
            type="test"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) =>
            !username || !room ? event.preventDefault() : null
          }
          to={`/chat?username=${username}&room=${room}`}
          className="button-container"
        >
          <button className="button" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
