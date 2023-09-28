import MainImg from '../../../assets/main-img.jpg';
import ContactButton from '../ContactButton';
import PrimaryButton from '../PrimaryButton';

export default function WelcomeComponent({ className }) {
    return (
        <div className={className}>
            <div className="w-[50%]">
                <h1 className="font-extrabold text-6xl">
                    Hi, I'm Kevin.<br/> I'm a freelance web developer and software engineer.
                </h1>

                <p className="mt-6">
                    If this is you're first to here, welcome! <br/>
                    Relax, take a look around, hit that <span>contact</span> button if you have any questions!
                </p>
                <p className="mt-2">
                    ...Don't forget to head over to my blog and check it out, and subscribe so you'll never miss a new post!
                </p>

                <PrimaryButton className='bg-my-sage mt-2'>
                    <p className='text-2xl'>Contact</p>
                </PrimaryButton>
            </div>

            <div className='h-full flex items-center justify-center rounded-md border-l-2 w-[50%] bg-gradient-to-r from-white to-my-sage'>
                <img className="rounded-md" src={MainImg}></img>
            </div>
        </div>
    )
}
