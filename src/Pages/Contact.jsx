import axios from 'axios'
import { useState, useRef } from 'react'
import { toast } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'
import { FaAngleDoubleRight } from "react-icons/fa"
import { Link } from 'react-router-dom'

const Contact = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        inquiry:'',
    })
    const [recaptchaToken, setRecaptchaToken] = useState('')
    const [loading, setLoading] = useState(false)

    const { name, email, inquiry } = formData
    const sparkURL = process.env.REACT_APP_spark_url
    const recaptcha_site_key = process.env.REACT_APP_recaptcha_site_key
    const recaptchaRef = useRef()

    const submit = async(e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await axios.post(sparkURL, {...formData, recaptcha_site_key, 'g-recaptcha-response': recaptchaToken})
                toast.success('Thank you for your inquiry. Look for a reply in the email you supplied shortly.')
            recaptchaRef.current.reset()
            setFormData({
            name: '',
            email: '',
            inquiry: '',
            })

    }
    catch(error) {
        toast.error('There was an error in the form submission. Please reach out via Instagram while we investigate this issue.')
    }
    setLoading(false)
    }

    const change = (e) => {
        return(
            setFormData((prevState) => ({
                ...prevState,
                [e.target.id]: e.target.value
            }))
        )
    }

    const updateRecaptchaToken = (token) =>{
        setRecaptchaToken(token)
      }

    return (
        <div>
            <h1  className="about" style={{'fontSize':'6vh', 'fontWeight':'bold','color':'#fff','marginLeft':'2vw'}}>
                Contact Form
            </h1>
            <p style={{'color':'#fff','marginLeft':'2vw'}}>If you'd like to get into contact with CJ, please fill out this form and they will 
                get back to you in the email you provide. Thanks!
            </p>
                <div style={{'marginTop':'5vh'}}>
                <form onSubmit={submit} className='form-group'>
                        <div className='formWidth'>
                            <input type="text" placeholder="Name" value={name}
                            id='name' onChange={change} />
                        </div>
                        <div className='formWidth'>
                            <input type="text" placeholder="Email" value={email}
                                id='email' onChange={change} required />
                        </div>
                        <div className='formWidth'>
                            <input type="text" style={{'height':"30vh", "width":"50vw",'display':'block'}} 
                            placeholder='Inquiry for CJ Kelly' value={inquiry}
                                 id='inquiry' onChange={change} required />
                        </div> 
                <div>
                    <ReCAPTCHA              
                        ref={recaptchaRef}
                        sitekey={recaptcha_site_key}
                        onChange={updateRecaptchaToken}  
                        id='g-recaptcha' />   
                </div>
                    <div>
                        <button disabled={loading} className='contact-btn'>
                            {loading ? 'Submitting' : 
                            (<p className='center'> Send 
                            <FaAngleDoubleRight fill='#fff' width='3vh' height='3vh'/>
                            </p>)}
                        </button>
                        
                    </div>
                    </form>
                </div>
                <p>
                <Link to='/'><button className='btn' style={{'marginLeft':'3vw','marginTop':'5vh','padding':'15px','borderRadius':'15px','color':'#000000' }}>Link back home bishes</button></Link>
            </p>
            </div>
    )
}

export default Contact