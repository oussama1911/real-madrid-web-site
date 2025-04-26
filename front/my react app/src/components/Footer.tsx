import { Link } from "react-router"
import '../styling/footer.css';

const Footer = () => {
    return (

        <div className="footer">

            <div className="footer-sponsors">
                <p> Main sponsors </p>
                <div className="sponsors">
                    <Link to="https://www.adidas.com/us">   <img src="adidas.png" alt="adidas" /> </Link>
                    <Link to="https://www.hp.com/fr-fr/home.html">  <img src="hp.png" alt="hp" /> </Link>
                    <Link to="https://www.emirates.com/fr/french/"> <img src="emirates.png" alt="emirates" /> </Link>


                </div>
            </div>


            <div className="footer-social-media">
                <p> Follow Real madrid on social media </p>
                <div className="social-media">
                    <Link to="https://www.facebook.com/RealMadrid/"> <img src=" https://img.freepik.com/premium-photo/facebook-logo_1080029-107.jpg?semt=ais_hybrid&w=740 " alt="fb" /> </Link>
                    <Link to="https://www.instagram.com/realmadrid/"> <img src=" https://cdn-icons-png.flaticon.com/512/5968/5968776.png" alt="instagram" /> </Link>
                    <Link to="https://x.com/realmadriden"> <img src="https://images.freeimages.com/image/large-previews/f35/x-twitter-logo-on-black-circle-5694247.png " alt="X" /> </Link>
                    <Link to="https://www.tiktok.com/@realmadrid?lang=fr"> <img src="https://static.vecteezy.com/ti/vecteur-libre/p1/6057996-logo-tiktok-sur-fond-transparent-gratuit-vectoriel.jpg" alt="tiktok" /> </Link>
                    <Link to="https://www.youtube.com/realmadrid"> <img src=" https://img.freepik.com/vecteurs-premium/icones-youtube-couleurs_1209566-1.jpg" alt="youtube" /> </Link>
                </div>
                <div className="footer-logo">
                <img src="Capture d’écran 2025-04-11 154600.png" alt="logo" /> 
                <p className="realmadrid"> REAL MADRID </p>
                </div>
                <p className="©">
                    Real Madrid © 2025 All rights reserved </p>
            </div>
        </div>



    )
}

export default Footer;