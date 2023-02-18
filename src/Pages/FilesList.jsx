import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Table,
  Tbody,
  Thead,
  Tr,
  TableContainer,
  Td,
  Th,
  Box,
  Input,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
export const getFile = async () => {
  try {
    const { data } = await axios.get(`http://localhost:8080/allfiles`);
    // setErrorMsg("");
    return data;
  } catch (e) {
    console.log("e", e);
  }
};
const FilesList = () => {
  const data = useSelector((store) => store.file.files);
  console.log(data);
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getFile().then((res) => setFilesList(res));
  }, []);

  const deleteFiles = async (id) => {
    try {
      const result = await axios.delete(
        `http://localhost:8080/deletefile/${id}`
      );

      setErrorMsg("");
      console.log(result.data);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg("Error while downloading file. Try again later");
      }
    }
    getFile().then((res) => setFilesList(res));
  };
  const handleSaerch = async () => {
    // let t={title: title}
    console.log(title);
    let file = filesList.filter((el) => el.title === title);
    setFilesList(file);
  };
  const handleEnter = (e) => {
    if (e.key == "Enter") {
      let file = filesList.filter((el) => el.title === title);
      setFilesList(file);
    }
  };
  console.log(filesList);

  return (
    <Box w={"70%"} margin="auto" marginTop={5} textAlign={"center"}>
      <Box
        //   marginTop={10}
        w={"50%"}
        margin="auto"
        marginBottom={2}
        display={"flex"}
        alignItems={"center"}
      >
        <Input
          type="text"
          placeholder="Enter title here.."
          value={title || ""}
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={handleEnter}
        />
        <Button onClick={handleSaerch}>
          <Search2Icon />
        </Button>
      </Box>
      <br />
      <TableContainer width={"100%"}>
        {errorMsg && <p>{errorMsg}</p>}
        <Table>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Remove File</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filesList.length > 0 ? (
              filesList.map((el) => (
                <Tr key={el._id}>
                  <Td>{el.title}</Td>
                  <Td>{el.file_mimetype}</Td>
                  <Td>
                    <Button onClick={() => deleteFiles(el._id)}>Delete</Button>
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={3} style={{ fontWeight: "300" }}>
                  No files found. Please add some.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FilesList;
