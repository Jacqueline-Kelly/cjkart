import frenchie from './frenchie.gif'

function Loading() {
    return(
        <img src={frenchie} alt="Trying to load up, give me a moment"
        style={{width: '80vw', marginTop: '20vH', color:'#fff' , display:'block'}} />
    )
}

export default Loading