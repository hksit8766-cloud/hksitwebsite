import { Link, useParams } from "react-router-dom";

const courseDetails = {
  "mern-stack": {
    icon: "⚛️",
    title: "MERN Stack Development",
    description:
      "Become a full-stack developer by learning MongoDB, Express.js, React.js and Node.js with practical projects.",
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
      "REST API",
      "Git",
    ],
    topics: [
      "HTML, CSS & JavaScript Fundamentals",
      "React Components & Hooks",
      "React Router",
      "Node.js & Express.js",
      "MongoDB Database",
      "REST API Development",
      "Authentication & Authorization",
      "Full Stack Project",
      "Git & GitHub",
      "Deployment",
    ],
  },

  "dotnet-full-stack": {
    icon: "💻",
    title: ".NET Full Stack Development",
    description:
      "Learn to build modern enterprise applications using C#, ASP.NET Core, Web API, SQL Server and frontend technologies.",
    duration: "6 Months",
    level: "Beginner to Advanced",
    technologies: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Web API",
      "SQL Server",
      "Entity Framework Core",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
    ],
    topics: [
      "C# Programming Fundamentals",
      "Object-Oriented Programming",
      "ASP.NET Core",
      "ASP.NET Core Web API",
      "REST API Development",
      "Entity Framework Core",
      "SQL Server",
      "Authentication & Authorization",
      "Frontend Development",
      "Git & GitHub",
      "Real-Time Project",
      "Deployment",
    ],
  },

  "java-full-stack": {
    icon: "☕",
    title: "Java Full Stack Development",
    description:
      "Learn Java application development with Spring Boot, REST APIs, databases and modern frontend technologies.",
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
    topics: [
      "Core Java",
      "Object-Oriented Programming",
      "Collections",
      "Spring Framework",
      "Spring Boot",
      "REST API Development",
      "MySQL",
      "Frontend Development",
      "Git & GitHub",
      "Real-Time Project",
    ],
  },

  "automation-testing": {
    icon: "🤖",
    title: "Automation Testing",
    description:
      "Learn automation testing using Selenium, Java and modern testing frameworks with hands-on practical training.",
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
    topics: [
      "Testing Fundamentals",
      "Core Java for Testing",
      "Selenium WebDriver",
      "Locators & Web Elements",
      "TestNG",
      "Maven",
      "Page Object Model",
      "API Testing with Postman",
      "Automation Framework",
      "Real-Time Testing Project",
    ],
  },

  "manual-testing": {
    icon: "🧪",
    title: "Manual Testing",
    description:
      "Learn complete software testing processes including test cases, defect management and Agile testing.",
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
    topics: [
      "Software Testing Fundamentals",
      "SDLC",
      "STLC",
      "Test Case Writing",
      "Test Scenarios",
      "Defect Life Cycle",
      "Functional Testing",
      "Regression Testing",
      "JIRA",
      "Agile Methodology",
    ],
  },

  "ai-ml": {
    icon: "🧠",
    title: "AI & Machine Learning",
    description:
      "Learn Artificial Intelligence and Machine Learning fundamentals and build practical ML applications.",
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
    topics: [
      "Python Fundamentals",
      "NumPy",
      "Pandas",
      "Data Analysis",
      "Data Visualization",
      "Machine Learning Fundamentals",
      "Supervised Learning",
      "Unsupervised Learning",
      "Scikit-learn",
      "Generative AI Basics",
      "AI/ML Project",
    ],
  },

  "sql-development": {
    icon: "🗄️",
    title: "SQL & Database",
    description:
      "Master SQL and database concepts from basic queries to advanced database programming.",
    duration: "6 Months",
    level: "Beginner to Intermediate",
    technologies: [
      "SQL",
      "SQL Server",
      "Joins",
      "Stored Procedures",
      "Functions",
      "Database Design",
    ],
    topics: [
      "Database Fundamentals",
      "SQL Queries",
      "DDL, DML & DQL",
      "Joins",
      "Subqueries",
      "Views",
      "Stored Procedures",
      "Functions",
      "Indexes",
      "Database Design",
      "Query Optimization",
    ],
  },

  "application-support": {
    icon: "🛠️",
    title: "Application Support",
    description:
      "Learn application troubleshooting, incident management and production support used in enterprise environments.",
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
    topics: [
      "Application Support Fundamentals",
      "SQL for Support",
      "Linux Commands",
      "Log Analysis",
      "Incident Management",
      "Problem Management",
      "JIRA",
      "ITIL Fundamentals",
      "Production Issue Troubleshooting",
      "Ticket Management",
    ],
  },

  devops: {
    icon: "🐳",
    title: "DevOps Fundamentals",
    description:
      "Learn essential DevOps tools and modern software deployment practices.",
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
    topics: [
      "DevOps Fundamentals",
      "Git & GitHub",
      "Linux",
      "Docker",
      "CI/CD Pipeline",
      "Cloud Fundamentals",
      "Application Deployment",
      "DevOps Project",
    ],
  },
};

const CourseDetails = () => {
  const { id } = useParams();

  const course = courseDetails[id];

  if (!course) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-slate-900">
          Course Not Found
        </h1>

        <Link
          to="/courses"
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* ================= HERO ================= */}

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">

          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-8"
          >
            ← Back to Courses
          </Link>

          <div className="max-w-4xl">

            <div className="text-6xl mb-6">
              {course.icon}
            </div>

            <p className="text-blue-300 font-semibold">
              HKS-IT TRAINING PROGRAM
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              {course.title}
            </h1>

            <p className="text-slate-300 text-lg mt-6 leading-8">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3">
                <p className="text-xs text-slate-300">Duration</p>
                <p className="font-bold mt-1">{course.duration}</p>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3">
                <p className="text-xs text-slate-300">Level</p>
                <p className="font-bold mt-1">{course.level}</p>
              </div>

            </div>

            <Link
              to="/book-demo"
              className="inline-block mt-8 bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-bold transition"
            >
              Book Free Demo
            </Link>

          </div>
        </div>
      </section>


      {/* ================= COURSE CONTENT ================= */}

      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="grid lg:grid-cols-3 gap-10">

            {/* WHAT YOU WILL LEARN */}

            <div className="lg:col-span-2">

              <p className="text-blue-600 font-semibold">
                COURSE CURRICULUM
              </p>

              <h2 className="text-3xl font-bold mt-2">
                What You Will Learn
              </h2>

              <p className="text-slate-600 mt-4">
                Learn step-by-step through practical training,
                exercises and real-world projects.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">

                {course.topics.map((topic, index) => (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 rounded-xl p-5 flex gap-3 items-center hover:shadow-md transition"
                  >
                    <div className="w-8 h-8 flex-shrink-0 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                      ✓
                    </div>

                    <span className="font-medium text-slate-800">
                      {topic}
                    </span>

                  </div>
                ))}

              </div>

            </div>


            {/* COURSE INFORMATION */}

            <div>

              <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm sticky top-28">

                <h3 className="text-xl font-bold">
                  Course Information
                </h3>

                <div className="mt-6 border-b pb-4">
                  <p className="text-sm text-slate-500">
                    Duration
                  </p>

                  <p className="font-semibold mt-1">
                    {course.duration}
                  </p>
                </div>

                <div className="py-4 border-b">
                  <p className="text-sm text-slate-500">
                    Level
                  </p>

                  <p className="font-semibold mt-1">
                    {course.level}
                  </p>
                </div>

                <div className="py-4">

                  <p className="text-sm text-slate-500 mb-3">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {course.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-2 rounded-full"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                </div>

                <Link
                  to="/book-demo"
                  className="block text-center w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-lg font-semibold mt-6 transition"
                >
                  Book Free Demo
                </Link>

                <Link
                  to="/contact"
                  className="block text-center w-full border border-slate-300 hover:border-blue-500 hover:text-blue-600 py-3.5 rounded-lg font-semibold mt-3 transition"
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="py-16 bg-white">

        <div className="max-w-5xl mx-auto px-5">

          <div className="bg-slate-950 text-white rounded-3xl p-10 md:p-14 text-center">

            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Learning?
            </h2>

            <p className="text-slate-400 mt-4">
              Book a free demo session and learn more about the
              {` ${course.title}`} program.
            </p>

            <Link
              to="/book-demo"
              className="inline-block bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-lg font-semibold mt-7 transition"
            >
              Book Your Free Demo
            </Link>

          </div>

        </div>

      </section>
    </>
  );
};

export default CourseDetails;