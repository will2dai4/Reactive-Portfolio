import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Command {
    input: string;
    output: string;
}

const Terminal: React.FC = () => {
    const [commandHistory, setCommandHistory] = useState<Command[]>([{
        input: '',
        output: 'Welcome to William Dai\'s portfolio. Type "help" for available commands.'
    }]);
    const [currentInput, setCurrentInput] = useState('');
    const navigate = useNavigate();
    const terminalRef = useRef<HTMLDivElement>(null);

    const VALID_PATHS = {
        'home': '/',
        'experiences': '/experiences',
        'projects': '/projects',
        'contact': '/contact'
    };

    const processCommand = (input: string) => {
        const parts = input.trim().toLowerCase().split(' ');
        const command = parts[0];
        const arg = parts[1];

        let output = '';

        switch (command) {
            case 'cd':
                if (!arg) {
                    output = 'Usage: cd [directory]. Type "ls" to see available directories.';
                } else if (arg in VALID_PATHS) {
                    output = `Navigating to ${arg}...`;
                    navigate(VALID_PATHS[arg as keyof typeof VALID_PATHS]);
                } else {
                    output = `Directory not found: ${arg}`;
                }
                break;
            case 'ls':
                output = 'Available directories:\n' + Object.keys(VALID_PATHS).join('\n');
                break;
            case 'help':
                output = `Available commands:
cd [directory] - Navigate to a section
ls - List available directories
clear - Clear terminal
help - Show this help message`;
                break;
            case 'clear':
                setCommandHistory([{
                    input: '',
                    output: 'Terminal cleared. Type "help" for available commands.'
                }]);
                return;
            default:
                output = `Command not found: ${command}. Type "help" for available commands.`;
        }

        setCommandHistory(prev => [...prev, { input, output }]);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            processCommand(currentInput);
            setCurrentInput('');
        }
    };

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [commandHistory]);

    return (
        <div className="my-8 mx-auto max-w-3xl">
            <div
                className="bg-[var(--bg-color2)] rounded-lg p-4 font-mono text-[var(--primary-color)]"
                style={{ minHeight: '300px', maxHeight: '500px' }}
                ref={terminalRef}
            >
                {/* Terminal header */}
                <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                {/* Command history */}
                <div className="overflow-auto">
                    {commandHistory.map((command, index) => (
                        <div key={index} className="mb-2">
                            {command.input && (
                                <div className="flex gap-2">
                                    <span className="text-[var(--secondary-color)]">➜</span>
                                    <span className="text-[var(--primary-color)]">{command.input}</span>
                                </div>
                            )}
                            <div className="whitespace-pre-line">{command.output}</div>
                        </div>
                    ))}

                    {/* Current input line */}
                    <div className="flex gap-2 items-center">
                        <span className="text-[var(--secondary-color)]">➜</span>
                        <input
                            type="text"
                            value={currentInput}
                            onChange={(e) => setCurrentInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="bg-transparent border-none outline-none flex-1 text-[var(--primary-color)]"
                            autoFocus
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terminal;