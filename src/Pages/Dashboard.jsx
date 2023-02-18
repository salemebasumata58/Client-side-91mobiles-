import React, { useRef, useState } from "react";
import {
  Box,
  Input,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Text,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  FormLabel,
} from "@chakra-ui/react";
import Dropzone from "react-dropzone";
import axios from "axios";
import { Document, Page, pdfjs } from "react-pdf";
import { useDispatch, useSelector } from "react-redux";
import { deleteFile, uploadFile } from "../Redux/product/actions";
import { Search2Icon } from "@chakra-ui/icons";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function removeTextLayerOffset() {
  const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
  textLayers.forEach((layer) => {
    const { style } = layer;
    style.top = "0";
    style.left = "0";
    style.transform = "";
    style.width = "100px";
  });
}
const Dashboard = () => {
  const data = useSelector((store) => store.file.files);
  console.log(data);
  const [file, setFile] = useState([]);
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images

  const dropRef = useRef();
  const [previewSrc, setPreviewSrc] = useState(""); // state for storing previewImage
  const [state, setState] = useState({
    title: "",
  });
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { files } = useSelector((store) => store.file);
  // const [docs, setDocs] = useState();
  const setTitle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { title } = state;

      console.log(title);
      if (title !== "") {
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("title", title);
          console.log(formData);
          dispatch(uploadFile(formData));
          // props.history.push('/list');
          alert("file is sucessfully added");
        } else {
          alert("Please select a file to add.");
        }
      } else {
        alert("Please enter all the field values.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChanges = (e) => {
    const [uploadedFile] = e.target.files;
    console.log(e.target.files);
    setFile(uploadedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(
      uploadedFile.name.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls|csv)$/)
    );
    dropRef.current.style.border = "2px dashed #e9ebeb";
  };
 

  return (
    // <Box display={"flex"} justifyContent={"space-around"}flexDirection={{ base: 'column',sm:"row", md: 'row' }}>
    <Box
    marginTop={10}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
      backgroundColor="blue.100"
      textAlign={"center"}
      w={{ base: "sm", sm: "sm", lg: "2xl" }}
      margin={"auto"}
      py={6}
    >
      <Box
        p={5}
        backgroundColor="blue.100"
        margin={"auto"}
        w={"lg"}
        textAlign="center"
      >
        <Box w={{ base: "sm", md: "lg" }}>
          <FormLabel>Title:</FormLabel>
          <Input
            w={"90%"}
            border={"1px solid black"}
            type={"text"}
            name="title"
            value={state.title || ""}
            placeholder={"enter title here..."}
            onChange={setTitle}
            height={"2rem"}
            marginBottom={3}
          />
          <FormLabel>File:</FormLabel>
          <Input
            w={"90%"}
            border={"1px solid black"}
            type={"file"}
            onChange={onChanges}
            height={"2rem"}
            marginBottom="0.4rem"
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </Box>
      <br />
      {file.length === 0 && (
        <Text fontWeight={600} margin={"auto"} width={"50%"}>
          No file is uploaded
        </Text>
      )}
      <br />

      <div className="upload-section">
        {previewSrc ? (
          isPreviewAvailable ? (
            <Box
              width={"50%"}
              margin={"auto"}
              textAlign={"center"}
              border={"1px solid red"}
            >
              <embed
                src={previewSrc}
                frameBorder="0"
                scrolling="auto"
                // height="100%"
                width={"100%"}
                height="400px"
                margin={"auto"}
              />
              {/* <img className="preview-image" src={previewSrc} alt="Preview" /> */}
            </Box>
          ) : (
            <div className="preview-message">
              <p>No preview available for this file</p>
            </div>
          )
        ) : (
          <div className="preview-message">
            <p>Image preview will be shown here after selection</p>
          </div>
        )}
      </div>
    </Box>

    // </Box>
  );
};

export default Dashboard;
{
  /* <Box height={100} overflow={"scroll"} width={400}>
      
      </Box> */
}
