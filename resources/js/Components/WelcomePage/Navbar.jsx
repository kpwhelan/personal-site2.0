import logo from '../../../assets/K.png';

export default function Navbar({ className }) {
    return (
        <div className={className} >
            {/* <div className='flex items-center'> */}
            {/* <img className="w-16" src={logo}></img> */}
            <a href={route('home')} className='ml-2'><p className="text-xl font-extrabold">Kevin Whelan</p></a>
            {/* </div> */}

            <ul className="flex flex-wrap items-center justify-center">
                <a href={route('about-me')}><li className="mr-6">About</li></a>
                <a href={route('contact')}><li className="mr-6">Contact</li></a>
                <a href={route('blog')}><li>Blog</li></a>
            </ul>
        </div>
    );
}
