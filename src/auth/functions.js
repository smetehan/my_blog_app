//ADDBLOG
import {
  getDatabase,
  push,
  ref,
  set,
  onValue,
  remove,
  update,
} from "firebase/database";
import { useState } from "react";
import { useEffect } from "react";
import firebase from "./firebase";
export const AddBlog = (info) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "users/");
  const newUserRef = push(userRef);

  set(newUserRef, {
    username: info.username,
    title: info.title,
    paragraph: info.paragraph,
    image: info.image,
  });
  console.log("buraya bak");
};
export const AddComment = (commit) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "users/id");
  const newUserRef = push(userRef);

  set(newUserRef, {
    commit: commit.comment,
  });
  console.log("buraya bak");
};

// READ INFO
export const useFetch = () => {
  const [contactList, setContactList] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "users/");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setContactList(userArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, contactList };
};

export const DeleteUser = (id) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "users/");
  remove(ref(db, "users/" + id));
};

export const UpdateUser = (info) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "users/");

  const updates = {};
  updates["users/" + info.id] = info;
  return update(ref(db), updates);
};
