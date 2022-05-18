import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    if (user) {
      toast.success("Successfully Logged In");
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  if (loading) {
    return <Loading />;
  }
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <form onSubmit={handleSignIn} class="hero mt-16 bg-base-100">
      <div class="hero-content flex-col lg:flex-row-reverse px-0">
        <div class="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <p>
                  New to Todo App?{" "}
                  <Link to="/signup" class="text-error">
                    Signup
                  </Link>
                </p>
              </label>
              <p>{error?.message}</p>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-success text-white">Login</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
