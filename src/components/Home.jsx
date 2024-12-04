import userIcon from "../assets/profilePicture.png";
import homeIcon from "../assets/homeIcom.png";
import messageIcon from "../assets/messageIcon.png";
import notificationIcon from "../assets/notificationIcon.png";
import settingIcon from "../assets/settingsIcon.png";
import logoutIcon from "../assets/logoutIcon.png";

const Home = () => {
  return (
    <div className="m-8 grid gap-10 grid-cols-12">
      <div className="col-span-2 bg-[#5F35F5] rounded-[20px] flex flex-col  ">
        <div className="mt-[38px] flex justify-center mb-16">
          <img src={userIcon} alt="" />
        </div>
        <div className="relative ml-[70px] rounded-l-[20px] mb-16 bg-white pt-5 pb-6 pl-11 pr-[70px] w-[75%]">
          <img src={homeIcon} alt="" />
          <div className="absolute top-0 right-[1px] w-2 h-full bg-[#5F35F5] rounded-l-[25px]"></div>
        </div>
        <div className="flex justify-center mb-[64px]">
          <img src={messageIcon} alt="" />
        </div>
        <div className="flex justify-center mb-[64px]">
          <img src={notificationIcon} alt="" />
        </div>
        <div className="flex justify-center mb-28">
          <img src={settingIcon} alt="" />
        </div>
        <div className="flex justify-center mb-10">
          <img src={logoutIcon} alt="" />
        </div>
      </div>
      <div className="col-span-10 border gap-5 border-red-600 grid grid-cols-10">
        <div className="col-span-4 border border-red-600 "></div>
        <div className="col-span-3 border border-red-600 "></div>
        <div className="col-span-3 border border-red-600 "></div>
      </div>
    </div>
  );
};

export default Home;
