import React from "react";
import Logo from '../assets/images/logo.svg'
import { Menu } from "lucide-react";


const Navbar = () => {
    const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Programs', path: '#programs' },
  { name: 'About', path: '#about' },
  { name: 'Campus', path: '#camp' },
];


    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            window.setIsScrolled(scrollTop > 10);
        };
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="pt-10">
            <nav className={`fixed top-0 left-0 bg-indigo-900 w-full 
            flex  cursor-pointer    
                items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32
                 transition-all duration-500 z-50 ${isScrolled ? "bg-pink-400 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                <a href="#hero"  className="flex items-center gap-2">
                   <img src={Logo} alt="" className=" w-30"/>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} onClick={window.scroll({behavior:"auto",})} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}
                    <button id="#Contact" className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
                        Contact Us
                    </button>
                </div>

                {/* Desktop Right */}
               

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden text-white">
                   <Menu onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`}/>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}

                    <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                        WhatsApp
                    </button>

                </div>
            </nav>
        </div>
    );
}

export default Navbar