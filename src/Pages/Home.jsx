import { useContext } from 'react'
import Header from '../Components/Header'
import ImgMap from '../Components/imageMap'
import DataContext from '../Context/dataContext'
import Loading from '../Components/Loading'
// type - 0: color art, 1: b&w art, 2: About photos
//


const Home = () => { 

    const { data, isLoading} = useContext(DataContext)

    return isLoading ? <Loading /> : (
        <div>
        
        <Header/>
        <div>
            <h1 style={{'textAlign':'left','padding':'80px', 'color':'white', 'fontSize':'20px'}}>
                Welcome! Below are select works from the artist CJKelly to enjoy.     
            </h1> 
            </div>
            <div className="container">
           <ImgMap data={data}/>
           </div>
   
        <p style={{'padding': '10px', 'color':'#fff'}}>Copying or use of any of the above images is prohibited without prior written consent 
            of the Artist CJKelly. See Artist page for contact info. </p>
            
         </div>
    )
};


export default Home;