import MainImg from '../../../assets/main-img.jpg';
import PrimaryButton from '../PrimaryButton';

export default function WelcomeComponent({ className }) {
    return (
        <div className={className}>
            <div className="w-[90%] lg:w-[50%] mx-auto text-center lg:text-left md:mt-4 p-2">
                <h1 className="font-extrabold text-4xl lg:text-6xl">
                    Hi, I'm Kevin.<br/> I'm a freelance web developer and software engineer.
                </h1>

                <p className="mt-6 text-my-light-gray">
                    If this is you're first time here, welcome! <br/>
                    Relax, take a look around, hit that <span>contact</span> button if you have any questions!
                </p>
                <p className="mt-2 text-my-light-gray">
                    ...Don't forget to head over to my blog and check it out, and subscribe so you'll never miss a new post!
                </p>

                <PrimaryButton className='bg-my-sage mt-6 bg-opacity-80'>
                    <a href={route('contact')}><p className='text-2xl'>Hit Me Up Here!</p></a>
                </PrimaryButton>
            </div>

            <div className='p-4 flex items-center justify-center rounded-full md:rounded-md border-l-2 w-[50%] bg-gradient-to-r from-white to-my-sage mx-auto'>
                <img className="rounded-full md:rounded-md" src={MainImg}></img>
            </div>
        </div>
    )
}
