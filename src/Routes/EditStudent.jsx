import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

const EditStudent = (props) => {
  const { editStudent } = props;
  const { id } = useParams();
  const [fullname, setFullname] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [programStudy, setProgramStudy] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const edithand = (e) => {
    e.preventDefault();
    const getFacultyByProgramStudy = (programStudy) => {
      if (
        programStudy === "Ekonomi" ||
        programStudy === "Manajemen" ||
        programStudy === "Akuntansi"
      ) {
        return "Fakultas Ekonomi";
      } else if (
        programStudy === "Administrasi Publik" ||
        programStudy === "Administrasi Bisnis" ||
        programStudy === "Hubungan Internasional"
      ) {
        return "Fakultas Ilmu Sosial dan Politik";
      } else if (programStudy === "Teknik Sipil" || programStudy === "Arsitektur") {
        return "Fakultas Teknik";
      } else if (
        programStudy === "Matematika" ||
        programStudy === "Fisika" ||
        programStudy === "Informatika"
      ) {
        return "Fakultas Teknologi Informasi dan Sains";
      } else {
        return "";
      }
    };

    const faculty = getFacultyByProgramStudy(programStudy);
    const newStudent = {
      fullname,
      profilePicture,
      address,
      phoneNumber,
      birthDate,
      gender,
      faculty,
      programStudy,
    };

    editStudent(newStudent, id);

    setFullname("");
    setBirthDate("");
    setGender("");
    setProgramStudy("");
    setAddress("");
    setProfilePicture("");
    setPhoneNumber("");
  };

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/student/${id}`);
      const result = await response.json();

      setFullname(result.fullname);
      setBirthDate(result.birthDate);
      setGender(result.gender);
      setProgramStudy(result.programStudy);
      setAddress(result.address);
      setProfilePicture(result.profilePicture);
      setPhoneNumber(result.phoneNumber);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <Box className="container" margin="30px" width="97%" p={4} border="1px solid pink">
        {loading === true ? (
          <p>Loading ...</p>
        ) : (
          <Box className="card-form" id="form-student">
            <form onSubmit={edithand}>
              <VStack spacing={4}>
                <Box className="row">
                  <img
                    src={profilePicture}
                    alt={fullname}
                    style={{ width: "200px" }}
                  />
                </Box>
                <FormControl>
                  <FormLabel htmlFor="fullname">Fullname:</FormLabel>
                  <Input
                    type="text"
                    id="fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    data-testid="name"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="profilePicture">
                    Profile Picture:
                  </FormLabel>
                  <Input
                    type="text"
                    id="profilePicture"
                    value={profilePicture}
                    onChange={(e) => setProfilePicture(e.target.value)}
                    data-testid="profilePicture"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="address">Address:</FormLabel>
                  <Input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    data-testid="address"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="phoneNumber">Phone Number:</FormLabel>
                  <Input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    data-testid="phoneNumber"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="birthDate">Birth Date:</FormLabel>
                  <Input
                    type="date"
                    id="birthDate"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    data-testid="date"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="gender">Gender:</FormLabel>
                  <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    data-testid="gender"
                  >
                    <option value="">-- Select Gender --</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="programStudy">Program Study:</FormLabel>
                  <Select
                    id="programStudy"
                    value={programStudy}
                    onChange={(e) => setProgramStudy(e.target.value)}
                    data-testid="prody"
                  >
                    <option value="">-- Select Program Study --</option>
                    <option value="Ekonomi">Ekonomi</option>
                    <option value="Manajemen">Manajemen</option>
                    <option value="Akuntansi">Akuntansi</option>
                    <option value="Administrasi Publik">Administrasi Publik</option>
                    <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                    <option value="Hubungan Internasional">Hubungan Internasional</option>
                    <option value="Teknik Sipil">Teknik Sipil</option>
                    <option value="Arsitektur">Arsitektur</option>
                    <option value="Matematika">Matematika</option>
                    <option value="Fisika">Fisika</option>
                    <option value="Informatika">Informatika</option>
                  </Select>
                </FormControl>
                <Button
                  type="submit"
                  variant="solid"
                  colorScheme="pink"
                  id="edit-btn"
                  className="btn-add"
                  data-testid="edit-btn"
                  color="white"
                  bg="#FF6B8A"
                >
                  Edit student
                </Button>
              </VStack>
            </form>
          </Box>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default EditStudent;
