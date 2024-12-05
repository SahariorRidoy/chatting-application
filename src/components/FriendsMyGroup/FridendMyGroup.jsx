
import dotIcon from "../../assets/dotIcon.png";
import raghav from "../../assets/pic1Raghab.png";
import swathi from "../../assets/pic2Swathi.png";
import kiran from "../../assets/pic3Kiran.png";
import tejeshwini from "../../assets/pic4Tejeshwini.png";
import marvin from "../../assets/pic5Marvin.png";
import plusIcon from "../../assets/+.png";


const FridendMyGroup = () => {
    return (
        <div className="col-span-3">
        <div className="col-span-3">
          {/* Top part */}
          <div className="p-5 border-2 rounded-[20px]">
            <div className="flex justify-between mb-[30px]">
              <h1 className="font-semibold text-xl">Friends</h1>
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
                  <p>Dinner?</p>
                </div>
              </div>
              <div className=" ">
               <p>Today, 8:56pm</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={swathi} alt="" />
                </div>
                <div>
                  <h2 className="font-semibold">Swathi</h2>
                  <p>Sure!</p>
                </div>
              </div>
              <div className=" ">
               <p>Today, 2:31pm</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={kiran} alt="" />
                </div>
                <div>
                  <h2 className="font-semibold">Kiran</h2>
                  <p>Hi.....</p>
                </div>
              </div>
              <div className=" ">
               <p>Yesterday, 6:22pm</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6 pb-[78px]">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={tejeshwini} alt="" />
                </div>
                <div>
                  <h2 className="font-semibold">Tejeshwini C</h2>
                  <p>I will call him today.</p>
                </div>
              </div>

              <div className=" ">
               <p>Today, 12:22pm</p>
              </div>
            </div>

           
          </div>

          {/* Bottom Part */}
          <div className="p-5 border-2 mt-11 rounded-[20px]">
            <div className="flex justify-between mb-[30px]">
            <h1 className="font-semibold text-xl">My Groups</h1>
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
                  <p>Dinner?</p>
                </div>
              </div>
              <div className=" ">
               <p>Today, 8:56pm</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={swathi} alt="" />
                </div>
                <div>
                  <h2 className="font-semibold">Swathi</h2>
                  <p>Sure!</p>
                </div>
              </div>
              <div className=" ">
               <p>Today, 2:31pm</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={kiran} alt="" />
                </div>
                <div>
                  <h2 className="font-semibold">Kiran</h2>
                  <p>Hi.....</p>
                </div>
              </div>
              <div className=" ">
               <p>Yesterday, 6:22pm</p>
              </div>
            </div>

            <div className="flex items-center justify-between pb-[78px]">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={tejeshwini} alt="" />
                </div>
                <div>
                  <h2 className="font-semibold">Tejeshwini C</h2>
                  <p>I will call him today.</p>
                </div>
              </div>

              <div className=" ">
               <p>Today, 12:22pm</p>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    );
};

export default FridendMyGroup;