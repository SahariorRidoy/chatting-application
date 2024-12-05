import dotIcon from "../assets/dotIcon.png";
import raghav from "../assets/pic1Raghab.png";
import swathi from "../assets/pic2Swathi.png";
import kiran from "../assets/pic3Kiran.png";
import tejeshwini from "../assets/pic4Tejeshwini.png";
import marvin from "../assets/pic5Marvin.png";
import plusIcon from "../assets/+.png";
import Sidebar from "./Sidebar/Sidebar";
import FridendMyGroup from "./FriendsMyGroup/FridendMyGroup";
import UserBlockedUser from "./UserBlockedUser/UserBlockedUser";
import SearchGroupsRequest from "./SearchGroupsRequest/SearchGroupsRequest";

const Home = () => {
  return (
    <div className="m-8 grid gap-10 grid-cols-12">
      {/* Sidebar start */}
      <Sidebar></Sidebar>
      

     
      <div className="col-span-10 gap-5 grid grid-cols-10">
       {/* Search Group request User  */}
        <SearchGroupsRequest></SearchGroupsRequest>
        {/***********  3rd Part ************/}
       <FridendMyGroup></FridendMyGroup>

        {/***********  right side ************/}
       <UserBlockedUser></UserBlockedUser>
      </div>
    </div>
  );
};

export default Home;
