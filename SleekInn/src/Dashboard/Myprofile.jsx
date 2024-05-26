import React, { useContext } from 'react';
import { Container, Row, Col, Button, Card, CardBody } from 'reactstrap';
import '../styles/myprofile.css';
import avatar from '../assets/images/avatar.jpg';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Container className="dashboard-container">
        <Row>
          <Col md={4}>
            <Card className="profile-card">
              <CardBody>
                <img src={avatar} alt="" />
                <p><strong>Name:</strong> {user.username}</p>
                <p><strong>Role:</strong> {user.role}</p>
                <p><strong>Email:</strong> {user.email}</p>
              </CardBody>
            </Card>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
