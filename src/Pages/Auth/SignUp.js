import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
const SignUp = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  console.log(user);
  const [updateProfile, updating, userError] = useUpdateProfile(auth);
  useEffect(() => {
    if (user) {
      toast.success("Succesfully User Created And Updated Profile!");
      navigate("/");
    }
  }, [user, navigate]);
  if (loading || updating) {
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
    <form onSubmit={handleSignUp} class="hero mt-16 bg-base-100">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                  Already Registered?{" "}
                  <Link to="/login" class="text-error">
                    Login
                  </Link>
                </p>
              </label>
              <p className="text-error">{error?.message}</p>
              <p className="text-error">{userError?.message}</p>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
