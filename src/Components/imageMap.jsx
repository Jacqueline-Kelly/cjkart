import PropTypes from 'prop-types'
import InteractItem from './InteractItem';

function ImgMap ( { data, typeVal, sign, styleType } )  { 
    
    const artData = (sign === 'less') ? data.filter(data => (data.type < typeVal)) 
    : data.filter(data => (data.type === typeVal));
    
    artData.sort((a,b) => (a.id < b.id ? -1 : 1))

     return (
         artData.map((item) => {
             return (
                 <div key = {item.id}  style={{styleType}}>
                     <h1 style={{'display':'flex','fontSize':'20px','color':' #81e37d',  
                     textTransform: 'uppercase'}}>{item.title}
                    </h1>
                     <div style={{"padding":'1px'}}>
                     <img className="photo" src={item.img_src} 
                     alt="bio"/>
                     {item.type < 2 && <InteractItem likesNumber={item.likes} idSerial={item.id}/> }

                     </div>
                 </div>
                 ) } )
          )
    }

ImgMap.defaultProps = {
    sign: 'less',
    typeVal: 2,
    styleType: {'display':'flex', 'justifyContent':'center'}
}

ImgMap.propTypes = {
    data: PropTypes.array.isRequired,
    sign : PropTypes.string.isRequired
}
export default ImgMap