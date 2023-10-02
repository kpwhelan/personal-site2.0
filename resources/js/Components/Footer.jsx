import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div className="flex justify-between items-center p-4 border-t-2 border-t-my-sage border-b-2 border-b-my-sage mb-2 mt-36">
            <p className="text-xs">copyright &copy; {new Date().getFullYear()} · ALL RIGHTS RESERVED BY Kevin Whelan - TNSG Web Development</p>
            <div>
                <a href="https://www.instagram.com/kevpw_dev/" className="mx-2"><FontAwesomeIcon icon={faInstagram} size={'2x'} /></a>
                <a href="https://twitter.com/kevpw_dev" className="mx-2"><FontAwesomeIcon icon={faXTwitter} size={'2x'} /></a>
                <a href="www.linkedin.com/in/kpwhelan" className="mx-2"><FontAwesomeIcon icon={faLinkedin} size={'2x'} /></a>
            </div>
        </div>
    )
}
