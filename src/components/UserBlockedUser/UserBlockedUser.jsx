import dotIcon from "../../assets/dotIcon.png";
import raghav from "../../assets/pic1Raghab.png";
import swathi from "../../assets/pic2Swathi.png";
import kiran from "../../assets/pic3Kiran.png";
import tejeshwini from "../../assets/pic4Tejeshwini.png";
import marvin from "../../assets/pic5Marvin.png";
import plusIcon from "../../assets/+.png";
const UserBlockedUser = () => {
    return (
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
    );
};

export default UserBlockedUser;