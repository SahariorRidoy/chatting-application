import dotIcon from "../../assets/dotIcon.png";
import raghav from "../../assets/pic1Raghab.png";
import swathi from "../../assets/pic2Swathi.png";
import kiran from "../../assets/pic3Kiran.png";
import tejeshwini from "../../assets/pic4Tejeshwini.png";
import searchIcon from "../../assets/searchIcon.png";
import friendsReunionIcon from "../../assets/friendsReunionPic.png";
import friendsForeverIcon from "../../assets/friendsForeverPic.png";
import crazyCousinsIcon from "../../assets/crazyCousinsPic.png";

const SearchGroupsRequest = () => {
    return (
<div className="col-span-4 ">
          
          <div className="h-[60px] rounded-full border-2 mb-11 p-5 flex justify-between items-center">
            <div className="flex items-center gap-9">
            <div><img src={searchIcon} alt="" /></div>
            <input type="text" placeholder="Search" />
            </div>
            <div><img src={dotIcon} alt="" /></div>
          </div>
         
        {/* Top part */}
        <div className="p-5 border-2 rounded-[20px]">
          <div className="flex justify-between mb-[30px]">
            <h1 className="font-semibold text-xl">Groups List</h1>
            <div>
              <img src={dotIcon} alt="" />
            </div>
          </div>
          {/* user list flexed */}
          <div className="flex items-center justify-between mb-7">
            <div className="flex items-center">
              <div className="mr-3">
                <img src={friendsReunionIcon} alt="" />
              </div>
              <div>
                <h2 className="font-semibold">Friends Reunion</h2>
                <p className="text-[14px] font-medium text-[#4D4D4DBF]">Hi Guys, Wassup!</p>
              </div>
            </div>
            <div className="bg-[#5F35F5] rounded-md px-2 mr-10">
              <p className="font-semibold text-xl text-white">Join</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-7">
            <div className="flex items-center">
              <div className="mr-3">
                <img src={friendsForeverIcon} alt="" />
              </div>
              <div>
                <h2 className="font-semibold">Friends Forever</h2>
                <p className="text-[14px] font-medium text-[#4D4D4DBF]">Good to see you.</p>
              </div>
            </div>
            <div className="bg-[#5F35F5] rounded-md px-2 mr-10">
              <p className="font-semibold text-xl text-white">Join</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="mr-3">
                <img src={crazyCousinsIcon} alt="" />
              </div>
              <div>
                <h2 className="font-semibold">Crazy Cousins</h2>
                <p className="text-[14px] font-medium text-[#4D4D4DBF]">What plans today?</p>
              </div>
            </div>
            <div className="bg-[#5F35F5] rounded-md px-2 mr-10">
              <p className="font-semibold text-xl text-white">Join</p>
            </div>
          </div>

          

          
        </div>

        {/* Bottom Part */}
        <div className="p-5 border-2 mt-11 rounded-[20px]">
          <div className="flex justify-between mb-[30px]">
          <h1 className="font-semibold text-xl">Friend  Request</h1>
            <div>
              <img src={dotIcon} alt="" />
            </div>
          </div>
          {/* user list flexed */}
          <div className="flex items-center justify-between mb-7">
            <div className="flex items-center">
              <div className="mr-3">
                <img src={raghav} alt="" />
              </div>
              <div className="">
                <h2 className="font-semibold">Raghav</h2>
                <p className="text-[14px] font-medium text-[#4D4D4DBF]">Dinner?</p>
              </div>
            </div>
            <div className="bg-[#5F35F5] rounded-md px-2 mr-10">
              <p className="font-semibold text-xl text-white">Accept</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-7">
            <div className="flex items-center">
              <div className="mr-3">
                <img src={swathi} alt="" />
              </div>
              <div className="">
                <h2 className="font-semibold">Swathi</h2>
                <p className="text-[14px] font-medium text-[#4D4D4DBF]">Sure!</p>
              </div>
            </div>
            <div className="bg-[#5F35F5] rounded-md px-2 mr-10">
              <p className="font-semibold text-xl text-white">Accept</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-7">
            <div className="flex items-center">
              <div className="mr-3">
                <img src={kiran} alt="" />
              </div>
              <div className="">
                <h2 className="font-semibold">Kiran</h2>
                <p className="text-[14px] font-medium text-[#4D4D4DBF]">Hi.....</p>
              </div>
            </div>
            <div className="bg-[#5F35F5] rounded-md px-2 mr-10">
              <p className="font-semibold text-xl text-white">Accept</p>
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="mr-3">
                <img src={tejeshwini} alt="" />
              </div>
              <div className="">
                <h2 className="font-semibold">Tejeshwini C</h2>
                <p className="text-[14px] font-medium text-[#4D4D4DBF]">I will call him today.</p>
              </div>
            </div>
            <div className="bg-[#5F35F5] rounded-md px-2 mr-10">
              <p className="font-semibold text-xl text-white">Accept</p>
            </div>
          </div>

        </div>
      </div>
    );
};

export default SearchGroupsRequest;