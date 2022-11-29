import './index.scss'

const Contact = () => {
    return(
        <>
        <div className='container contact-page'>
        <div className='text-zone'>
            <h1>Contact Me</h1>
            <p>Contact us pages are often the go-to for a new visitor on a mission. It’s where they go when they have a question and truly want to speak to an individual at your organization </p>
        <div className='contact-form'>
            <form>
                <ul>
                 <div className='textMail' >
                 <li className='half'>
                    <input type='text' name='name' placeholder='Name' required />
                    </li>  
                    <li>
                    <input type='mail' name='name' placeholder='Email' required />
                    </li>
                    <li>
                    <input type='text' name='subject' placeholder='Subject' required />
                    </li>
                    
                 </div>
                 <li>
                    <textarea name='message' placeholder='Message' required></textarea> 
                    </li>
                    <li>
                    <input type='submit' className='flat-button' value='SEND'  />
                    </li>
                </ul>
            </form>
        </div>
        </div>
    </div>
        </>

    );
}


export default Contact;