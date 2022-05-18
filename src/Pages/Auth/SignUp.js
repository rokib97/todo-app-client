import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
const SignUp = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, userError] = useUpdateProfile(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  useEffect(() => {
    if (user || gUser) {
      toast.success("Succesfully User Created!");
      navigate("/");
    }
  }, [user, navigate, gUser]);
  if (loading || updating || gLoading) {
    return <Loading />;
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };
  return (
    <form onSubmit={handleSignUp} className="hero mt-4 bg-base-100 ">
      <div className="hero-content flex-col lg:flex-row-reverse px-0">
        <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                  Already Registered?{" "}
                  <Link to="/login" className="text-error">
                    Login
                  </Link>
                </p>
              </label>
              <p className="text-red-500">{error?.message}</p>
              <p className="text-red-500">{userError?.message}</p>
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-success text-white">Sign Up</button>
            </div>
            <div className="divider">OR</div>
            <div className="form-control mt-2">
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline btn-success hover:text-white"
              >
                Signup with Google
              </button>
              <p className="text-red-500">{gError?.message}</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
