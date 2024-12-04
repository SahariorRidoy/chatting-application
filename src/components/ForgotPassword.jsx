import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import bannerImg from "../assets/banner2.png";
import { Link } from 'react-router-dom';
import { useState } from "react";
import toast from "react-hot-toast";
const ForgotPassword = () => {
    const auth = getAuth();
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailError("");
      };

    const handleForgotPassword=()=>{

        if (!email) {
            setEmailError("Please provide an email.");
          } else if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
          ) {
            setEmailError("Invalid email format. Please provide a valid email.");
          }

          if (email){
            sendPasswordResetEmail(auth, email)
  .then(() => {
    toast.success("Reset Password Request Successful. Please Check Your Inbox");
    setEmail("");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
          }

        
    }
    return (
        <div className="flex">
        <div className="w-1/2 ml-48 mt-40">
          <h1 className="text-[#11175D] text-4xl font-bold mb-10">
          Forgot your Password ?
          </h1>
          
          <form>
            <div className="relative ">
              <label className="text-[#03014C] ">Give your email for reset password</label>
              <br />
              <input
                className="w-[340px] border-2 focus:outline-none mt-4 rounded-md 
                border-[#11175D] border-opacity-30 px-5 py-3 mb-12"
                onChange={handleEmail}
                type="text"
                value={email}
                name="email"
                placeholder="Enter Your Email"
              />
              <p className="absolute left- top-[100px] text-orange-600">
              {emailError}
            </p>
             
            </div>
           
            <div className='flex gap-8'>
                
              <div className="text-[#EA6C00] font-bold border-2 border-orange-600 
              rounded-lg px-3 py-2">
                <Link onClick={handleForgotPassword}>Reset Password</Link>
              </div>
              <div className="text-[#29a329] font-bold border-2 border-green-600 
              rounded-lg px-3 py-2">
                <Link to="/login">Back to login Page</Link>
              </div>
            </div>
           
          </form>
        </div>
        <div className="w-1/2">
          <img className="w-full h-screen object-cover" src={bannerImg} alt="" />
        </div>
      </div>
    );
};

export default ForgotPassword;