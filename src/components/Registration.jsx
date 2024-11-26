import { useState } from "react";
import bannerImg from "../assets/banner.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Registration = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  const handleName = (e) => {
    setName(e.target.value);
    setNameError("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // console.log(email,'dfdhfsd');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Please Give a Email");
    } else {
      if (!/^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        setEmailError("Email is not Valid");
    }
    // Name
    if (!name) {
      setNameError("Please Give Your Full Name");
    }
    else{
      if(name.length<=2){
        setNameError("Name must be 3 or more character long")
      }
    }

    // Password
    if (!password) {
      setPasswordError("Please Provide Password");
    } else {
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password))
        setPasswordError(
          "Password must be 6 character long and included at least 1 Uppercase, 1 lowercase and 1 number"
        );
    }
    console.log(email,name,password);
    
  };
  // show password
  const [showPassword,setShowPassword]=useState(false)
  const handleShowPassword=()=>{
    setShowPassword(!showPassword);
    }
  return (
    <div className="flex">
      <div className="w-1/2 ml-48 mt-40">
        <h1 className="text-[#11175D] text-4xl font-bold mb-3">
          Get started with easily register
        </h1>
        <p className="text-xl opacity-50 mb-16">
          Free register and you can enjoy it
        </p>
        <form className="relative" onSubmit={handleSubmit}>
          <input
            className="border-2 focus:outline-none border-[#11175D] border-opacity-30 rounded-lg px-12 py-6"
            onChange={handleEmail}
            type="text"
            name=""
            id=""
            placeholder="example@mail.com"
          />
          <p className="absolute top-[-12px] left-8 bg-white px-4 opacity-70 text-[#11175D]">
            Email Address
          </p>
          <p className="absolute left-3 text-orange-600">{emailError}</p>
          <br />
          <div className="relative">
            <input
              className="border-2 focus:outline-none border-[#11175D] border-opacity-30 rounded-lg px-12 py-6 my-14"
              onChange={handleName}
              type="text"
              placeholder="Enter your name"
            />
            <p className="absolute top-[45px] left-8 bg-white px-4 opacity-70 text-[#11175D]">
              Full Name
            </p>
            <p className="absolute top-32 left-3 text-orange-600">
              {nameError}
            </p>
          </div>
          <br />
          <div className="relative">
            <input
              className="border-2 focus:outline-none border-[#11175D] border-opacity-30 rounded-lg px-12 py-6"
              onChange={handlePassword}
              type={showPassword ? "text" : "password"}
              name="password"
              id=""
              placeholder="***********"
            />
            <p className="absolute top-[-12px] left-8 bg-white px-4 opacity-70 text-[#11175D]">
              Password
            </p>
            {showPassword ? (
              <FaEyeSlash
                onClick={handleShowPassword}
                className="absolute text-xl left-64 top-7 cursor-pointer"
              />
            ) : (
              <FaEye
                onClick={handleShowPassword}
                className="absolute text-xl left-64 top-7 cursor-pointer"
              />
            )}
            <p className="absolute left-3 text-orange-600">{passwordError}</p>
          </div>
          <br />
          <button
            className=" mt-12 btn bg-[#5F35F5] text-xl rounded-full text-white py-5 px-[100px] mb-9 hover:opacity-70"
            type="submit"
          >
            Sign up
          </button>
          <p className="text-sm text-[#03014C] ml-10 mb-24">
            Already have an account?{" "}
            <span className="text-[#EA6C00] font-bold">
              <a href="">Sign in</a>
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

export default Registration;
