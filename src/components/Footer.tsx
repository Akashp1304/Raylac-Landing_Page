import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto text-center">
                <p className="text-gray-400">© 2025 Raylac. All rights reserved.</p>
                
                {/* Social Links */}
                <div className="flex justify-center gap-6 mt-4">
                    <a href="/support" className="text-gray-400 hover:text-white transition">
                        Support
                    </a>

                    <a
                        href="https://github.com/raylac"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                    >
                        <FaGithub size={20} /> GitHub
                    </a>

                    <a
                        href="https://twitter.com/raylac"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                    >
                        <FaTwitter size={20} /> Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
}
