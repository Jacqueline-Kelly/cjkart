import React from 'react'
import PropTypes from 'prop-types'

function Card({ children }) {
    return ( <div className='card' style={{
        marginBottom:'80px'
    }}
    >
        {children}
        </div>
    )
}


Card.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Card