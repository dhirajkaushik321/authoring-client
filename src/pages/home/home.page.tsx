import Navbar from "../../components/Navbar";
import CarouselComponent from "../../components/CarouselComponent";
import CuratedContent from "../../components/CuratedContent";
// import { Grid } from 'tailwindcss/components';

export default function HomePage(){
    
    return(
        <>     
      
            <Navbar/>
            <CarouselComponent /> 
            
          <div className="columns-2 bg-blend-color">
            <CuratedContent />
            <CuratedContent />
          </div>
          
                  
            
      
        </>
    )
}