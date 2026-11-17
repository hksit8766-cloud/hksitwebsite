import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-300">
            <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 grid md:grid-cols-4 gap-10">

                <div>
                    <h2 className="text-white text-2xl font-bold">
                        HKS<span className="text-blue-500">-IT</span>
                    </h2>

                    <p className="mt-4 text-sm leading-6">
                        Practical IT training focused on modern technologies,
                        projects and career development.
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">
                        Quick Links
                    </h3>

                    <div className="flex flex-col gap-3 text-sm">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/courses">Courses</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">
                        Training
                    </h3>

                    <div className="flex flex-col gap-3 text-sm">
                        <Link to="/courses">MERN Stack</Link>
                        <Link to="/courses">.NET Full Stack</Link>
                        <Link to="/courses">Java Full Stack</Link>
                        <Link to="/career-support">Career Support</Link>
                    </div>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">
                        Get Started
                    </h3>

                    <p className="text-sm">
                        Interested in a course?
                    </p>

                    <Link
                        to="/book-demo"
                        className="inline-block mt-4 bg-blue-600 text-white px-5 py-3 rounded-lg"
                    >
                        Book Free Demo
                    </Link>
                </div>

            </div>

            <div className="border-t border-slate-800 text-center py-5 text-sm">
                © {new Date().getFullYear()} HKS-IT. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;