import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaLock } from "react-icons/fa";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const config = {
  signup: {
    title: "Sign Up!",
    subTitle: "Let's get your account set up!",
    button: "Sign Up",
  },
  login: {
    title: "Log In!",
    subTitle: "Let's make some surveys!",
    button: "Log In",
  },
};

const logInScheme = Yup.object().shape({
  password: Yup.string().required().min(8),
  email: Yup.string()
    .trim()
    .lowercase()
    .required("Email is required")
    .email("Invalid email format")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be 254 characters or less"),
});

const LoginForm = ({ type, handleSubmit, error, isLoading }) => {
  const { title, subTitle, button } = config[type] || config.signup;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: logInScheme,
    onSubmit: (values) => handleSubmit(values),
  });

  return (
    <Row className="d-flex justify-content-center align-content-center flex-grow-1">
      <Col xs={12} lg={5}>
        <Form
          onSubmit={formik.handleSubmit}
          className="px-2 py-5 border border-tiernery rounded-3"
        >
          <h2 className="text-center">{title}</h2>
          <p className="text-center fs-6 text-muted">{subTitle}</p>
          <Row>
            <FaLock className="my-5" size={100} />
            <Form.Text
              className={`text-danger ${error ? "visible" : "invisible"}`}
            >
              {error}
            </Form.Text>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter email"
              autoComplete="false"
              noValidate
            />
            {formik.touched.email && formik.errors.email ? (
              <Form.Text className="text-danger">
                {formik.errors.email}
              </Form.Text>
            ) : (
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              autoComplete="new-password"
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Password"
            />
            {formik.touched.password && formik.errors.password ? (
              <Form.Text className="text-danger">
                {formik.errors.password}
              </Form.Text>
            ) : (
              <Form.Text className="text-muted">
                We'll never share your password with anyone else.
              </Form.Text>
            )}
          </Form.Group>

          <Link to="/login">Already have an account? Log in</Link>
          <Button
            disabled={isLoading}
            className="my-3 w-100 py-2"
            variant="primary"
            type="submit"
          >
            {button}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginForm;
