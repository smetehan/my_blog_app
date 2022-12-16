import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Input, Modal, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const BlogFormComponent = ({ info, setInfo, handleSubmit }) => {
  const { open, setOpen, currentUser } = useContext(AuthContext);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(info);
    setInfo({ ...info, [name]: value, userid: currentUser.uid });
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
        setInfo({});
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { mt: 2.5, width: "25ch" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          sx={{
            maxWidth: 300,
            minWidth: 300,
            minHeight: 480,
            mt: 2.5,
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",

              alignItems: "center",
              border: "1px solid black",
              minWidth: 200,
              minHeight: 50,
            }}
          >
            <Typography>ADD BLOG</Typography>
          </Box>
          <TextField
            required
            id="outlined-required"
            label="username"
            name="username"
            value={info.username}
            onChange={handleChange}
          />
          <TextField
            required
            id="outlined-disabled"
            label="Title"
            type="text"
            name="title"
            value={info.title}
            onChange={handleChange}
          />
          <TextField
            required
            id="outlined-disabled"
            label="Paragraph"
            type="text"
            name="paragraph"
            inputProps={{ maxLength: 35 }}
            value={info.paragraph}
            onChange={handleChange}
          />
          <TextField
            required
            id="outlined-disabled"
            label="Image"
            name="image"
            type="url"
            value={info.image}
            onChange={handleChange}
          />
          {/* <Input
            disabled
            id="outlined-disabled"
            label="Uid"
            name="uid"
            type="text"
            value={info.currentUser.uid}
            onChange={handleChange}
          /> */}
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" size="large" type="submit">
              ADD BLOG
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default BlogFormComponent;
