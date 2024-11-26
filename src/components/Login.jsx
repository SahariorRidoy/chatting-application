import bannerImg from '../assets/banner2.png';
import googleImg from '../assets/google.png'
import eyes from '../assets/eyes.png'
const Login = () => {
    return (
        <div className="flex">
      <div className="w-1/2 ml-48 mt-40">
        <h1 className="text-[#11175D] text-4xl font-bold mb-7">Login to your account!</h1>
        <div className='hover:opacity-50 cursor-pointer w-60 flex gap-3 border-[#11175D] rounded-lg items-center py-5 border-2 pl-7 pr-10 border-opacity-30 mb-8'>
            <img src={googleImg} alt="" />
            <p>Login with Google</p>
        </div>
        <form >
            <label className='text-[#03014C] opacity-50' >Email Address</label> <br />
            <input className="border-b-2 focus:outline-none border-[#11175D] border-opacity-30 pr-12 py-6 mb-14" type="email" name="" id="" placeholder="example@mail.com" />
            <br />
            <div className='relative'>
            <label className='text-[#03014C] opacity-50' >Password</label><br />
            <input className=" border-b-2 focus:outline-none border-[#11175D] border-opacity-30  pr-12 py-6" type="password" name="" id="" placeholder="Enter your password"/>
            <img className='absolute bottom-6 left-48' src={eyes} alt="" />
            </div>
            <br />
            <button className=" mt-12 btn bg-[#5F35F5] text-xl rounded-full text-white py-5 px-[85px] mb-9 hover:opacity-70" type="submit">Sign up</button>
            <p className="text-sm text-[#03014C] ml-6 mb-24">Don't have an account? <span className="text-[#EA6C00] font-bold"><a href="">Sign up</a></span></p>
        </form>
      </div>
      <div className="w-1/2">
        <img className="w-full h-screen object-cover" src={bannerImg} alt="" />
      </div>
    </div>
    );
};

export default Login;