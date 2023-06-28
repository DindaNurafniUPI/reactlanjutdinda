import React, { useEffect, useState } from "react";
import {
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [faculty, setFaculty] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:3001/student");
      const data = await response.json();
      setStudents(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "DELETE",
      });
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const editStudent = (id) => {
    navigate(`/student/${id}`);
  };

  const renderStudents = () => {
    return (
      students &&
      students.map((student, index) => {
        if (faculty === "All" || faculty === student.faculty) {
          return (
            <Tr key={student.id} className="student-data-row">
              <Td>{index + 1}</Td>
              <Td>
                <a
                  href={`/student/${student.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    editStudent(student.id);
                  }}
                >
                  {student.fullname}
                </a>
              </Td>
              <Td>{student.faculty}</Td>
              <Td>{student.programStudy}</Td>
              <Td>
                <Button
                  onClick={() => deleteStudent(student.id)}
                  colorScheme="pink"
                  variant="solid"
                  size="sm"
                  color="white"
                  bg="#FF6B8A"
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          );
        } else {
          return null;
        }
      })
    );
  };

  return (
    <>
      <Navbar />
      <Box className="container">
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <Box className="col">
            <Box className="filter">
              <Select
                className="search"
                data-testid="filter"
                value={faculty}
                onChange={(event) => setFaculty(event.target.value)}
              >
                <option value="All">All</option>
                <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                <option value="Fakultas Ilmu Sosial dan Politik">
                  Fakultas Ilmu Sosial dan Politik
                </option>
                <option value="Fakultas Teknik">Fakultas Teknik</option>
                <option value="Fakultas Teknologi Informasi dan Sains">
                  Fakultas Teknologi Informasi dan Sains
                </option>
              </Select>
            </Box>
            <Box className="row">
              <TableContainer>
                <Table id="table-student" className="test-table">
                  <TableCaption>Silahkan Mengisi data dengan klik Add Student, Jika Ingin mengedit, klik nama anda</TableCaption>
                  <Thead className="test-thead">
                    <Tr>
                      <Th>No</Th>
                      <Th>Full Name</Th>
                      <Th>Faculty</Th>
                      <Th>Program Study</Th>
                      <Th>Action</Th>
                    </Tr>
                  </Thead>
                  <Tbody className="test-tbody">{renderStudents()}</Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default Student;
