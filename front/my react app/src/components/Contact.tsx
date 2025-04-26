import '../styling/contact.css';


const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-title">Contact</div>
            <div className="contact-content">
                <p className='contact-p'> REAL MADRID </p>
                <p className='contact-p'> Central office telephone +34 91 398 43 00 <br /> Fax +34 91 398 43 82 </p>
                <p className='contact-p'> Postal address:</p>
                <ul className='contact-ul'>
                    <li className='contact-li'>
                        SANTIAGO BERNABÉU STADIUM <br />
                        Avenida Concha Espina, Nº 1 – Puerta 44 <br />
                        28036 Madrid
                    </li>
                    <li className='contact-li'>
                        CIUDAD REAL MADRID <br />
                        Camino Sintra s/n <br />
                        28055 Madrid
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;