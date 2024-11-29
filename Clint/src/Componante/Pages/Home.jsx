import Description from "../Description/Description";
import Footer from "../Footer/Footer";
import Genarator from "../Genarator/Genarator";
import Heder from "../Header/Heder";
import Step from "../Steps/Step";
import Restemonial from "../Testemonial/Restemonial";


const Home = () => {
    return (
        <div>
        <Heder></Heder>
        <Step></Step>
        <Description></Description>
        <Restemonial></Restemonial>
        <Genarator></Genarator>
        <Footer></Footer>
        </div>
    );
};

export default Home;