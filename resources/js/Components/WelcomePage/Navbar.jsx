export default function Navbar({ className }) {
    return (
        <div className={className} >
            <a href={route('home')}><p className="text-xl font-extrabold">Kevin Whelan</p></a>

            <ul className="flex flex-wrap items-center justify-center">
                <a href={route('about-me')}><li className="mr-6">About</li></a>
                <a href={route('contact')}><li className="mr-6">Contact</li></a>
                <li>Blog</li>
            </ul>
        </div>
    );
}
