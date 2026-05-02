import Banner from "@/component/Banner";
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
        </div>
    );
};

export default HomePage;