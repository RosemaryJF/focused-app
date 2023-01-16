import React from 'react';
import { useEffect, useState } from "react";
import { Navigate } from "react-router"
import Auth from '../utils/auth';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import DayList from '../components/DayList';
import Nav from '../components/Nav';

const Profile = () => {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (!Auth.loggedIn) {
    <Navigate replace to="/"></Navigate>
  } else {
    return (
      <div>
        <p>Welcome to your Profile</p>
      </div>
    );
  }
}
//   if (!Auth.loggedIn)
//     return (
//       <Navigate to="/"></Navigate>
//     );
//   else return (
//     <Container fluid id="profile" className="m-0 p-0">
//       <Nav />
//       <Container className="px-5" style={{ marginTop: "50px", paddingTop: "50px", paddingBottom: "100px" }} >
//         <Row className="text-justify">
//           <Col className="col-md-6 p-4 text-profile">
//             <p>Welcome back!</p>
//             <p>
//               <li>Click the '+' icon to add a day.</li>
//               <li>Or view the days you've already created.</li>
//             </p>
//             <DayList />
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   )


// return (
//   <div className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
//     <Nav />
//     <Container className="py-5 h-100">
//       <Row className="justify-content-center align-items-center h-100">
//         <Col lg="6" className="mb-4 mb-lg-0">
//           <Card className="mb-3" style={{ borderRadius: '.5rem' }}>
//             <Row className="g-0">
//               <Col md="4" className="gradient-custom text-center text-white"
//                 style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
//                 <h3 id="userName">Marie Horwitz</h3>
//                 <Card.Text>Web Designer</Card.Text>
//               </Col>
//               <Col md="8">
//                 <Card.Body className="p-4">
//                   <h6>Days</h6>
//                   <Row className="pt-1 days-list">
//                     <DayList />
//                   </Row>
//                   <h6>Information</h6>
//                   <hr className="mt-0 mb-4" />
//                   <Row className="pt-1">
//                     <Col size="6" className="mb-3">
//                       <h6>Email</h6>
//                       <Card.Text className="text-muted">info@example.com</Card.Text>
//                     </Col>
//                     <Col size="6" className="mb-3">
//                       <h6>Phone</h6>
//                       <Card.Text className="text-muted">123 456 789</Card.Text>
//                     </Col>
//                   </Row>
//                 </Card.Body>
//               </Col>
//             </Row>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   </div>

export default Profile;