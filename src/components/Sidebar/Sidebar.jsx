import userIcon from "../../assets/profilePicture.png";
import homeIcon from "../../assets/homeIcom.png";
import messageIcon from "../../assets/messageIcon.png";
import notificationIcon from "../../assets/notificationIcon.png";
import settingIcon from "../../assets/settingsIcon.png";
import logoutIcon from "../../assets/logoutIcon.png";
const Sidebar = () => {
  const handleUpload =()=>{
    console.log('working');
    
  }
  return (
    <div className="col-span-2 bg-[#5F35F5] rounded-[20px] flex flex-col  ">
      <div className="relative mt-[38px] flex justify-center mb-20">
        <img className="" src={userIcon} alt="User" />
        <div className="absolute w-[100px] h-[100px] top-0 rounded-full hover:bg-black hover:opacity-50 flex items-center justify-center group">
          <button className="opacity-0 group-hover:opacity-100 z-10 border p-1 rounded text-white font-bold" onClick={handleUpload}>
            Upload
          </button>
        </div>
      </div>
      <div className="relative ml-[70px] rounded-l-[20px] mb-20 bg-white pt-5 pb-6 pl-11 pr-[70px] w-[75%]">
        <img src={homeIcon} alt="" />
        <div className="absolute top-0 right-[1px] w-2 h-full bg-[#5F35F5] rounded-l-[25px]"></div>
      </div>
      <div className="flex justify-center mb-[82px]">
        <img src={messageIcon} alt="" />
      </div>
      <div className="flex justify-center mb-[82px]">
        <img src={notificationIcon} alt="" />
      </div>
      <div className="flex justify-center mb-28">
        <img src={settingIcon} alt="" />
      </div>
      <div className="flex justify-center items-end mt-24">
        <img src={logoutIcon} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
