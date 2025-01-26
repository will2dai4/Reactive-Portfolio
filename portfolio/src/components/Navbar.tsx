import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">My Portfolio</Link>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li><Link to="/experiences" className="hover:underline">Experiences</Link></li>
                    <li><Link to="/projects" className="hover:underline">Projects</Link></li>
                    <li><Link to="/contacts" className="hover:underline">Contacts</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;