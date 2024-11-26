import bannerImg from "../assets/banner.png";

const Registration = () => {
  return (
    <div className="flex">
      <div className="w-1/2 ml-48 mt-40">
        <h1 className="text-[#11175D] text-4xl font-bold mb-3">Get started with easily register</h1>
        <p className="text-xl opacity-50 mb-16">Free register and you can enjoy it</p>
        <form className="relative">
            <input className="border-2 focus:outline-none border-[#11175D] border-opacity-30 rounded-lg px-12 py-6" type="email" name="" id="" placeholder="example@mail.com" />
            <p className="absolute top-[-12px] left-8 bg-white px-4 opacity-70 text-[#11175D]">Email Address</p>
            <br />
            <div className="relative">
            <input className="border-2 focus:outline-none border-[#11175D] border-opacity-30 rounded-lg px-12 py-6 my-14" type="text" placeholder="Enter your name"/>
            <p className="absolute top-[45px] left-8 bg-white px-4 opacity-70 text-[#11175D]">Full Name</p>
            </div>
            <br />
           <div className="relative">
           <input className="border-2 focus:outline-none border-[#11175D] border-opacity-30 rounded-lg px-12 py-6" type="password" name="" id="" placeholder="***********"/>
           <p className="absolute top-[-12px] left-8 bg-white px-4 opacity-70 text-[#11175D]">Password</p>
           </div>
            <br />
            <button className=" mt-12 btn bg-[#5F35F5] text-xl rounded-full text-white py-5 px-[100px] mb-9 hover:opacity-70" type="submit">Sign up</button>
            <p className="text-sm text-[#03014C] ml-10 mb-24">Already have an account? <span className="text-[#EA6C00] font-bold"><a href="">Sign in</a></span></p>
        </form>
      </div>
      <div className="w-1/2">
        <img className="w-full h-screen object-cover" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Registration;
