import userIcon from "../assets/profilePicture.png";
import homeIcon from "../assets/homeIcom.png";
import messageIcon from "../assets/messageIcon.png";
import notificationIcon from "../assets/notificationIcon.png";
import settingIcon from "../assets/settingsIcon.png";
import logoutIcon from "../assets/logoutIcon.png";
import dotIcon from "../assets/dotIcon.png";
import raghav from "../assets/pic1Raghab.png";
import swathi from "../assets/pic2Swathi.png";
import kiran from "../assets/pic3Kiran.png";
import tejeshwini from "../assets/pic4Tejeshwini.png";
import marvin from "../assets/pic5Marvin.png";
import plusIcon from "../assets/+.png";

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
      <div className="col-span-10 gap-5 grid grid-cols-10">
        <div className="col-span-4 border border-red-600 "></div>


        {/***********  3rd Part ************/}
        <div className="col-span-3">
        <div className="col-span-3">
          {/* Top part */}
          <div className="p-5 border-2 rounded-[20px]">
            <div className="flex justify-between mb-[30px]">
              <h1>User List</h1>
              <div>
                <img src={dotIcon} alt="" />
              </div>
            </div>
            {/* user list flexed */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={raghav} alt="" />
                </div>
                <div>
                  <h2 className="font-semibold">Raghav</h2>
                  <p>Today, 8:56pm</p>
                </div>
              </div>
              <div className="bg-[#5F35F5] p-2 mr-16">
                <img src={plusIcon} alt="" />
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={swathi} alt="" />
                </div>
                <div>
                  <h2 className="font-semibold">Swathi</h2>
                  <p>Today, 2:31pm</p>
                </div>
              </div>
              <div className="bg-[#5F35F5] p-2 mr-16">
                <img src={plusIcon} alt="" />
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={kiran} alt="" />
                </div>
                <div>
                  <h2 className="font-semibold">Kiran</h2>
                  <p>Yesterday, 8:56pm</p>
                </div>
              </div>
              <div className="bg-[#5F35F5] p-2 mr-16">
                <img src={plusIcon} alt="" />
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={tejeshwini} alt="" />
                </div>
                <div>
                  <h2 className="font-semibold">Tejeshwini C</h2>
                  <p>Today, 8:56pm</p>
                </div>
              </div>

              <div className="bg-[#5F35F5] p-2 mr-16">
                <img src={plusIcon} alt="" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={marvin} alt="" />
                </div>
                <div>
                  <h2 className="font-semibold">Marvin McKinney</h2>
                  <p>Today, 8:56pm</p>
                </div>
              </div>
              <div className="bg-[#5F35F5] p-2 mr-16">
                <img src={plusIcon} alt="" />
              </div>
            </div>
          </div>

          {/* Bottom Part */}
          <div className="p-5 border-2 mt-11 rounded-[20px]">
            <div className="flex justify-between mb-[30px]">
              <h1>User List</h1>
              <div>
                <img src={dotIcon} alt="" />
              </div>
            </div>
            {/* user list flexed */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={raghav} alt="" />
                </div>
                <div className="">
                  <h2 className="font-semibold">Raghav</h2>
                  <p>Today, 8:56pm</p>
                </div>
              </div>
              <div className="bg-[#5F35F5] rounded-md px-2 mr-10">
                <p className="font-semibold text-xl text-white">unblock</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={swathi} alt="" />
                </div>
                <div className="">
                  <h2 className="font-semibold">Swathi</h2>
                  <p>Today, 2:31pm</p>
                </div>
              </div>
              <div className="bg-[#5F35F5] rounded-md px-2 mr-10">
                <p className="font-semibold text-xl text-white">unblock</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={kiran} alt="" />
                </div>
                <div className="">
                  <h2 className="font-semibold">Kiran</h2>
                  <p>Yesterday, 8:56pm</p>
                </div>
              </div>
              <div className="bg-[#5F35F5] rounded-md px-2 mr-10">
                <p className="font-semibold text-xl text-white">unblock</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={tejeshwini} alt="" />
                </div>
                <div className="">
                  <h2 className="font-semibold">Tejeshwini C</h2>
                  <p>Today, 8:56pm</p>
                </div>
              </div>

              <div className="bg-[#5F35F5] rounded-md px-2 mr-10">
                <p className="font-semibold text-xl text-white">unblock</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={marvin} alt="" />
                </div>
                <div className="">
                  <h2 className="font-semibold">Marvin McKinney</h2>
                  <p>Today, 8:56pm</p>
                </div>
              </div>
              <div className="bg-[#5F35F5] rounded-md px-2 mr-10">
                <p className="font-semibold text-xl text-white">unblock</p>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/***********  right side ************/}
        <div className="col-span-3">
          {/* Top part */}
          <div className="p-5 border-2 rounded-[20px]">
            <div className="flex justify-between mb-[30px]">
              <h1>User List</h1>
              <div>
                <img src={dotIcon} alt="" />
              </div>
            </div>
            {/* user list flexed */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={raghav} alt="" />
                </div>
                <div>
                  <h2 className="font-semibold">Raghav</h2>
                  <p>Today, 8:56pm</p>
                </div>
              </div>
              <div className="bg-[#5F35F5] p-2 mr-16">
                <img src={plusIcon} alt="" />
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={swathi} alt="" />
                </div>
                <div>
                  <h2 className="font-semibold">Swathi</h2>
                  <p>Today, 2:31pm</p>
                </div>
              </div>
              <div className="bg-[#5F35F5] p-2 mr-16">
                <img src={plusIcon} alt="" />
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={kiran} alt="" />
                </div>
                <div>
                  <h2 className="font-semibold">Kiran</h2>
                  <p>Yesterday, 8:56pm</p>
                </div>
              </div>
              <div className="bg-[#5F35F5] p-2 mr-16">
                <img src={plusIcon} alt="" />
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={tejeshwini} alt="" />
                </div>
                <div>
                  <h2 className="font-semibold">Tejeshwini C</h2>
                  <p>Today, 8:56pm</p>
                </div>
              </div>

              <div className="bg-[#5F35F5] p-2 mr-16">
                <img src={plusIcon} alt="" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={marvin} alt="" />
                </div>
                <div>
                  <h2 className="font-semibold">Marvin McKinney</h2>
                  <p>Today, 8:56pm</p>
                </div>
              </div>
              <div className="bg-[#5F35F5] p-2 mr-16">
                <img src={plusIcon} alt="" />
              </div>
            </div>
          </div>

          {/* Bottom Part */}
          <div className="p-5 border-2 mt-11 rounded-[20px]">
            <div className="flex justify-between mb-[30px]">
              <h1>User List</h1>
              <div>
                <img src={dotIcon} alt="" />
              </div>
            </div>
            {/* user list flexed */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={raghav} alt="" />
                </div>
                <div className="">
                  <h2 className="font-semibold">Raghav</h2>
                  <p>Today, 8:56pm</p>
                </div>
              </div>
              <div className="bg-[#5F35F5] rounded-md px-2 mr-10">
                <p className="font-semibold text-xl text-white">unblock</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={swathi} alt="" />
                </div>
                <div className="">
                  <h2 className="font-semibold">Swathi</h2>
                  <p>Today, 2:31pm</p>
                </div>
              </div>
              <div className="bg-[#5F35F5] rounded-md px-2 mr-10">
                <p className="font-semibold text-xl text-white">unblock</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={kiran} alt="" />
                </div>
                <div className="">
                  <h2 className="font-semibold">Kiran</h2>
                  <p>Yesterday, 8:56pm</p>
                </div>
              </div>
              <div className="bg-[#5F35F5] rounded-md px-2 mr-10">
                <p className="font-semibold text-xl text-white">unblock</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={tejeshwini} alt="" />
                </div>
                <div className="">
                  <h2 className="font-semibold">Tejeshwini C</h2>
                  <p>Today, 8:56pm</p>
                </div>
              </div>

              <div className="bg-[#5F35F5] rounded-md px-2 mr-10">
                <p className="font-semibold text-xl text-white">unblock</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={marvin} alt="" />
                </div>
                <div className="">
                  <h2 className="font-semibold">Marvin McKinney</h2>
                  <p>Today, 8:56pm</p>
                </div>
              </div>
              <div className="bg-[#5F35F5] rounded-md px-2 mr-10">
                <p className="font-semibold text-xl text-white">unblock</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
