import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPasswod] = useState("");
  const [valid, setValid] = useState("form-control has-validation");
  const navigate = useNavigate();

  return (
    <div>
      <nav class="navbar navbar-dark bg-dark text-center d-flex justify-content-center">
        <Link class="navbar-brand" to="/Login">
          <h1>Faculty Portal</h1>
        </Link>
      </nav>
      <div className="container text-center my-3 d-flex justify-content-center">
        <div className="card border-0 w-50" style={{ width: "18rem;" }}>
          <h1 className="my-3">Please Login</h1>
          <div className="card-body has-validation">
            <form className="needs-validation">
              <div className="mb-3 my-4">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  className={valid}
                  id="email"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={valid}
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPasswod(e.target.value);
                  }}
                  required
                />
                <div class="invalid-feedback my-3">
                  Invalid Email Or Password
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-outline-success my-4"
                onClick={(e) => {
                  e.preventDefault();
                  if (email === "113@darshan.ac.in" && password === "yash") {
                    setValid("form-control has-validation");
                    // setTimeout(() => {
                    navigate("/HomeInfo");
                    // }, 1000);
                  } else {
                    setValid("form-control has-validation is-invalid");
                  }
                }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
