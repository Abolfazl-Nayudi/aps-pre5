import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const errorHelperText = {
  password: {
    required: "password field is required",
    minLength: "the password should be more that 5 characters",
  },
};

function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "abolfazl@gmail.com",
      password: "",
    },
  });

  console.log(errors);

  const formSubmitHandler = (data) => {
    console.log(data);
    console.log("form submitted");
    // setValue("password", "123456");
    // reset();
    navigate("/products");
  };

  const handleClick = () => {
    // console.log(watch());
    navigate("/products");
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Login</h2>
      <Form onSubmit={handleSubmit(formSubmitHandler)}>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />
        </Form.Group>

        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              minLength: 5,
              required: true,
            })}
          />

          {/* {errors.password?.type === "minLength" && (
            <p style={{ color: "crimson" }}>
              the password should be more that 5 characters
            </p>
          )}

          {errors.password?.type === "required" && (
            <p style={{ color: "crimson" }}>this field is required</p>
          )} */}

          {errors.password?.type && (
            <p style={{ color: "crimson" }}>
              {errorHelperText.password[errors.password.type]}
            </p>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>

        <br />
        {/* <a href="/signup">create new account</a> */}
        <Link to="/authentication/signup">create new account</Link>
      </Form>

      <button onClick={handleClick}>click me</button>
    </Container>
  );
}

export default LoginForm;
