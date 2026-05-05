import Banner from "@/component/Banner";
import Discount from "@/component/Discount";

import FeatureBook from "@/component/FeatureBook";

import MarqueePage from "@/component/MarqueePage";
import MemberShipCard from "@/component/MemberShipCard";


const HomePage = () => {
    return (
        <div>
           <Banner/>
          <MarqueePage/>
          <FeatureBook/>
          <MemberShipCard/>
          <Discount/>
         
        </div>
    );
};

export default HomePage;