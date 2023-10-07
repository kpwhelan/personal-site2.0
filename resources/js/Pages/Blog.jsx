import BlogPostPreview from "@/Components/BlogPostPreview";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/WelcomePage/Navbar";
import logo from '../../assets/K.png';
import PrimaryButton from "@/Components/PrimaryButton";

export default function Blog({ posts }) {
    return (
        <>
            <Navbar className={"text-my-gray w-screen p-4 flex justify-around items-center border border-b-my-sage"} />
            <div className="flex flex-col-reverse md:block">
                <div className="w-[90%] md:w-[60%] mx-auto">
                    {posts.map(post => {
                        return <BlogPostPreview key={post.id} post={post} />
                    })}
                </div>

                <div className="md:fixed p-4 md:right-0 md:top-28 h-[50%] md:w-[30%] lg:w-[15%] border-l-2 border-t-2 border-b-2 flex items-center text-center md:text-left">
                    <div className="mx-auto md:mx-0">
                        <img src={logo} className="w-24"></img>
                        <p className="mt-2">Hey, Kevin here. Thanks for visting and checking out my blog!</p>
                        <p>Don't forget to subscribe and happy reading!</p>
                        <PrimaryButton className="mt-4">
                            <p className="text-lg">Subscribe</p>
                        </PrimaryButton>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
