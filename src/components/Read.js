import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);
  const setData = (data) => {
    let { id, firstName, lastName } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
  };

  useEffect(() => {
    axios
      .get(`https://63c928bcc3e2021b2d50beef.mockapi.io/crud`)
      .then((res) => setApiData(res.data));
  }, []);

  const onDelete = (id) => {
    axios
      .delete(`https://63c928bcc3e2021b2d50beef.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  };

  const getData = () => {
    axios
      .get(`https://63c928bcc3e2021b2d50beef.mockapi.io/crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };
  return (
    <>
      <div>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Update</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {apiData.map((data) => {
              return (
                <Table.Row>
                  <Table.Cell>{data.id}</Table.Cell>
                  <Table.Cell>{data.firstName}</Table.Cell>
                  <Table.Cell>{data.lastName}</Table.Cell>
                  <Link to="/update">
                    <Table.Cell>
                      <Button color="blue" onClick={() => setData(data)}>
                        Update
                      </Button>
                    </Table.Cell>
                  </Link>
                  <Table.Cell>
                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default Read;
