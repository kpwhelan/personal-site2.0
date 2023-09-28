export default function Navbar({ className }) {
    return (
        <div className={className} >
            <p className="text-xl font-extrabold">Kevin Whelan</p>

            <ul className="flex flex-wrap items-center justify-center">
                <li className="mr-6">About</li>
                <li className="mr-6">Contact</li>
                <li>Blog</li>
            </ul>
        </div>
    );
}
