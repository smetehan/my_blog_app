import React, { useContext } from "react";
import { useState } from "react";
import { AddBlog, UpdateUser } from "../auth/functions";
import BlogFormComponent from "../components/BlogFormComponent";
import BlogModals from "../components/modals/BlogModals";
import { AuthContext } from "../context/AuthContext";
const initialValues = {
  username: "",
  title: "",
  paragraph: "",
  image: "",
  like: "",
  userid: "",
};

const Blog = () => {
  const [info, setInfo] = useState(initialValues);

  const { setOpen } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      UpdateUser(info);
    } else {
      AddBlog(info);
    }
    setInfo("");
    setOpen(false);
  };

  const editUser = (id, username, title, paragraph, image) => {
    setInfo({ id, username, title, paragraph, image });
  };
  return (
    <div>
      <BlogFormComponent
        info={info}
        setInfo={setInfo}
        handleSubmit={handleSubmit}
      />
      <BlogModals editUser={editUser} />
    </div>
  );
};

export default Blog;
