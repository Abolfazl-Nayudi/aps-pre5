import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const errorHelperText = {
  fullName: {
    required: "Full name is required",
  },
  username: {
    required: "Username is required",
    minLength: "Username should be at least 3 characters",
    maxLength: "Username should not exceed 20 characters",
  },
  email: {
    required: "Email is required",
    pattern: "Please enter a valid email address",
  },
  password: {
    required: "Password is required",
    minLength: "Password should be at least 5 characters",
  },
  phoneNumber: {
    required: "Phone number is required",
    minLength: "Phone number must be exactly 11 digits",
    maxLength: "Phone number must be exactly 11 digits",
  },
};

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
    },
  });

  const formSubmitHandler = (data) => {
    console.log(data);
    console.log("Signup form submitted");
  };

  return (
    <Container className="mt-5">
      <h2>Signup</h2>
      <Form onSubmit={handleSubmit(formSubmitHandler)}>
        <Form.Group controlId="fullname" className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            {...register("fullName", {
              required: true,
            })}
          />

          {errors.fullName && (
            <Form.Text className="text-danger">
              {errorHelperText.fullName[errors.fullName.type]}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="username" className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Choose a username"
            {...register("username", {
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
          />

          {errors.username && (
            <Form.Text className="text-danger">
              {errorHelperText.username[errors.username.type]}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />

          {errors.email && (
            <Form.Text className="text-danger">
              {errorHelperText.email[errors.email.type]}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter a password"
            {...register("password", {
              required: true,
              minLength: 5,
            })}
          />

          {errors.password && (
            <Form.Text className="text-danger">
              {errorHelperText.password[errors.password.type]}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="phoneNumber" className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            {...register("phoneNumber", {
              required: true,
              minLength: 11,
              maxLength: 11,
            })}
          />
          {errors.phoneNumber && (
            <Form.Text className="text-danger">
              {errorHelperText.phoneNumber[errors.phoneNumber.type]}
            </Form.Text>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Signup
        </Button>
        <Link to={"/authentication/login"}>already have an account</Link>
      </Form>
    </Container>
  );
}

export default SignupForm;
