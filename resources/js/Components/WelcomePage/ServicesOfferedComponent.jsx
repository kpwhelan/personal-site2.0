import CustomWebsiteImg from '../../../assets/custom-website.png'
import AppDevelopmentImg from '../../../assets/app-development.png'
import SeoImg from '../../../assets/seo.png'
import SupportImg from '../../../assets/support.png'
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'

export default function ServicesOfferedComponent() {
    return (
        <div className='bg-my-light-gray bg-opacity-5 pb-4 text-center md:text-left'>
            <div className="flex justify-around items-center border-t-2">
                <div className='md:w-[50%] border-r-2 pt-4 hidden md:block'>
                    <img src={CustomWebsiteImg} className='mx-auto rounded-md'></img>
                </div>

                {/* <div className='w-[50%]'>
                    <div className='w-[60%] mx-auto border-2 rounded-md p-4 text-center'>
                        <p className='text-2xl'>Transforming unique ideas into visually stunning and functional websites tailored to your brand. <br/><br/> From concept to launch, I specialize in crafting memorable online experiences.</p>
                    </div>
                </div> */}

                <div className='w-[90%] md:w-[50%]'>
                    <Card className="w-[95%] md:w-[80%] p-2 mx-auto">
                        {/* <FontAwesomeIcon icon={faBrain} size="3x" /> */}
                        <CardHeader className='md:hidden'>
                            <img src={CustomWebsiteImg} className='mx-auto rounded-md'></img>
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                You Dream It, I Build It
                            </Typography>
                            <Typography>
                                Transforming unique ideas into visually stunning and functional websites tailored to your brand. <br/><br/> From concept to launch, I specialize in crafting memorable online experiences.
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className='flex justify-around items-center mt-10 border-t-2'>
                <div className='w-[90%] md:w-[50%]'>
                    {/* <div className='w-[60%] mx-auto border-2 rounded-md p-4 text-center'>
                        <p className='text-2xl'>Creating interactive and dynamic web applications to meet your specific business needs. <br/><br/> Whether it's a customer portal, booking system, or data management tool, I've got the expertise to develop it.</p>
                    </div> */}

                    <Card className="w-[95%] md:w-[80%] p-2 mx-auto">
                        {/* <FontAwesomeIcon icon={faBrain} size="3x" /> */}
                        <CardHeader className='md:hidden'>
                            <img src={AppDevelopmentImg} className='mx-auto rounded-md'></img>
                        </CardHeader>

                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                Need Something More?
                            </Typography>
                            <Typography>
                                Creating interactive and dynamic web applications to meet your specific business needs. <br/><br/> Whether it's a customer portal, booking system, or data management tool, I've got the expertise to develop it.
                            </Typography>
                        </CardBody>
                    </Card>
                </div>

                <div className='md:w-[50%] border-l-2 pt-4 hidden md:block'>
                    <img src={AppDevelopmentImg} className='mx-auto rounded-md'></img>
                </div>
            </div>

            <div className='flex justify-around items-center mt-10 border-t-2'>
                <div className='md:w-[50%] border-r-2 pt-4 hidden md:block'>
                    <img src={SeoImg} className='mx-auto rounded-md'></img>
                </div>

                <div className='w-[90%] md:w-[50%]'>
                    {/* <div className='w-[60%] mx-auto border-2 rounded-md p-4 text-center'>
                        <p className='text-2xl'>Enhancing your online visibility through strategic SEO techniques. <br/><br/> From on-page optimization to local search strategies, I ensure your website ranks higher, driving organic traffic and boosting conversions.</p>
                    </div> */}

                    <Card className="w-[95%] md:w-[80%] p-2 mx-auto">
                        {/* <FontAwesomeIcon icon={faBrain} size="3x" /> */}
                        <CardHeader className='md:hidden'>
                            <img src={SeoImg} className='mx-auto rounded-md'></img>
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                Let's Get You Found
                            </Typography>
                            <Typography>
                                Enhancing your online visibility through strategic SEO techniques. <br/><br/> From on-page optimization to local search strategies, I ensure your website ranks higher, driving organic traffic and boosting conversions.
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className='flex justify-around items-center mt-10 border-t-2'>
                <div className='w-[90%] md:w-[50%]'>
                    {/* <div className='w-[50%] mx-auto border-2 rounded-md p-4 text-center'>
                        <p className='text-2xl'>Providing reliable website maintenance services, including regular updates, security enhancements, and technical support. <br/><br/> Whether it's a customer portal, booking system, or data management tool, I've got the expertise to develop it.</p>
                    </div> */}

                    <Card className="w-[95%] md:w-[80%] p-2 mx-auto">
                        {/* <FontAwesomeIcon icon={faBrain} size="3x" /> */}
                        <CardHeader className='md:hidden'>
                            <img src={SupportImg} className='mx-auto rounded-md'></img>
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                I Got Your Back
                            </Typography>
                            <Typography>
                                Providing reliable website maintenance services, including regular updates, security enhancements, and technical support. <br/><br/> Whether it's a customer portal, booking system, or data management tool, I've got the expertise to develop it.
                            </Typography>
                        </CardBody>
                    </Card>
                </div>

                <div className='md:w-[50%] border-l-2 pt-4 hidden md:block'>
                    <img src={SupportImg} className='mx-auto rounded-md'></img>
                </div>
            </div>
        </div>
    )
}
