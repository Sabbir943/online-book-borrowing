import Banner from "@/component/Banner";
import Discount from "@/component/Discount";

import FeatureBook from "@/component/FeatureBook";
import GetStrated from "@/component/GetStrated";
import MarqueePage from "@/component/MarqueePage";


const HomePage = () => {
    return (
        <div>
           <Banner/>
          <MarqueePage/>
          <FeatureBook/>
          <GetStrated/>
          <Discount/>
         
        </div>
    );
};

export default HomePage;