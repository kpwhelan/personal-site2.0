import Footer from "@/Components/Footer";
import Navbar from "@/Components/WelcomePage/Navbar";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function Blog() {
    return (
        <>
            <Navbar className={"text-my-gray w-screen p-4 flex justify-around items-center border border-b-my-sage"} />
            <div className="grid h-screen place-items-center">
                <Card className="w-[50%] text-center p-2 mx-auto">
                    <CardBody>
                        <Typography variant="h3" color="blue-gray" className="mb-2">
                            Under Construction
                        </Typography>
                        <Typography>
                            Blog Coming Soon!
                        </Typography>
                    </CardBody>
                </Card>
            </div>

            <Footer />
        </>
    )
}
