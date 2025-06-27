import seriesData from "../api/seriesData.json";
import { Seriescard } from "./SeriesCard";

const NetflixSeries = () => {
  return(
    <ul className="grid grid-three-cols">
      {seriesData.map((curElem) => (
        <Seriescard key={curElem.id} data={curElem}/>
        /*Here 2 props passed one is key and 2nd one is data*/
        ))}
    </ul>  
    
    );
  };

export default NetflixSeries;