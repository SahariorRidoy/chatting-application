import bannerImg from "../assets/banner2.png";
import googleImg from "../assets/google.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Please provide an email.");
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      setEmailError("Invalid email format. Please provide a valid email.");
    }
    if (!password) {
      setPasswordError("Please Provide Password");
    } else {
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password))
        setPasswordError(
          "Password must be 6 character long and included at least 1 Uppercase, 1 lowercase and 1 number"
        );
    }

    if (
      email &&
      password &&
      /^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password)
    ) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success("login successful");
          setEmail("");
          setPassword("");
          navigate("/home");
        })
        .catch(() => {
          toast.error(
            "Signin Information is not valid, Try using valid username and password"
          );
        });
    }
  };
  return (
    <div className="flex">
      <div className="w-1/2 ml-48 mt-40">
        <h1 className="text-[#11175D] text-4xl font-bold mb-7">
          Login to your account!
        </h1>
        <div className="hover:opacity-50 cursor-pointer w-60 flex gap-3 border-[#11175D] rounded-lg items-center py-5 border-2 pl-7 pr-10 border-opacity-30 mb-8">
          <img src={googleImg} alt="" />
          <p>Login with Google</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="relative">
            <label className="text-[#03014C] opacity-50">Email Address</label>{" "}
            <br />
            <input
              className="border-b-2 focus:outline-none border-[#11175D] border-opacity-30 pr-12 py-6 mb-14"
              onChange={handleEmail}
              type="text"
              value={email}
              name="email"
              placeholder="example@mail.com"
            />
            <p className="absolute left- top-[100px] text-orange-600">
              {emailError}
            </p>
          </div>
          <br />
          <div className="relative">
            <label className="text-[#03014C] opacity-50">Password</label>
            <br />
            <input
              className=" border-b-2 focus:outline-none border-[#11175D] border-opacity-30  pr-12 py-6"
              onChange={handlePassword}
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              placeholder="Enter your password"
            />
            {showPassword ? (
              <FaEye
                onClick={handleShowPassword}
                className="absolute text-xl left-52 top-12 cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={handleShowPassword}
                className="absolute text-xl left-52 top-12 cursor-pointer"
              />
            )}
            <p className="absolute left-0 top-[100px] text-orange-600">
              {passwordError}
            </p>
          </div>
          <br />
          <button
            className=" mt-12 btn bg-[#5F35F5] text-xl rounded-full text-white py-5 px-[85px] mb-9 hover:opacity-70"
            type="submit"
          >
            Login
          </button>
          <p className="text-sm text-[#03014C] ml-6 mb-24">
            Don't have an account?{" "}
            <span className="text-[#EA6C00] font-bold">
              <Link to="/registration">Sign up</Link>
            </span>
          </p>
        </form>
      </div>
      <div className="w-1/2">
        <img className="w-full h-screen object-cover" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Login;
