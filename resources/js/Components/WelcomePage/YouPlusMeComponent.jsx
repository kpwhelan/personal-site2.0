import { faPersonRays, faPerson, faLaptop, faPlus, faEquals, faExplosion } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function YouPlusMeComponent() {
    const opacityValue = 0.7;

    return (
        <div className="flex items-center justify-between md:justify-around mt-10  mx-auto">
            <div className="text-center">
                <FontAwesomeIcon icon={faPersonRays} size="8x" opacity={opacityValue}/>
                <p className="text-4xl">You</p>
            </div>

            <div>
                <FontAwesomeIcon icon={faPlus} size="3x" opacity={opacityValue}/>
            </div>

            <div className="text-center">
                <FontAwesomeIcon icon={faPerson} size="8x" opacity={opacityValue} />
                <FontAwesomeIcon icon={faLaptop} size="4x" opacity={opacityValue} />
                <p className="text-4xl">Me</p>
            </div>

            <div>
                <FontAwesomeIcon icon={faEquals} size="3x" opacity={opacityValue} />
            </div>

            <div className="text-center">
                <FontAwesomeIcon icon={faExplosion} size="8x" opacity={opacityValue}/>
                <p className="text-4xl">Magic</p>
            </div>
        </div>
    )
}
