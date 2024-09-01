import Navbar from "../components/Navbar/Navbar";



const Mainlayout = () => {
    return (
        <div className="2xl:max-w-[1600px] xl:max-w-[1200px] mx-auto">
            <Navbar></Navbar>
            <div>content</div>
            <div>footer</div>
        </div>
    );
};

export default Mainlayout;