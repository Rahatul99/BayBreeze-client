import BabyHealth from "../BabyHealth/BabyHealth";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
// import Map from "../Map/Map";
import ShopByAge from "../ShopByAge/ShopByAge";
import ShopByCategorySection from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            <ShopByCategorySection />
            <ShopByAge />
            <BabyHealth />
            {/* <Map /> */}
        </div>
    );
};

export default Home;