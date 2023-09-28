import WelcomeComponent from '@/Components/WelcomePage/WelcomeComponent';
import WelcomeComponentContainer from '@/Components/WelcomePage/WelcomeComponentContainer';
import Navbar from '@/Components/WelcomePage/Navbar';
import { Link, Head } from '@inertiajs/react';
import WhyChooseMeContainer from '@/Components/WelcomePage/WhyChooseMeContainer';
import WhyChooseMeComponent from '@/Components/WelcomePage/WhyChooseMeComponent';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Navbar className={"text-my-gray w-screen p-4 flex justify-around items-center border border-b-my-sage"} />

            <WelcomeComponentContainer className={"flex justify-center text-my-gray"}>
                <WelcomeComponent className={"flex items-center justify-around max-h-min p-4 w-[60%] mt-36"} />
            </WelcomeComponentContainer>

            <WhyChooseMeContainer className={"border border-t-my-sage mt-20 pt-20"}>
                <WhyChooseMeComponent  />
            </WhyChooseMeContainer>
        </>
    );
}
