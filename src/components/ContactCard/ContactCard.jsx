import "./ContactCard.css"
import { FaUser, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


function ContactCard(){
    return(
    <div className="contact-card">
        <h2>Contacto</h2>
        <p><FaUser className="icon" /> Giuliano Greco</p>
        <p><FaPhoneAlt className="icon" /> 2235193845</p>
        <p><FaEnvelope className="icon" /> <a href="mailto:giulianogreco03@gmail.com">giulianogreco03@gmail.com</a></p>
     </div>
    )
}

export default ContactCard;
