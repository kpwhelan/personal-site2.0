import WelcomeComponent from '@/Components/WelcomePage/WelcomeComponent';
import WelcomeComponentContainer from '@/Components/WelcomePage/WelcomeComponentContainer';
import Navbar from '@/Components/WelcomePage/Navbar';
import { Link, Head } from '@inertiajs/react';
import WhyChooseMeContainer from '@/Components/WelcomePage/WhyChooseMeContainer';
import WhyChooseMeComponent from '@/Components/WelcomePage/WhyChooseMeComponent';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import YouPlusMeContainer from '@/Components/WelcomePage/YouPlusMeContainer';
import YouPlusMeComponent from '@/Components/WelcomePage/YouPlusMeComponent';
import ServicesOfferedContainer from '@/Components/WelcomePage/ServicesOfferedContainer';
import ServicesOfferedComponent from '@/Components/WelcomePage/ServicesOfferedComponent';
import Footer from '@/Components/Footer';
import AreYouReadyContainer from '@/Components/WelcomePage/AreYouReadyContainer';
import AreYouReadyComponent from '@/Components/WelcomePage/AreYouReadyComponent';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            {/* <div className='flex justify-center text-my-gray mx-auto h-screen w-screen items-center'>
                <div className='text-center border-2 rounded-md p-10'>
                <h1 className='text-lg'>Under Construction</h1>
            <p>Hard at work making this site awesome, we'll be back soon!</p>
                </div>
            </div> */}
            <div>
                <Navbar className={"text-my-gray w-screen p-4 flex justify-around items-center border border-b-my-sage"} />

                <WelcomeComponentContainer className={"flex md:justify-center text-my-gray mx-auto"}>
                    <WelcomeComponent className={"flex flex-col-reverse lg:flex-row lg:items-center lg:justify-around max-h-min p-4 lg:w-[60%] mt-36"} />
                </WelcomeComponentContainer>
            </div>

            <div className='mx-auto text-center md:mt-40'>
                <p>Keep Scrolling, We're Just Getting Started...</p>
                <FontAwesomeIcon icon={faArrowDownLong} size='2x' className='opacity-70 animate-pulse'/>
            </div>

            <WhyChooseMeContainer className={"border-t-2 border-t-my-sage mt-20 pt-20"}>
                <WhyChooseMeComponent  />
            </WhyChooseMeContainer>

            <YouPlusMeContainer className={"border-t-2 border-t-my-sage mt-20 pt-20 w-[90%] md:w-[60%] mx-auto"}>
                <YouPlusMeComponent />
            </YouPlusMeContainer>

            <div className='text-center w-[90%] lg:w-[60%] mx-auto mt-8'>
                <p className='font-my-handwritten-font text-my-gray text-3xl'>Your website is your virtual handshake with the world.
                <br/> Make it firm, friendly, and memorable... </p>
            </div>

            <ServicesOfferedContainer className={'border-t-2 border-t-my-sage mt-20 pt-20 w-[95%] md:w-[75%] mx-auto'}>
                <ServicesOfferedComponent />
            </ServicesOfferedContainer>

            <AreYouReadyContainer className={"h-48 flex justify-center items-center bg-my-sage bg-opacity-30 mt-32"}>
                <AreYouReadyComponent />
            </AreYouReadyContainer>

            <Footer />
        </>
    );
}
