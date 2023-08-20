import Navbar from "../../components/Navbar";
import CarouselComponent from "../../components/CarouselComponent";
import TempComponent from "../../components/TempComponent";

export default function HomePage(){
    return(
        <>     
            {/* <div className="p-1"><Navbar/></div>                    
            <div className="p-1"><CarouselComponent /></div> */}
            <Navbar/>
            <CarouselComponent />
            <TempComponent />
        </>
    )
}