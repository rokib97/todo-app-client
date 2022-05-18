import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
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
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  useEffect(() => {
    if (user || gUser) {
      toast.success("Successfully Logged In");
      navigate(from, { replace: true });
    }
  }, [user, navigate, from, gUser]);

  if (loading || gLoading) {
    return <Loading />;
  }
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <form onSubmit={handleSignIn} className="hero mt-16 bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse px-0">
        <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <p>
                  New to Todo App?{" "}
                  <Link to="/signup" className="text-error">
                    Signup
                  </Link>
                </p>
              </label>
              <p className="text-red-500">{error?.message}</p>
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-success text-white">Login</button>
            </div>
            <div className="divider">OR</div>
            <div className="form-control mt-2">
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline btn-success hover:text-white"
              >
                Login with Google
              </button>
            </div>
            <p className="text-red-500">{gError?.message}</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
