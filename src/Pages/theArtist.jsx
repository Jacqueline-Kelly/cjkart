import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Card from '../Components/Card'
import ImgMap from '../Components/imageMap'
import DataContext from '../Context/dataContext'
import Loading from '../Components/Loading'


function Artist () {
    const { data, isLoading } = useContext(DataContext)

    return isLoading ? <Loading /> : ( 
    <div style={{'padding':'20px'}}>
        <h1  className="about" style={{'fontSize':'40px', 'fontWeight':'bold','color':'#fff'}}> About CJ Kelly (they/them)</h1>
        <div style={{'flexDirection':'row','justifyContent':'wrap'}}>
        <ImgMap data={data} sign={'greater'} styleType={{'Width':'100%'}} />
        <div>
        <p style={{'color':'#fff'}}>Hi there, thank you for visiting! CJ is a multidisciplinary artist who has been creating art since they were young. 
            They began doing sketchbook art when they were in elementary school. Since then, they've dabbled in
            stop-motion animation, painting, and digital art. The bulk of their work is character art both in stills and as 
            graphic short-stories.
        </p>
        <p style={{'marginTop':'10px','color':'#fff'}}>CJ is a graduate of the University of Washington, Seattle with a BS in Cellular, Molecular, and Developmental
            Biology and a minor in Environmental Health. When not creating art, you can find them in their lab where they conduct research on
            neurology, gerontology, and pathology, mostly with the help of mice, worms, and yeast.
        </p>
        </div>
        </div>
        <Card>
            <p style={{'color':'#000000'}}> Find CJ on instagram @ cjkdraws</p>
        </Card>
        <p>
                <Link to='/'><button className='btn' style={{'padding':'10px', 'borderRadius':'15px','color':'#000000' }}>Link back home bishes</button></Link>
            </p>
    </div>

    )
};

export default Artist