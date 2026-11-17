import { Link } from "react-router-dom";

const trainers = [
  {
    id: 1,
    name: "Trainer Name",
    role: "MERN Stack Trainer",
    experience: "5+ Years Experience",
    initials: "MT",
    description:
      "Experienced in building modern full-stack web applications and guiding students through practical development.",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "REST API",
    ],
  },
  {
    id: 2,
    name: "Trainer Name",
    role: ".NET Full Stack Trainer",
    experience: "6+ Years Experience",
    initials: "DN",
    description:
      "Focused on enterprise application development using the Microsoft technology stack and modern development practices.",
    skills: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Web API",
      "SQL Server",
      "Azure",
    ],
  },
  {
    id: 3,
    name: "Trainer Name",
    role: "Java Full Stack Trainer",
    experience: "5+ Years Experience",
    initials: "JT",
    description:
      "Experienced in Java application development with practical knowledge of backend, database and frontend technologies.",
    skills: [
      "Java",
      "Spring Boot",
      "REST API",
      "MySQL",
      "JavaScript",
      "React",
    ],
  },
];

const Trainers = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-28 text-center">

          <p className="text-blue-300 font-semibold mb-4">
            MEET OUR TRAINERS
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Learn From Experienced
            <span className="text-blue-400"> Professionals</span>
          </h1>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Our training focuses on practical development, real-world
            concepts and guidance that helps learners strengthen their
            technical skills.
          </p>

          <Link
            to="/book-demo"
            className="inline-block mt-8 bg-blue-500 hover:bg-blue-600 px-7 py-3.5 rounded-lg font-semibold transition"
          >
            Book Free Demo
          </Link>

        </div>
      </section>

      {/* ================= TRAINERS ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-14">

            <p className="text-blue-600 font-semibold">
              OUR TEAM
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Technology Trainers
            </h2>

            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Learn technologies through structured explanations,
              practical examples and project-based training.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {trainers.map((trainer) => (
              <TrainerCard
                key={trainer.id}
                trainer={trainer}
              />
            ))}

          </div>

        </div>
      </section>

      {/* ================= TRAINING APPROACH ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-14">

            <p className="text-blue-600 font-semibold">
              TRAINING APPROACH
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              How Our Trainers Help You Learn
            </h2>

            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Our approach focuses on understanding concepts and
              applying them through practical development.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <TrainingCard
              icon="📚"
              title="Concept Clarity"
              description="Understand technical concepts step-by-step before moving to implementation."
            />

            <TrainingCard
              icon="💻"
              title="Hands-On Coding"
              description="Practice what you learn through coding exercises and examples."
            />

            <TrainingCard
              icon="🚀"
              title="Project Guidance"
              description="Apply concepts while developing practical software projects."
            />

            <TrainingCard
              icon="🎯"
              title="Career Preparation"
              description="Get guidance for technical interviews, projects and career preparation."
            />

          </div>

        </div>
      </section>

      {/* ================= LEARNING JOURNEY ================= */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <p className="text-blue-400 font-semibold">
                YOUR LEARNING JOURNEY
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                From Fundamentals to Real Projects
              </h2>

              <p className="text-slate-400 mt-5 leading-8">
                Our goal is to help learners move beyond theoretical
                knowledge and understand how software applications are
                designed and developed in practical environments.
              </p>

              <Link
                to="/courses"
                className="inline-block mt-8 bg-blue-600 hover:bg-blue-500 px-7 py-3.5 rounded-lg font-semibold transition"
              >
                Explore Courses
              </Link>

            </div>

            <div className="space-y-4">

              <JourneyStep
                number="01"
                title="Understand"
                description="Learn the fundamentals and core concepts."
              />

              <JourneyStep
                number="02"
                title="Practice"
                description="Implement concepts through practical coding."
              />

              <JourneyStep
                number="03"
                title="Build"
                description="Develop applications and real-world projects."
              />

              <JourneyStep
                number="04"
                title="Prepare"
                description="Strengthen technical and interview preparation."
              />

            </div>

          </div>

        </div>
      </section>

      {/* ================= WHAT TO EXPECT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-14">

            <p className="text-blue-600 font-semibold">
              WHAT TO EXPECT
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              A Practical Learning Experience
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <BenefitCard
              title="Structured Learning"
              description="Topics are organized from fundamentals to advanced concepts."
            />

            <BenefitCard
              title="Practical Examples"
              description="Concepts are explained with examples that demonstrate real implementation."
            />

            <BenefitCard
              title="Coding Practice"
              description="Regular coding helps strengthen development and problem-solving skills."
            />

            <BenefitCard
              title="Project Development"
              description="Build applications that combine multiple concepts and technologies."
            />

            <BenefitCard
              title="Technical Guidance"
              description="Get guidance when understanding difficult concepts and development problems."
            />

            <BenefitCard
              title="Interview Preparation"
              description="Review important concepts commonly discussed during technical interviews."
            />

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5">

          <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-3xl px-8 md:px-14 py-14 text-center shadow-xl">

            <p className="text-blue-100 font-semibold">
              MEET YOUR TRAINER
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Experience HKS-IT Training
            </h2>

            <p className="text-blue-100 mt-5 max-w-2xl mx-auto leading-7">
              Book a free demo session to understand our teaching
              approach and explore the right technology course for you.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">

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


/* ================= TRAINER CARD ================= */

const TrainerCard = ({ trainer }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition duration-300">

      {/* Trainer Image Placeholder */}
      <div className="h-60 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-600 flex items-center justify-center">

        <div className="w-28 h-28 rounded-full bg-white/10 border-4 border-white/20 flex items-center justify-center">

          <span className="text-white text-4xl font-bold">
            {trainer.initials}
          </span>

        </div>

      </div>

      <div className="p-7">

        <p className="text-blue-600 font-semibold text-sm">
          {trainer.role}
        </p>

        <h3 className="text-2xl font-bold mt-2 text-slate-900">
          {trainer.name}
        </h3>

        <p className="text-sm font-medium text-slate-500 mt-2">
          {trainer.experience}
        </p>

        <p className="text-slate-600 mt-4 leading-7">
          {trainer.description}
        </p>

        <div className="mt-6">

          <p className="font-semibold text-sm mb-3">
            Technologies
          </p>

          <div className="flex flex-wrap gap-2">

            {trainer.skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
};


/* ================= TRAINING CARD ================= */

const TrainingCard = ({ icon, title, description }) => {
  return (
    <div className="border border-slate-200 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-lg transition duration-300">

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


/* ================= JOURNEY STEP ================= */

const JourneyStep = ({ number, title, description }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center gap-5">

      <div className="w-12 h-12 flex-shrink-0 bg-blue-600 rounded-xl flex items-center justify-center font-bold">
        {number}
      </div>

      <div>

        <h3 className="font-bold text-lg">
          {title}
        </h3>

        <p className="text-slate-400 mt-1">
          {description}
        </p>

      </div>

    </div>
  );
};


/* ================= BENEFIT CARD ================= */

const BenefitCard = ({ title, description }) => {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:border-blue-300 transition">

      <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
        ✓
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

export default Trainers;