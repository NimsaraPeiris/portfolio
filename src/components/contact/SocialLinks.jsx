import { FaGithub, FaLinkedin, FaInstagram, FaInbox } from 'react-icons/fa';
import { SiBuymeacoffee } from 'react-icons/si';

const socialLinks = [
    {
        name: 'LinkedIn',
        icon: <FaLinkedin className="w-6 h-6" />,
        url: 'https://linkedin.com/in/pasindu-peiris',
        color: 'hover:bg-[#0077b5]'
    },
    {
        name: 'Email',
        icon: <FaInbox className="w-6 h-6" />,
        url: 'mailto:yourname@example.com',
        color: 'hover:bg-[#D44638]'
    },
    {
        name: 'GitHub',
        icon: <FaGithub className="w-6 h-6" />,
        url: 'https://github.com/NimsaraPeiris',
        color: 'hover:bg-[#333]'
    },
    {
        name: 'Instagram',
        icon: <FaInstagram className="w-6 h-6" />,
        url: 'https://instagram.com/nimsara.peiriz',
        color: 'hover:bg-[#e1306c]'
    },
    {
        name: 'Buy Me a Coffee',
        icon: <SiBuymeacoffee className="w-6 h-6" />,
        url: 'buymeacoffee.com/nimsara',
        color: 'hover:bg-[#fd0]'
    }
];

export default function SocialLinks() {
    return (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 
                        transition-all duration-300 hover:text-white ${link.color} hover:border-transparent`}
                    >
                        {link.icon}
                        <span>{link.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}