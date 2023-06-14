import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const Login = ({nowLogin, setNowLogin}) => {
    const navigate = useNavigate()
    const submittedLogin=(event)=> {
        event.preventDefault()
        setNowLogin(true)
        console.log(nowLogin)
        navigate('/')
    }
  return (
    <Container>
      <Form onSubmit={(event)=>submittedLogin(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="dark" type="submit">
        로그인
      </Button>
    </Form>
    </Container>
  )
}

export default Login
