import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    onSidebarToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle }) => {
    return (
        <div className="overflow-hidden p-0">
            <button
                onClick={onSidebarToggle}
                className="sidebar-button m-4 text-[32px] transform scale-y-[-1]"
            >
                <i className="devicon-mithril-plain text-[var(--secondary-color)] transition duration-300 hover:text-[var(--primary-color)] hover:scale-120"></i>
            </button>

            <nav className="float-right">
                {[
                    { path: 'contact', label: '/contact' },
                    { path: 'projects', label: '/projects' },
                    { path: 'experiences', label: '/experiences' },
                    { path: '', label: '/home' }
                ].map(({ path, label }) => (
                    <Link
                        key={path}
                        to={`/${path}`}
                        className="float-right p-4 text-[24px] text-[var(--secondary-color)] rounded-md hover:text-[var(--primary-color)] hover:underline"
                    >
                        {label}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Header;