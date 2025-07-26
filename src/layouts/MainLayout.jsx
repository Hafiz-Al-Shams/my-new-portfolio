import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";



const MainLayout = () => {

            // <div className="max-w-[80vw] mx-auto">

            // bg-base-300


    return (
        <>
            <div className="">
                <NavBar></NavBar>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            </div>
        </>
    );
};

export default MainLayout;