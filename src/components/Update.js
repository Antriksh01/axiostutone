import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Update = () => {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setID] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`https://63c928bcc3e2021b2d50beef.mockapi.io/crud/${id}`, {
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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>

        <Button type="submit" onClick={updateAPIData}>
          Update
        </Button>
      </Form>
    </>
  );
};

export default Update;
