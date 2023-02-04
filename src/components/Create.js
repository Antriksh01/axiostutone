import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router";

const Create = () => {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const postData = () => {
    axios
      .post(`https://63c928bcc3e2021b2d50beef.mockapi.io/crud`, {
        firstName,
        lastName,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>

        <Button type="submit" onClick={postData}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Create;
