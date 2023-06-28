import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Select,
} from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const AddStudent = (props) => {
  const [getFullName, setFullName] = useState("");
  const [getAddress, setAddress] = useState("");
  const [getPhone, setPhone] = useState("");
  const [getDate, setDate] = useState("");
  const [getGender, setGender] = useState("");
  const [getPrody, setPrody] = useState("");
  const [getPicture, setPicture] = useState("");

  const addStudent = (e) => {
    e.preventDefault();

    const tempData = {
      fullname: getFullName,
      address: getAddress,
      birthDate: getDate,
      gender: getGender,
      phoneNumber: getPhone,
      faculty: "",
      programStudy: getPrody,
      profilePicture: getPicture,
    };

    const prodi = tempData["programStudy"];

    if (prodi === "Ekonomi" || prodi === "Akuntansi" || prodi === "Manajemen") {
      tempData["faculty"] = "Fakultas Ekonomi";
    } else if (
      prodi === "Hubungan Internasional" ||
      prodi === "Administrasi Bisnis" ||
      prodi === "Administrasi Publik"
    ) {
      tempData["faculty"] = "Fakultas Ilmu Sosial dan Politik";
    } else if (prodi === "Arsitektur" || prodi === "Teknik Sipil") {
      tempData["faculty"] = "Fakultas Teknik";
    } else {
      tempData["faculty"] = "Fakultas Teknologi Informasi dan Sains";
    }

    props.createStudent(tempData);

    setFullName("");
    setAddress("");
    setDate("");
    setGender("");
    setPhone("");
    setPrody("");
    setPicture("");
  };

  return (
    <>
      <NavBar />
      <Box className="container" margin="30px">
        <Box className="card-form" id="form-student" margin="auto" width="97%" p={4} border="1px solid pink">
          <form onSubmit={addStudent}>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel htmlFor="input-name">Fullname</FormLabel>
                <Input
                  type="text"
                  id="input-name"
                  data-testid="name"
                  onChange={({ target }) => setFullName(target.value)}
                  value={getFullName}
                />
              </FormControl>
              <FormControl>
                <Box className="input-doubel">
                  <Box className="col-inp">
                    <FormLabel htmlFor="input-picture">
                      Profile Picture
                    </FormLabel>
                    <Input
                      type="text"
                      id="input-picture"
                      data-testid="profilePicture"
                      style={{ width: "90%" }}
                      onChange={({ target }) => setPicture(target.value)}
                      value={getPicture}
                    />
                  </Box>
                  <Box className="col-inp">
                    <FormLabel htmlFor="input-address">Address</FormLabel>
                    <Input
                      type="text"
                      id="input-address"
                      data-testid="address"
                      onChange={({ target }) => setAddress(target.value)}
                      value={getAddress}
                    />
                  </Box>
                </Box>
              </FormControl>
              <FormControl>
                <Box className="input-doubel">
                  <Box className="col-inp">
                    <FormLabel htmlFor="input-phone">Phone Number</FormLabel>
                    <Input
                      type="text"
                      id="input-phone"
                      data-testid="phoneNumber"
                      style={{ width: "90%" }}
                      onChange={({ target }) => setPhone(target.value)}
                      value={getPhone}
                    />
                  </Box>
                  <Box className="col-inp">
                    <FormLabel htmlFor="input-date">Birth Date</FormLabel>
                    <Input
                      type="date"
                      id="input-date"
                      data-testid="date"
                      onChange={({ target }) => setDate(target.value)}
                      value={getDate}
                    />
                  </Box>
                </Box>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="input-gender">Gender</FormLabel>
                <Select
                  className="input-select"
                  id="input-gender"
                  data-testid="gender"
                  onChange={({ target }) => setGender(target.value)}
                  value={getGender}
                >
                  <option></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="input-prody">Program Study</FormLabel>
                <Select
                  className="input-select"
                  data-testid="prody"
                  id="input-prody"
                  onChange={({ target }) => setPrody(target.value)}
                  value={getPrody}
                >
                  <option></option>
                  <option value="Ekonomi">Ekonomi</option>
                  <option value="Manajemen">Manajemen</option>
                  <option value="Akuntansi">Akuntansi</option>
                  <option value="Administrasi Publik">
                    Administrasi Publik
                  </option>
                  <option value="Administrasi Bisnis">
                    Administrasi Bisnis
                  </option>
                  <option value="Hubungan Internasional">
                    Hubungan Internasional
                  </option>
                  <option value="Teknik Sipil">Teknik Sipil</option>
                  <option value="Arsitektur">Arsitektur</option>
                  <option value="Matematika">Matematika</option>
                  <option value="Fisika">Fisika</option>
                  <option value="Informatika">Informatika</option>
                </Select>
              </FormControl>
              <FormControl>
                <Button
                  type="submit"
                  value={"Add student"}
                  id="add-btn"
                  className="btn-add"
                  data-testid="add-btn"
                  variant="solid"
                  colorScheme="pink"
                  color="white"
                  bg="#FF6B8A"
                >
                  Add student
                </Button>
              </FormControl>
            </VStack>
          </form>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default AddStudent;
