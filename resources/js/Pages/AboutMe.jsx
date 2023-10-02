import HeaderSectionContainer from "@/Components/AboutMePage/HeaderSection";
import HeaderSectionComponent from "@/Components/AboutMePage/HeaderSectionComponent";
import Footer from "@/Components/Footer";
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
                        Hey there! I’m Kevin Whelan, your friendly neighborhood web developer with a knack for coding, a passion for technology, and a guitar always within arm's reach. With four energetic kids and a love for all things digital, I’ve mastered the art of balancing chaos and creativity.
                    </Typography>
                    <Typography className="my-6">
                    A Tech Geek at Heart -
                    Ever since I wrote my first line of code, I knew I was destined for a life in the tech world. I’ve spent years crafting sleek and functional websites, turning complex code into user-friendly digital experiences, and ensuring your online presence shines brighter than my kid's smiles on a candy day!
                    </Typography>
                    <Typography className="my-6">
                    When I'm not busy typing away, you'll find me surrounded by my amazing tribe – my amzing wife, our four chaos makers (aka our kids), and probably a guitar or two. Family time is sacred, and it’s where I draw my inspiration to be successfull and work hard every day.
                    </Typography>
                    <Typography className="my-6">
                    From Code to Carburetors -
Oh, and did I mention my newfound love for fixing cars? Yep, I’m that guy who’s as comfortable under a car hood as I am behind a computer screen. Who knew that debugging an engine could be just as satisfying as debugging code? Life's full of surprises!
                    </Typography>

                    <Typography className="my-6">
                    So, if you’re ready to transform your online presence from 'meh' to 'wow', let’s chat! Let's build something amazing together!.
                    </Typography>
                </CardBody>
            </Card>

            <Footer />
        </div>
    )
}
