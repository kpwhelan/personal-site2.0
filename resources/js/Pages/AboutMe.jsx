import HeaderSectionContainer from "@/Components/AboutMePage/HeaderSection";
import HeaderSectionComponent from "@/Components/AboutMePage/HeaderSectionComponent";
import Footer from "@/Components/Footer";
import PrimaryButton from "@/Components/PrimaryButton";
import Navbar from "@/Components/WelcomePage/Navbar";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function AboutMe() {
    return (
        <div>
            <Navbar className={"text-my-gray w-screen p-4 flex justify-around items-center border border-b-my-sage"} />

            <HeaderSectionContainer className={'w-[70%] mx-auto'}>
                <HeaderSectionComponent />
            </HeaderSectionContainer>

            <Card className="w-[90%] md:w-[50%] p-2 mx-auto">
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        About Me
                    </Typography>
                    <Typography className="my-6">
                        Hey there! I’m Kevin Whelan, your friendly neighborhood web developer! I've got a knack for coding, a love for coffee, a passion for technology, and a guitar always within arm's reach. With four energetic kids and a love for all things digital, I’ve mastered the art of balancing chaos and creativity.
                    </Typography>
                    <Typography className="my-6">
                    A Tech Geek at Heart -
                    Ever since I wrote my first line of code, I knew I was destined for a life in the tech world. I’ve spent years honing my craft, turning complex code into user-friendly digital experiences, and ensuring your online presence shines brighter than my kid's smiles !
                    </Typography>
                    <Typography className="my-6">
                    When I'm not busy writing code, you'll find me surrounded by my family – my amzing wife, our four chaos makers (aka our kids), our dog Rain, and probably a guitar or two. Family time is important to me, and it’s where I draw my inspiration to be successful and work hard every day.
                    </Typography>
                    <Typography className="my-6">
                    From Code to Carburetors -
                    Oh, and did I mention I have a love for fixing cars? Yep, I’m that guy who’s as comfortable under the hood of a car as I am behind a keyboard and mouse. Who knew that debugging an engine could be just as satisfying as debugging code? Life's full of surprises!
                    </Typography>

                    <Typography className="my-6">
                    So, if you’re ready to transform your online presence from 'meh' to 'wow', let’s chat!
                    </Typography>
                    <PrimaryButton className='bg-my-sage mt-2 bg-opacity-80'>
                        <a href={route('contact')}><p className='text-2xl'>Hit Me Up Here!</p></a>
                    </PrimaryButton>
                </CardBody>
            </Card>

            <Footer />
        </div>
    )
}
