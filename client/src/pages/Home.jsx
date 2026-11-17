import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            {/* ================= HERO ================= */}
            <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 text-white">
                <div className="max-w-7xl mx-auto px-5 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT SIDE */}
                    <div>
                        <span className="inline-block bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-full text-blue-200 text-sm mb-6">
                            Learn • Build • Grow
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Build Your
                            <span className="text-blue-400"> IT Career </span>
                            With Industry-Ready Skills
                        </h1>

                        <p className="mt-6 text-lg text-slate-300 max-w-xl leading-8">
                            Learn modern technologies through practical training,
                            real-world projects and career-focused guidance at HKS-IT.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <Link
                                to="/courses"
                                className="bg-blue-500 hover:bg-blue-600 px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2 transition"
                            >
                                Explore Courses
                                <span>→</span>
                            </Link>

                            <Link
                                to="/book-demo"
                                className="border border-white/30 hover:bg-white/10 px-7 py-3.5 rounded-lg font-semibold transition"
                            >
                                Book Free Demo
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="hidden lg:flex justify-center">
                        <div className="w-80 h-80 bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center">

                            <div className="text-center">
                                <div className="text-8xl mb-5">
                                    💻
                                </div>

                                <p className="text-xl font-semibold text-blue-200">
                                    Learn. Code. Grow.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>


            {/* ================= WHY HKS-IT ================= */}
            <section className="py-20 bg-white">

                <div className="max-w-7xl mx-auto px-5 lg:px-8">

                    <div className="text-center mb-14">

                        <p className="text-blue-600 font-semibold">
                            WHY HKS-IT?
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            Learn Skills That Matter
                        </h2>

                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                            Practical learning designed to prepare you for
                            real-world software development and IT careers.
                        </p>

                    </div>


                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        <Feature
                            icon="💻"
                            title="Practical Training"
                            description="Learn concepts by building practical applications."
                        />

                        <Feature
                            icon="🚀"
                            title="Live Projects"
                            description="Work on projects using modern development technologies."
                        />

                        <Feature
                            icon="👨‍🏫"
                            title="Expert Guidance"
                            description="Learn with guidance from experienced professionals."
                        />

                        <Feature
                            icon="💼"
                            title="Career Support"
                            description="Resume, interview and career preparation support."
                        />

                    </div>

                </div>

            </section>


            {/* ================= COURSES ================= */}
            <section className="py-20 bg-slate-50">

                <div className="max-w-7xl mx-auto px-5 lg:px-8">

                    <div className="text-center mb-12">

                        <p className="text-blue-600 font-semibold">
                            OUR COURSES
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            Start Learning Today
                        </h2>

                        <p className="text-slate-600 mt-4">
                            Choose the right technology and start building your career.
                        </p>

                    </div>


                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

                        <Course
                            icon="⚛️"
                            title="MERN Stack Development"
                            description="MongoDB, Express.js, React.js and Node.js."
                        />

                        <Course
                            icon="💻"
                            title=".NET Full Stack"
                            description="C#, ASP.NET Core, Web API, SQL and modern frontend technologies."
                        />

                        <Course
                            icon="☕"
                            title="Java Full Stack"
                            description="Java, Spring Boot, REST APIs, databases and frontend development."
                        />

                    </div>


                    <div className="text-center mt-10">

                        <Link
                            to="/courses"
                            className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition"
                        >
                            View All Courses →
                        </Link>

                    </div>

                </div>

            </section>


            {/* ================= CAREER SUPPORT ================= */}
            <section className="py-20 bg-white">

                <div className="max-w-7xl mx-auto px-5 lg:px-8">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        <div>

                            <p className="text-blue-600 font-semibold">
                                CAREER SUPPORT
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold mt-3">
                                More Than Just Training
                            </h2>

                            <p className="text-slate-600 mt-5 leading-7">
                                Our training focuses on practical skills along with
                                preparation for technical interviews and career opportunities.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mt-8">

                                <SupportItem text="Resume Preparation" />
                                <SupportItem text="Mock Interviews" />
                                <SupportItem text="Technical Preparation" />
                                <SupportItem text="Live Projects" />
                                <SupportItem text="Interview Guidance" />
                                <SupportItem text="Career Guidance" />

                            </div>

                        </div>


                        <div className="bg-slate-50 rounded-3xl p-10 text-center">

                            <div className="text-8xl">
                                🎯
                            </div>

                            <h3 className="text-2xl font-bold mt-6">
                                Prepare For Your IT Career
                            </h3>

                            <p className="text-slate-600 mt-4">
                                Build practical skills and confidence for technical
                                interviews and software development opportunities.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}
            <section className="py-20">

                <div className="max-w-6xl mx-auto px-5">

                    <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-3xl px-8 py-14 text-center shadow-xl">

                        <p className="font-semibold text-blue-100 mb-3">
                            START YOUR JOURNEY
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold">
                            Ready to Start Your IT Career?
                        </h2>

                        <p className="text-blue-100 mt-4 max-w-xl mx-auto">
                            Book a free demo session and discover which technology
                            is right for your career.
                        </p>

                        <div className="flex justify-center flex-wrap gap-4 mt-8">

                            <Link
                                to="/book-demo"
                                className="bg-white text-blue-700 hover:bg-slate-100 px-7 py-3.5 rounded-lg font-semibold transition"
                            >
                                Book Free Demo
                            </Link>

                            <Link
                                to="/contact"
                                className="border border-white/40 hover:bg-white/10 px-7 py-3.5 rounded-lg font-semibold transition"
                            >
                                Contact Us
                            </Link>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
};


/* ================= FEATURE COMPONENT ================= */

const Feature = ({ icon, title, description }) => {
    return (
        <div className="border border-slate-200 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition duration-300">

            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-2xl">
                {icon}
            </div>

            <h3 className="font-bold text-xl mt-5">
                {title}
            </h3>

            <p className="text-slate-600 mt-3 leading-7">
                {description}
            </p>

        </div>
    );
};


/* ================= COURSE COMPONENT ================= */

const Course = ({ icon, title, description }) => {
    return (
        <div className="bg-white rounded-2xl border border-slate-200 p-7 hover:-translate-y-1 hover:shadow-xl transition duration-300">

            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-3xl">
                {icon}
            </div>

            <h3 className="text-xl font-bold mt-5">
                {title}
            </h3>

            <p className="text-slate-600 mt-3 leading-7">
                {description}
            </p>

            <Link
                to="/courses"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold mt-6"
            >
                View Course
                <span>→</span>
            </Link>

        </div>
    );
};


/* ================= SUPPORT COMPONENT ================= */

const SupportItem = ({ text }) => {
    return (
        <div className="flex items-center gap-3">

            <div className="w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                ✓
            </div>

            <span className="font-medium text-slate-700">
                {text}
            </span>

        </div>
    );
};


export default Home;