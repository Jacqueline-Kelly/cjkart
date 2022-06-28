import { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';
import Card from './Card'


function InteractItem ( {likesNumber, idSerial} ) {
    const [heart, setHeart] = useState(likesNumber)
    const [btnDisabled, setBtnDisabled] = useState(false)

    const handleClick = (e) => {
        if (!btnDisabled ) {
        const newHeart = heart+1
        setHeart(newHeart)
        setBtnDisabled(true)
    }}

    const updateHeart = async ( {heart, idSerial} ) => {
        const res = await axios({
            method: 'post',
            url: "https://gawr0zw85i.execute-api.us-east-2.amazonaws.com/cjart_local",
            data: {
                'post_id': idSerial,
                'new_likes': heart
            },
        })
        console.log('heart updated',res.data)
    }

    useEffect(()=> {
        if (heart !== likesNumber) {
        updateHeart( { heart, idSerial } ) 
        }
    }, [heart])



    return (
        <Card>
            <button className='btn' onClick={() => handleClick()}>
            <FontAwesomeIcon icon={faHeartCirclePlus} size={'3x'}/>
            <h1>{heart}</h1>
            </button>
        </Card>
    )
}

export default InteractItem