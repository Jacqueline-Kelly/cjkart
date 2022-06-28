import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header>
                         <div>
                             <h1 style={{'color':'#fff','fontSize':'6vh','marginLeft':'2vw'}}>CJK Art</h1>
                             <div>
                             <h1 style={{'fontSize':'4vh','float':'right','paddingRight':'5vw','marginTop':'-30px','color':'#fff'}}>The Art</h1>
                             <Link to='/theartist'> <button className='btn'
                             style={{'color':'#fff','fontSize':'4vh','fontWeight':'bold','float':'right','marginTop':'-30px','paddingRight':'5vw','backgroundColor':'transparent'}}>
                                 The Artist
                                 </button>
                             </Link>
                            
                             </div>
                         </div>
        </header>


    )
}

export default Header;