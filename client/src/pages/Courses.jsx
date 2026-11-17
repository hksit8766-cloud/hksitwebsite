import { Link } from "react-router-dom";

const courses = [
  {
    id: "mern-stack",
    icon: "⚛️",
    title: "MERN Stack Development",
    description:
      "Learn full-stack web development using MongoDB, Express.js, React.js and Node.js.",
    duration: "6 Months",
    level: "Beginner to Advanced",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    id: "dotnet-full-stack",
    icon: "💻",
    title: ".NET Full Stack Development",
    description:
      "Build modern enterprise applications using C#, ASP.NET Core, Web API, SQL and frontend technologies.",
    duration: "6 Months",
    level: "Beginner to Advanced",
    technologies: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Web API",
      "SQL Server",
      "JavaScript",
      "React",
    ],
  },
  {
    id: "java-full-stack",
    icon: "☕",
    title: "Java Full Stack Development",
    description:
      "Learn Java application development with Spring Boot, REST APIs, databases and modern frontend development.",
    duration: "6 Months",
    level: "Beginner to Advanced",
    technologies: [
      "Java",
      "Spring Boot",
      "REST API",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
    ],
  },
  {
    id: "automation-testing",
    icon: "🤖",
    title: "Automation Testing",
    description:
      "Learn automation testing from basics to advanced concepts using modern testing tools and frameworks.",
    duration: "6 Months",
    level: "Beginner to Intermediate",
    technologies: [
      "Selenium",
      "Java",
      "TestNG",
      "Maven",
      "Postman",
      "Git",
    ],
  },

  {
    id: "manual-testing",
    icon: "🧪",
    title: "Manual Testing",
    description:
      "Learn software testing fundamentals, test case design, bug tracking and complete manual testing processes.",
    duration: "6 Months",
    level: "Beginner to Intermediate",
    technologies: [
      "SDLC",
      "STLC",
      "Test Cases",
      "Bug Life Cycle",
      "JIRA",
      "Agile",
    ],
  },

  {
    id: "ai-ml",
    icon: "🧠",
    title: "AI & Machine Learning",
    description:
      "Learn the fundamentals of Artificial Intelligence and Machine Learning and build practical AI/ML applications.",
    duration: "6 Months",
    level: "Beginner to Intermediate",
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Machine Learning",
      "Scikit-learn",
      "Generative AI",
    ],
  },

  {
    id: "sql-development",
    icon: "🗄️",
    title: "SQL & Database",
    description:
      "Learn SQL from fundamentals to advanced database concepts with practical queries and real-world examples.",
    duration: "6  Months",
    level: "Beginner to Intermediate",
    technologies: [
      "SQL",
      "SQL Server",
      "Joins",
      "Stored Procedures",
      "Functions",
      "Database Design",
    ],
  },

  {
    id: "application-support",
    icon: "🛠️",
    title: "Application Support",
    description:
      "Learn application support, troubleshooting, incident management and production support for enterprise applications.",
    duration: "4 Months",
    level: "Beginner to Intermediate",
    technologies: [
      "SQL",
      "Linux",
      "ITIL",
      "Incident Management",
      "JIRA",
      "Production Support",
    ],
  },
  {
    id: "devops",
    icon: "🐳",
    title: "DevOps Fundamentals",
    description:
      "Learn essential development and deployment tools used in modern software projects.",
    duration: "6 Months",
    level: "Beginner to Intermediate",
    technologies: [
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
      "Linux",
      "Cloud Basics",
    ],
  },
];

const Courses = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-28 text-center">

          <p className="text-blue-300 font-semibold mb-4">
            HKS-IT TRAINING PROGRAMS
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Explore Our Courses
          </h1>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Build practical software development skills through
            structured training, hands-on coding and project-based
            learning.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <Link
              to="/book-demo"
              className="bg-blue-500 hover:bg-blue-600 text-white px-7 py-3.5 rounded-lg font-semibold transition"
            >
              Book Free Demo
            </Link>

            <Link
              to="/contact"
              className="border border-white/30 hover:bg-white/10 px-7 py-3.5 rounded-lg font-semibold transition"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>


      {/* ================= COURSES ================= */}
      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-14">

            <p className="text-blue-600 font-semibold">
              CHOOSE YOUR TECHNOLOGY
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Our Training Programs
            </h2>

            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Choose a program based on your career goals and start
              developing practical technology skills.
            </p>

          </div>


          {/* ================= COURSE HORIZONTAL SLIDER ================= */}

          <div className="relative">

            {/* LEFT ARROW */}
            <button
              onClick={() => {
                document
                  .getElementById("course-slider")
                  .scrollBy({
                    left: -380,
                    behavior: "smooth",
                  });
              }}
              className="
      absolute
      left-0
      top-1/2
      -translate-y-1/2
      -translate-x-4
      z-10
      w-12
      h-12
      bg-white
      border
      border-slate-200
      shadow-lg
      rounded-full
      flex
      items-center
      justify-center
      text-2xl
      font-bold
      text-slate-700
      hover:bg-blue-600
      hover:text-white
      transition
    "
              aria-label="Previous courses"
            >
              ←
            </button>


            {/* COURSE LIST */}
            <div
              id="course-slider"
              className="
      flex
      gap-6
      overflow-x-auto
      scroll-smooth
      px-2
      py-4
      [scrollbar-width:none]
      [&::-webkit-scrollbar]:hidden
    "
            >
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="
          flex-none
          w-[85%]
          sm:w-[360px]
          lg:w-[380px]
        "
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>


            {/* RIGHT ARROW */}
            <button
              onClick={() => {
                document
                  .getElementById("course-slider")
                  .scrollBy({
                    left: 380,
                    behavior: "smooth",
                  });
              }}
              className="
      absolute
      right-0
      top-1/2
      -translate-y-1/2
      translate-x-4
      z-10
      w-12
      h-12
      bg-white
      border
      border-slate-200
      shadow-lg
      rounded-full
      flex
      items-center
      justify-center
      text-2xl
      font-bold
      text-slate-700
      hover:bg-blue-600
      hover:text-white
      transition
    "
              aria-label="Next courses"
            >
              →
            </button>

          </div>

        </div>

      </section>


      {/* ================= LEARNING PROCESS ================= */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-14">

            <p className="text-blue-600 font-semibold">
              LEARNING PROCESS
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              How Your Training Works
            </h2>

            <p className="text-slate-600 mt-4">
              A simple learning path from fundamentals to practical projects.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <LearningStep
              number="01"
              icon="📚"
              title="Learn"
              description="Understand programming concepts step-by-step."
            />

            <LearningStep
              number="02"
              icon="💻"
              title="Practice"
              description="Practice concepts through coding exercises."
            />

            <LearningStep
              number="03"
              icon="🚀"
              title="Build"
              description="Develop practical applications and projects."
            />

            <LearningStep
              number="04"
              icon="🎯"
              title="Prepare"
              description="Prepare for technical interviews and opportunities."
            />

          </div>

        </div>

      </section>


      {/* ================= WHAT YOU GET ================= */}
      <section className="py-20 bg-slate-950 text-white">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <p className="text-blue-400 font-semibold">
                HKS-IT TRAINING
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                More Than Just Coding Classes
              </h2>

              <p className="text-slate-400 mt-5 leading-8">
                Our programs focus on developing practical knowledge
                along with the skills required to understand and build
                real software applications.
              </p>

              <Link
                to="/book-demo"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-lg font-semibold mt-8 transition"
              >
                Book Your Free Demo
              </Link>

            </div>


            <div className="grid sm:grid-cols-2 gap-5">

              <Benefit text="Practical Training" />
              <Benefit text="Live Projects" />
              <Benefit text="Coding Practice" />
              <Benefit text="Interview Preparation" />
              <Benefit text="Resume Guidance" />
              <Benefit text="Career Support" />
              <Benefit text="Technical Guidance" />
              <Benefit text="Project Guidance" />

            </div>

          </div>

        </div>

      </section>


      {/* ================= HELP CHOOSING ================= */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-5">

          <div className="border border-slate-200 rounded-3xl p-8 md:p-14 text-center shadow-sm">

            <div className="text-5xl">
              🤔
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mt-5">
              Not Sure Which Course to Choose?
            </h2>

            <p className="text-slate-600 mt-5 max-w-2xl mx-auto leading-7">
              Talk with us about your background, interests and career
              goals to understand which training program may be suitable
              for you.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">

              <Link
                to="/book-demo"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-lg font-semibold transition"
              >
                Book Free Demo
              </Link>

              <Link
                to="/contact"
                className="border border-slate-300 hover:border-blue-500 hover:text-blue-600 px-7 py-3.5 rounded-lg font-semibold transition"
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


/* ================= COURSE CARD ================= */

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl transition duration-300 flex flex-col">

      <div className="flex justify-between items-start">

        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-3xl">
          {course.icon}
        </div>

        <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
          Available
        </span>

      </div>


      <h3 className="text-xl font-bold mt-6 text-slate-900">
        {course.title}
      </h3>

      <p className="text-slate-600 mt-3 leading-7">
        {course.description}
      </p>


      {/* Course Information */}

      <div className="grid grid-cols-2 gap-3 mt-6">

        <div className="bg-slate-50 rounded-lg p-3">

          <p className="text-xs text-slate-500">
            Duration
          </p>

          <p className="font-semibold text-sm mt-1">
            {course.duration}
          </p>

        </div>


        <div className="bg-slate-50 rounded-lg p-3">

          <p className="text-xs text-slate-500">
            Level
          </p>

          <p className="font-semibold text-sm mt-1">
            {course.level}
          </p>

        </div>

      </div>


      {/* Technologies */}

      <div className="mt-6">

        <p className="text-sm font-semibold text-slate-800 mb-3">
          Technologies
        </p>

        <div className="flex flex-wrap gap-2">

          {course.technologies.slice(0, 5).map((technology) => (
            <span
              key={technology}
              className="bg-blue-50 text-blue-700 text-xs px-3 py-1.5 rounded-full"
            >
              {technology}
            </span>
          ))}

          {course.technologies.length > 5 && (
            <span className="bg-slate-100 text-slate-600 text-xs px-3 py-1.5 rounded-full">
              +{course.technologies.length - 5}
            </span>
          )}

        </div>

      </div>


      {/* Buttons */}

      <div className="flex gap-3 mt-auto pt-8">

        <Link
          to={`/courses/${course.id}`}
          className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition"
        >
          View Details
        </Link>

        <Link
          to="/book-demo"
          className="flex-1 text-center border border-slate-300 hover:border-blue-500 hover:text-blue-600 px-4 py-3 rounded-lg font-semibold transition"
        >
          Free Demo
        </Link>

      </div>

    </div>
  );
};

/* ================= LEARNING STEP ================= */

const LearningStep = ({
  number,
  icon,
  title,
  description,
}) => {
  return (
    <div className="relative border border-slate-200 rounded-2xl p-7 hover:shadow-lg transition">

      <span className="absolute top-5 right-5 text-slate-200 text-3xl font-bold">
        {number}
      </span>

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


/* ================= BENEFIT ================= */

const Benefit = ({ text }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center gap-3">

      <div className="w-8 h-8 flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center font-bold">
        ✓
      </div>

      <span className="font-medium">
        {text}
      </span>

    </div>
  );
};

export default Courses;