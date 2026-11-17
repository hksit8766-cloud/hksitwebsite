import { Link } from "react-router-dom";
import { useState } from "react";
import ibmLogo from "../assets/partners/IBM_logo.jpg";
import infosysLogo from "../assets/partners/Infosys_logo.png";
import accentureLogo from "../assets/partners/Accenture_logo.png";
import caplogo from "../assets/partners/cap_logo.jpg";
import Cogologo from "../assets/partners/Cogo_logo.png"
import wiprologo from "../assets/partners/wipro.jpg";
import ltimindtreelogo from "../assets/partners/ltimindtree.jpg";
import HclTech from "../assets/partners/HclTech.jpg";
import TechMhindra from "../assets/partners/TechMhindra.jpg";
import Cofoge from "../assets/partners/coforge.jpg";

const companyLogos = [
    {
        id: 1,
        name: "IBM",
        logo: ibmLogo,
    },
    {
        id: 2,
        name: "Infosys",
        logo: infosysLogo,
    },
    {
        id: 3,
        name: "Accenture",
        logo: accentureLogo,
    },
    {
        id: 4,
        name: "Capgemini",
        logo: caplogo,
    },
    {
        id: 5,
        name: "Cognizant",
        logo: Cogologo,
    },
    {
        id: 6,
        name: "Wipro",
        logo: wiprologo,
    },
    {
        id: 7,
        name: "LTIMindtree",
        logo: ltimindtreelogo,
    },
    {
        id: 8,
        name: "HCLTech",
        logo: HclTech,
    },
    {
        id: 9,
        name: "Tech Mahindra",
        logo: TechMhindra,
    },
    {
        id: 10,
        name: "Coforge",
        logo: Cofoge,
    },
];


const studentPlacements = [
    { id: 1, name: "Rahul Patil", course: "MERN Stack", role: "Full Stack Developer", company: "Tech Company", package: "7.8 LPA" },
    { id: 2, name: "Sneha Jadhav", course: ".NET Full Stack", role: ".NET Developer", company: "IT Company", package: "9LPA" },
    { id: 3, name: "Amit Shinde", course: "Java Full Stack", role: "Java Developer", company: "Software Company", package: "11LPA" },
    { id: 4, name: "Priya Pawar", course: "React Development", role: "Frontend Developer", company: "Technology Company", package: "10 LPA" },
    { id: 5, name: "Rohit More", course: "MERN Stack", role: "Node.js Developer", company: "Software Company", package: "9.9 LPA" },
    { id: 6, name: "Pooja Kale", course: ".NET Full Stack", role: "Software Developer", company: "IT Services Company", package: "12 LPA" },
    { id: 7, name: "Akash Chavan", course: "Java Full Stack", role: "Backend Developer", company: "Technology Company", package: "14 LPA" },
    { id: 8, name: "Neha Deshmukh", course: "React Development", role: "React Developer", company: "Software Company", package: "8.9 LPA" },
    { id: 9, name: "Sagar Mane", course: "MERN Stack", role: "Full Stack Developer", company: "IT Company", package: "17LPA" },
    { id: 10, name: "Komal Shinde", course: ".NET Full Stack", role: "Associate Developer", company: "Technology Company", package: "9.5LPA" },
];

const Placements = () => {
    const [studentIndex, setStudentIndex] = useState(0);
    const studentsPerPage = 3;

    const visibleStudents = studentPlacements.slice(
        studentIndex,
        studentIndex + studentsPerPage
    );

    const handleNextStudents = () => {
        const maxStartIndex = Math.max(0, studentPlacements.length - studentsPerPage);
        setStudentIndex((current) => Math.min(current + studentsPerPage, maxStartIndex));
    };

    const handlePreviousStudents = () => {
        setStudentIndex((current) => Math.max(0, current - studentsPerPage));
    };

    return (
        <>

            {/* ================= HERO ================= */}

            <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 text-white">

                <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-28 text-center">

                    <p className="text-blue-300 font-semibold mb-4">
                        HKS-IT PLACEMENT SUPPORT
                    </p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Learn Skills.
                        <span className="text-blue-400">
                            {" "}Prepare for Opportunities.
                        </span>
                    </h1>

                    <p className="text-slate-300 mt-6 max-w-3xl mx-auto text-lg leading-8">
                        Our placement support helps students prepare for the hiring
                        process through resume guidance, interview preparation,
                        mock interviews, project preparation and job opportunity
                        assistance.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">

                        <Link
                            to="/courses"
                            className="bg-blue-500 hover:bg-blue-600 px-7 py-3.5 rounded-lg font-semibold transition"
                        >
                            Explore Courses
                        </Link>

                        <Link
                            to="/book-demo"
                            className="border border-white/30 hover:bg-white/10 px-7 py-3.5 rounded-lg font-semibold transition"
                        >
                            Book Free Demo
                        </Link>

                    </div>

                </div>

            </section>


            {/* ================= PLACEMENT SUPPORT ================= */}

            <section className="py-20 bg-white">

                <div className="max-w-7xl mx-auto px-5 lg:px-8">

                    <div className="text-center mb-14">

                        <p className="text-blue-600 font-semibold">
                            PLACEMENT ASSISTANCE
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            Helping You Prepare for the Hiring Process
                        </h2>

                        <p className="text-slate-600 mt-4 max-w-3xl mx-auto leading-7">
                            Our placement support focuses on improving your technical
                            preparation, professional profile and interview readiness.
                        </p>

                    </div>


                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

                        <PlacementCard
                            icon="📄"
                            title="Resume Building"
                            description="Get guidance to create a professional resume highlighting your technical skills, projects and experience."
                        />

                        <PlacementCard
                            icon="💻"
                            title="Technical Preparation"
                            description="Prepare important programming, database, API, framework and development concepts."
                        />

                        <PlacementCard
                            icon="🎤"
                            title="Mock Interviews"
                            description="Practice technical and HR-style interview questions to improve confidence and communication."
                        />

                        <PlacementCard
                            icon="🚀"
                            title="Project Preparation"
                            description="Learn how to explain your projects, architecture, technologies and technical decisions."
                        />

                        <PlacementCard
                            icon="👤"
                            title="Profile Preparation"
                            description="Get guidance for presenting your technical skills and professional experience effectively."
                        />

                        <PlacementCard
                            icon="💼"
                            title="Job Opportunity Assistance"
                            description="Eligible learners can receive information and guidance regarding relevant job opportunities."
                        />

                    </div>

                </div>

            </section>


            {/* ================= PLACEMENT PROCESS ================= */}

            <section className="py-20 bg-slate-50">

                <div className="max-w-7xl mx-auto px-5 lg:px-8">

                    <div className="text-center mb-14">

                        <p className="text-blue-600 font-semibold">
                            PLACEMENT PROCESS
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            Your Journey From Training to Job Preparation
                        </h2>

                    </div>


                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">

                        <ProcessStep
                            number="01"
                            icon="📚"
                            title="Training"
                            description="Complete your technical training and strengthen core concepts."
                        />

                        <ProcessStep
                            number="02"
                            icon="🛠️"
                            title="Projects"
                            description="Build practical projects to apply your technical knowledge."
                        />

                        <ProcessStep
                            number="03"
                            icon="📄"
                            title="Resume"
                            description="Prepare your resume and professional profile."
                        />

                        <ProcessStep
                            number="04"
                            icon="🎤"
                            title="Interview"
                            description="Practice technical questions and mock interviews."
                        />

                        <ProcessStep
                            number="05"
                            icon="💼"
                            title="Opportunities"
                            description="Explore relevant job opportunities based on your skills."
                        />

                    </div>

                </div>

            </section>


            {/* ================= INTERVIEW PREPARATION ================= */}

            <section className="py-20 bg-slate-950 text-white">

                <div className="max-w-7xl mx-auto px-5 lg:px-8">

                    <div className="grid lg:grid-cols-2 gap-14 items-center">

                        <div>

                            <p className="text-blue-400 font-semibold">
                                INTERVIEW READINESS
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-tight">
                                Prepare to Explain What You Know
                            </h2>

                            <p className="text-slate-400 mt-5 leading-8">
                                Knowing technology is only one part of an interview.
                                Candidates should also be able to explain concepts,
                                projects, challenges and solutions clearly.
                            </p>

                            <Link
                                to="/career-support"
                                className="inline-block mt-8 bg-blue-600 hover:bg-blue-500 px-7 py-3.5 rounded-lg font-semibold transition"
                            >
                                Explore Career Support
                            </Link>

                        </div>


                        <div className="grid sm:grid-cols-2 gap-5">

                            <InterviewBox
                                number="01"
                                title="Technical Concepts"
                                description="Review important concepts from your technology stack."
                            />

                            <InterviewBox
                                number="02"
                                title="Coding Practice"
                                description="Strengthen programming and problem-solving skills."
                            />

                            <InterviewBox
                                number="03"
                                title="Project Explanation"
                                description="Prepare to explain architecture, APIs, database and development decisions."
                            />

                            <InterviewBox
                                number="04"
                                title="Mock Interview"
                                description="Practice answering questions in an interview-style environment."
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= SKILLS ================= */}

            <section className="py-20 bg-white">

                <div className="max-w-7xl mx-auto px-5 lg:px-8">

                    <div className="text-center mb-14">

                        <p className="text-blue-600 font-semibold">
                            JOB READINESS
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            What We Help You Prepare
                        </h2>

                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                            Preparation covers technical knowledge as well as the
                            skills needed to communicate your experience effectively.
                        </p>

                    </div>


                    <div className="flex flex-wrap justify-center gap-4">

                        {[
                            "Programming Fundamentals",
                            "Object-Oriented Programming",
                            "Frontend Development",
                            "Backend Development",
                            "REST APIs",
                            "Database & SQL",
                            "Git & GitHub",
                            "Problem Solving",
                            "Project Explanation",
                            "Resume Preparation",
                            "Technical Interviews",
                            "HR Interviews",
                            "Communication",
                            "Professional Profile",
                        ].map((skill) => (

                            <span
                                key={skill}
                                className="bg-slate-50 border border-slate-200 px-5 py-3 rounded-xl font-medium text-slate-700 hover:border-blue-500 hover:text-blue-600 transition"
                            >
                                {skill}
                            </span>

                        ))}

                    </div>

                </div>

            </section>

            {/* ================= STUDENT SUCCESS ================= */}
    
             
            <section className="py-20 bg-slate-50">
                

                <div className="max-w-7xl mx-auto px-5 lg:px-8">

                    {/* Heading */}

                    <div className="text-center mb-12">

                        <p className="text-blue-600 font-semibold">
                            STUDENT SUCCESS
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">
                            Our Student Placements
                        </h2>

                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                            Explore student career journeys, courses,
                            roles and placement information.
                        </p>

                    </div>


                    {/* STUDENTS + ARROWS */}

                    <div className="relative">

                        {/* LEFT ARROW */}

                        <button
                            type="button"
                            onClick={handlePreviousStudents}
                            disabled={studentIndex === 0}
                            aria-label="Previous students"
                            className="
                    absolute
                    left-0
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    z-10

                    w-12
                    h-12

                    rounded-full

                    bg-blue-600
                    text-white

                    text-2xl
                    font-bold

                    flex
                    items-center
                    justify-center

                    shadow-lg

                    hover:bg-blue-700

                    disabled:bg-slate-300
                    disabled:cursor-not-allowed

                    transition
                "
                        >
                            ←
                        </button>


                        {/* STUDENT CARDS */}

                        <div className="grid md:grid-cols-3 gap-6 px-5">

                            {visibleStudents.map((student) => (

                                <StudentSuccessCard
                                    key={student.id}
                                    student={student}
                                />

                            ))}

                        </div>


                        {/* RIGHT ARROW */}

                        <button
                            type="button"
                            onClick={handleNextStudents}
                            disabled={
                                studentIndex + studentsPerPage >=
                                studentPlacements.length
                            }
                            aria-label="Next students"
                            className="
                    absolute
                    right-0
                    top-1/2
                    translate-x-1/2
                    -translate-y-1/2
                    z-10

                    w-12
                    h-12

                    rounded-full

                    bg-blue-600
                    text-white

                    text-2xl
                    font-bold

                    flex
                    items-center
                    justify-center

                    shadow-lg

                    hover:bg-blue-700

                    disabled:bg-slate-300
                    disabled:cursor-not-allowed

                    transition
                "
                        >
                            →
                        </button>

                    </div>


                    {/* PAGE INDICATOR */}

                    <div className="flex justify-center items-center gap-2 mt-10">

                        {[0, 3, 6, 9].map((page) => (

                            <button
                                type="button"
                                key={page}
                                onClick={() => setStudentIndex(page)}
                                aria-label={`Show student group ${page / 3 + 1}`}
                                className={`
                        h-2.5
                        rounded-full
                        transition-all
                        duration-300

                        ${studentIndex === page
                                        ? "w-8 bg-blue-600"
                                        : "w-2.5 bg-slate-300"
                                    }
                    `}
                            />

                        ))}

                    </div>

                </div>

            </section>

            {/* ================= HIRING PARTNERS ================= */}

            <section className="py-20 bg-white overflow-hidden">

                <div className="max-w-7xl mx-auto px-5 lg:px-8">

                    {/* Heading */}
                    <div className="text-center mb-12">

                        <p className="text-blue-600 font-semibold">
                            HIRING NETWORK
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            Hiring Partners
                        </h2>

                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                            Explore companies and career opportunities across
                            the IT industry.
                        </p>

                    </div>


                    {/* AUTO SCROLLER */}
                    <div className="w-full overflow-hidden py-5">

                        <div className="partner-scroll flex w-max items-center">

                            {[...companyLogos, ...companyLogos].map(
                                (company, index) => (

                                    <div
                                        key={`${company.id}-${index}`}
                                        className="
                                mx-4
                                w-52
                                h-28
                                shrink-0
                                flex
                                items-center
                                justify-center
                                bg-white
                                border
                                border-slate-200
                                rounded-2xl
                                p-5
                                transition
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-xl
                                hover:border-blue-400
                            "
                                    >

                                        <img
                                            src={company.logo}
                                            alt={`${company.name} logo`}
                                            title={company.name}
                                            className="
                                    w-40
                                    h-16
                                    object-contain
                                "
                                        />

                                    </div>

                                )
                            )}

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= WHO CAN BENEFIT ================= */}

            <section className="py-20 bg-slate-50">

                <div className="max-w-7xl mx-auto px-5 lg:px-8">

                    <div className="text-center mb-14">

                        <p className="text-blue-600 font-semibold">
                            WHO CAN BENEFIT?
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            Career Support for Different Learners
                        </h2>

                    </div>


                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        <LearnerCard
                            icon="🎓"
                            title="Students"
                            description="Build practical technical skills and prepare for your first IT opportunity."
                        />

                        <LearnerCard
                            icon="🚀"
                            title="Freshers"
                            description="Strengthen your projects, resume and technical interview preparation."
                        />

                        <LearnerCard
                            icon="💼"
                            title="Working Professionals"
                            description="Upgrade your technical skills and prepare for relevant career opportunities."
                        />

                        <LearnerCard
                            icon="🔄"
                            title="Career Switchers"
                            description="Build a structured technology foundation while preparing for a transition into IT."
                        />

                    </div>

                </div>

            </section>


            {/* ================= IMPORTANT NOTE ================= */}

            <section className="py-16 bg-white">

                <div className="max-w-5xl mx-auto px-5">

                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-7 md:p-8">

                        <div className="flex gap-4">

                            <div className="text-2xl">
                                💡
                            </div>

                            <div>

                                <h3 className="text-lg font-bold text-slate-900">
                                    About Placement Assistance
                                </h3>

                                <p className="text-slate-600 mt-2 leading-7">
                                    HKS-IT placement support focuses on career preparation
                                    and assistance. Employment outcomes depend on factors
                                    such as individual skills, eligibility, experience,
                                    interview performance, employer requirements and
                                    available opportunities.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= FINAL CTA ================= */}

            <section className="py-20 bg-slate-50">

                <div className="max-w-6xl mx-auto px-5">

                    <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-3xl px-8 md:px-14 py-14 text-center shadow-xl">

                        <p className="text-blue-100 font-semibold">
                            START YOUR CAREER JOURNEY
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-3">
                            Build Skills That Prepare You for IT Opportunities
                        </h2>

                        <p className="text-blue-100 mt-5 max-w-2xl mx-auto leading-7">
                            Explore HKS-IT training programs and book a free demo
                            session to understand the learning and career support
                            process.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mt-8">

                            <Link
                                to="/book-demo"
                                className="bg-white text-blue-700 hover:bg-slate-100 px-7 py-3.5 rounded-lg font-semibold transition"
                            >
                                Book Free Demo
                            </Link>

                            <Link
                                to="/courses"
                                className="border border-white/40 hover:bg-white/10 px-7 py-3.5 rounded-lg font-semibold transition"
                            >
                                Explore Courses
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </>
    );
};


/* ========================================================= */
/* PLACEMENT CARD */
/* ========================================================= */

const PlacementCard = ({ icon, title, description }) => {
    return (

        <div className="bg-white border border-slate-200 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl transition duration-300">

            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-3xl">
                {icon}
            </div>

            <h3 className="text-xl font-bold mt-5">
                {title}
            </h3>

            <p className="text-slate-600 mt-3 leading-7">
                {description}
            </p>

        </div>
    );
};


/* ========================================================= */
/* PROCESS STEP */
/* ========================================================= */

const ProcessStep = ({
    number,
    icon,
    title,
    description,
}) => {

    return (

        <div className="bg-white border border-slate-200 rounded-2xl p-6 relative hover:shadow-lg transition">

            <span className="absolute top-5 right-5 text-slate-200 font-bold text-2xl">
                {number}
            </span>

            <div className="text-3xl">
                {icon}
            </div>

            <h3 className="font-bold text-lg mt-5">
                {title}
            </h3>

            <p className="text-slate-600 text-sm mt-3 leading-6">
                {description}
            </p>

        </div>

    );
};


/* ========================================================= */
/* INTERVIEW BOX */
/* ========================================================= */

const InterviewBox = ({
    number,
    title,
    description,
}) => {

    return (

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">

            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold">
                {number}
            </div>

            <h3 className="font-bold text-lg mt-5">
                {title}
            </h3>

            <p className="text-slate-400 mt-2 leading-7">
                {description}
            </p>

        </div>

    );
};


/* ========================================================= */
/* STUDENT SUCCESS CARD */
/* ========================================================= */

const StudentSuccessCard = ({ student }) => {
    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-7 min-h-[360px] hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center text-xl font-bold shadow-md">
                {student.name
                    .split(" ")
                    .map((word) => word.charAt(0))
                    .join("")
                    .slice(0, 2)}
            </div>

            <h3 className="text-xl font-bold mt-5 text-slate-900">
                {student.name}
            </h3>

            <div className="mt-5">
                <p className="text-xs uppercase tracking-wide text-slate-400 font-semibold">Course</p>
                <p className="text-slate-700 font-medium mt-1">{student.course}</p>
            </div>

            <div className="mt-4">
                <p className="text-xs uppercase tracking-wide text-slate-400 font-semibold">Role</p>
                <p className="text-slate-700 font-medium mt-1">{student.role}</p>
            </div>

            <div className="mt-4">
                <p className="text-xs uppercase tracking-wide text-slate-400 font-semibold">Company</p>
                <p className="text-blue-600 font-bold mt-1">{student.company}</p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                    ✓ Placed
                </span>
                <div className="text-right">
                    <p className="text-xs text-slate-400">Package</p>
                    <p className="font-bold text-slate-900">{student.package}</p>
                </div>
            </div>
        </div>
    );
};
/* ========================================================= */
/* PARTNER LOGO */
/* ========================================================= */
const PartnerLogo = ({ image, name }) => {
    return (
        <div
            className="
                w-64
                h-32
                bg-white
                border
                border-slate-200
                rounded-2xl
                flex
                items-center
                justify-center
                p-6
                hover:shadow-xl
                hover:border-blue-300
                hover:-translate-y-1
                transition
                duration-300
            "
        >
            <img
                src={image}
                alt={`${name} logo`}
                title={name}
                className="
                    max-h-20
                    max-w-[190px]
                    w-auto
                    h-auto
                    object-contain
              "
            />
        </div>
    );
};
/* ========================================================= */
/* LEARNER CARD */
/* ========================================================= */
const LearnerCard = ({
    icon,
    title,
    description,
}) => {
    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-7 text-center hover:-translate-y-1 hover:shadow-lg transition">
            <div className="text-4xl">
                {icon}
            </div>
            <h3 className="text-xl font-bold mt-5">
                {title}
            </h3>
            <p className="text-slate-600 mt-3 leading-7">
                {description}
            </p>
        </div>
    );
};

export default Placements;