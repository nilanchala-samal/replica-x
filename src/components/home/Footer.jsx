const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="overflow-hidden">
                        <h4 className="text-xl font-bold mb-4">About Us</h4>
                        <p className="text-gray-400 font-semibold">
                            We are a team of passionate developers building awesome websites and web applications.
                        </p>
                    </div>

                    <div className="overflow-hidden">
                        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="/features" className="text-gray-400 hover:text-white transition duration-300">Features</a>
                            </li>
                            <li className="mb-2">
                                <a href="/pricing" className="text-gray-400 hover:text-white transition duration-300">Pricing</a>
                            </li>
                            <li className="mb-2">
                                <a href="/blog" className="text-gray-400 hover:text-white transition duration-300">Blog</a>
                            </li>
                        </ul>
                    </div>
                    

                    <div className="overflow-hidden">
                        <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22.54 6.42a2.71 2.71 0 00-1.89-.81c-.5 0-.89.18-1.18.54s-.43.82-.43 1.43v1.66H17.5V6.75h2.54v1.23h.05c.34-.63.8-1.1 1.4-1.4a2.7 2.7 0 011.54-.36c.81 0 1.47.29 1.96.86s.74 1.41.74 2.44V15h-2.75V9.78c0-.4-.12-.72-.36-.96s-.58-.36-1.03-.36c-.45 0-.8.11-1.04.34s-.36.55-.36.98v5.9H15V9.78c0-.39-.12-.7-.36-.93s-.57-.35-1-.35c-.48 0-.83.12-1.06.35s-.34.56-.34.98v5.9h-2.75V9.78c0-.41-.12-.73-.37-.97s-.59-.36-1.02-.36c-.44 0-.79.12-1.03.36s-.35.56-.35.96V15h-2.8v-6.3c0-1.01.25-1.84.75-2.47s1.19-1.03 2.04-1.03c.62 0 1.14.14 1.57.43s.71.68.88 1.15h.06c.16-.47.45-.87.85-1.2s.91-.5 1.52-.5c1.25 0 2.09.42 2.53 1.26h.06c.45-.83 1.26-1.26 2.42-1.26.65 0 1.2.11 1.65.33s.85.51 1.15.87.44.79.44 1.3V15z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 0a5.98 5.98 0 00-6.99 5.94A10.08 10.08 0 003.18 16.8 11.64 11.64 0 0012 19a11.7 11.7 0 009.72-2.58 10.08 10.08 0 00-2.71-6.07A5.96 5.96 0 0019 0zm-5 10a4 4 0 110-8 4 4 0 010 8zm0 1a4 4 0 00-4 4 4 4 0 004 4 4 4 0 004-4 4 4 0 00-4-4z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21.24 2.75a9 9 0 01-2.54.7 4.5 4.5 0 001.98-2.48 9.03 9.03 0 01-2.86 1.1A4.5 4.5 0 0014.8 1a4.5 4.5 0 00-4.47 4.47 4.5 4.5 0 00.11.93A12.83 12.83 0 011.65 2.13a4.47 4.47 0 00-.6 2.26 4.5 4.5 0 001.99 3.76 4.49 4.49 0 01-2.03-.57v.05a4.5 4.5 0 003.6 4.41 4.5 4.5 0 01-2.02.08 4.5 4.5 0 004.2 3.13 9.02 9.02 0 01-5.6 1.94 9.15 9.15 0 01-1.07-.06 12.7 12.7 0 006.89 2.03A12.8 12.8 0 0022 12.53v-.59a9.07 9.07 0 002.22-2.34 9.06 9.06 0 01-2.54.7A4.5 4.5 0 0022 7.5a9 9 0 01-2.54.7z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-400">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
