import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";

export default function Footer({ className }) {
    return (
        <div className={`flex flex-col-reverse md:flex-row justify-between items-center p-2 md:p-4 border-t-2 border-t-my-sage border-b-2 border-b-my-sage mb-2 mt-36 ${className}`}>
            <p className="text-xs">copyright &copy; {new Date().getFullYear()} · ALL RIGHTS RESERVED BY Kevin Whelan</p>
            <div className="mb-2 md:mb-0">
                <a href="https://www.instagram.com/kevpw_dev/" target="_blank" className="mx-2"><FontAwesomeIcon icon={faInstagram} size={'2x'} /></a>
                <a href="https://twitter.com/kevpw_dev" target="_blank" className="mx-2"><FontAwesomeIcon icon={faXTwitter} size={'2x'} /></a>
                <a href="https://linkedin.com/in/kpwhelan" target="_blank" className="mx-2"><FontAwesomeIcon icon={faLinkedin} size={'2x'} /></a>
            </div>

            {/* <div className="md:hidden">
            <Menu>
                <MenuHandler>
                    <p className="animate-pulse">Social Media</p>
                </MenuHandler>
                <MenuList className="flex justify-between">
                    <MenuItem><a href="https://www.instagram.com/kevpw_dev/" target="_blank" className="mx-2"><FontAwesomeIcon icon={faInstagram} size={'2x'} /></a></MenuItem>
                    <MenuItem><a href="https://twitter.com/kevpw_dev" target="_blank" className="mx-2"><FontAwesomeIcon icon={faXTwitter} size={'2x'} /></a></MenuItem>
                    <MenuItem><a href="https://linkedin.com/in/kpwhelan" target="_blank" className="mx-2"><FontAwesomeIcon icon={faLinkedin} size={'2x'} /></a></MenuItem>
                </MenuList>
            </Menu>
            </div> */}

        </div>
    )
}
