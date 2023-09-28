import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faHandFist, faMicrochip, faBrain, faHandshakeAngle, faPeopleArrows } from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseMeComponent({  }) {
    return (
        <div>
            <div className="text-center w-[70%] mx-auto">
                <h2 className="text-4xl">
                    Unlock the Full Potential of Your Web Project with Me
                </h2>

                <p className="mt-10 text-xl">
                    Are you in search of a dedicated and skilled freelance web developer who can transform your web vision into a stunning, functional reality? <br />
                    Look no further - Here's why you should choose me for your next web development project:
                </p>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center w-[75%] mx-auto mt-10">
                <div className="h-32 w-[75%] mt-72 bg-my-sage absolute">

                </div>
                <Card className="w-[80%] p-2 mx-auto">
                    <FontAwesomeIcon icon={faBrain} size="3x" />
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Expertise
                        </Typography>
                        <Typography>
                            With years of experience in web development, I bring a wealth of knowledge and expertise to the table. Whether it's creating an eye-catching website, optimizing for SEO, or building a robust web application, I've got you covered.
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="w-[80%] p-2 mx-auto">
                    <FontAwesomeIcon icon={faPhoneVolume} size="3x" />
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Transparent Communication
                        </Typography>
                        <Typography>
                        I believe in open and transparent communication throughout the project lifecycle. You'll receive regular updates and have direct access to me to address any questions or concerns.
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="w-[80%] p-2 mx-auto">
                    <FontAwesomeIcon icon={faPeopleArrows} size="3x" />
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Tailored Solutions
                        </Typography>
                        <Typography>
                        I understand that every project is unique. That's why I take a customized approach, carefully analyzing your specific requirements, goals, and target audience to deliver solutions that align perfectly with your vision.
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="w-[80%] p-2 mx-auto">
                    <FontAwesomeIcon icon={faMicrochip} size="3x" />
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Cutting Edge Technology
                        </Typography>
                        <Typography>
                        The web and software development landscape is ever-evolving, and I stay at the forefront of industry trends and technologies. You can trust that your project will incorporate the latest tools and techniques.
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="w-[80%] p-2 mx-auto">
                    <FontAwesomeIcon icon={faHandshakeAngle} size="3x" />
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Ongoing Support
                        </Typography>
                        <Typography>
                        My relationship with clients extends beyond project completion. I provide ongoing support and maintenance to ensure your website continues to thrive.
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="w-[80%] p-2 mx-auto">
                    <FontAwesomeIcon icon={faHandFist} size="3x" />
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Dedication to Your Success
                        </Typography>
                        <Typography>
                        Your success is my success. I'm committed to helping you achieve your online goals, whether it's boosting your brand's visibility, increasing sales, or enhancing user engagement.
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
