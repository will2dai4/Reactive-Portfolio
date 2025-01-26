import React from 'react';
import { useColorScheme } from '../contexts/ColorSchemeContext';

const colorButtonClasses = {
    cottoncandy: 'border-[#A2D2FF] text-[#BDE0FE]',
    cyberpunk: 'border-[#7400BB] text-[#80FFDB]',
    evergreen: 'border-[#99D98C] text-[#52B69A]',
    purple: 'border-[#8B73A0] text-[#F4DAFA]',
    racer: 'border-[#FCA311] text-[#E5E5E5]',
    turquoise: 'border-[#56CFE1] text-[#488FE3]',
    turquoise2: 'border-[#4EA8DE] text-[#80FFD8]',
    yellow: 'border-[#FDFEB7] text-[#DFFFBD]'
};

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const { changeColorScheme = () => { } } = useColorScheme();

    const handleColorChange = (color: string) => {
        changeColorScheme(color);
    };

    return (
        <div
            className={`fixed top-0 left-0 w-[300px] h-full bg-[var(--bg-color2)] z-50 transform transition-transform duration-200 ease-in-out 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <button
                onClick={onClose}
                className="absolute top-5 left-5 text-[32px] text-[var(--secondary-color)] hover:text-[var(--primary-color)]"
            >
                &times;
            </button>

            <div className="flex flex-col gap-5 mt-20 px-5">
                {Object.entries(colorButtonClasses).map(([colorName, classes]) => (
                    <button
                        key={colorName}
                        className={`w-4/5 ml-[10%] h-[50px] font-mono text-lg tracking-wider 
              border-solid border-4 rounded-xl bg-[var(--bg-color2)] 
              ${classes} 
              transform transition duration-300 hover:scale-110`}
                        onClick={() => handleColorChange(colorName)}
                    >
                        {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;