import { Link } from "react-router-dom";

const CareerSupport = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-28 text-center">

          <p className="text-blue-300 font-semibold mb-4">
            HKS-IT CAREER SUPPORT
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Learn Skills.
            <span className="text-blue-400"> Prepare Better.</span>
            <br />
            Build Your Career.
          </h1>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Our career support is designed to help learners strengthen
            their resumes, prepare for technical interviews, practice
            important concepts and confidently approach job opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <Link
              to="/book-demo"
              className="bg-blue-500 hover:bg-blue-600 px-7 py-3.5 rounded-lg font-semibold transition"
            >
              Book Free Demo
            </Link>

            <Link
              to="/courses"
              className="border border-white/30 hover:bg-white/10 px-7 py-3.5 rounded-lg font-semibold transition"
            >
              Explore Courses
            </Link>

          </div>
        </div>
      </section>


      {/* ================= CAREER SERVICES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-14">

            <p className="text-blue-600 font-semibold">
              CAREER SERVICES
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Supporting Your Career Preparation
            </h2>

            <p className="text-slate-600 mt-4 max-w-3xl mx-auto leading-7">
              Technical knowledge is important, but preparing for
              interviews and presenting your skills effectively is also
              an important part of your career journey.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

            <SupportCard
              icon="📄"
              title="Resume Preparation"
              description="Learn how to create a professional resume that clearly presents your technical skills, projects and experience."
            />

            <SupportCard
              icon="🎤"
              title="Mock Interviews"
              description="Practice technical and interview questions to improve your confidence and communication."
            />

            <SupportCard
              icon="💻"
              title="Technical Preparation"
              description="Review important programming, database, API and framework concepts commonly discussed in interviews."
            />

            <SupportCard
              icon="🚀"
              title="Project Guidance"
              description="Get guidance for building and explaining practical projects that demonstrate your development skills."
            />

            <SupportCard
              icon="👤"
              title="Profile Guidance"
              description="Understand how to present your skills, projects and professional experience on job profiles."
            />

            <SupportCard
              icon="🎯"
              title="Career Guidance"
              description="Understand different technology roles and create a learning path based on your career goals."
            />

          </div>
        </div>
      </section>


      {/* ================= CAREER JOURNEY ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-14">

            <p className="text-blue-600 font-semibold">
              YOUR JOURNEY
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              From Learning to Interview Preparation
            </h2>

            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Our approach helps you progress through each stage of
              technical and career preparation.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <JourneyCard
              number="01"
              icon="📚"
              title="Learn"
              description="Build strong fundamentals and understand important technology concepts."
            />

            <JourneyCard
              number="02"
              icon="🛠️"
              title="Build"
              description="Apply your knowledge through practical applications and projects."
            />

            <JourneyCard
              number="03"
              icon="🎤"
              title="Prepare"
              description="Practice interview questions and strengthen your technical knowledge."
            />

            <JourneyCard
              number="04"
              icon="💼"
              title="Apply"
              description="Prepare your professional profile and start exploring suitable opportunities."
            />

          </div>
        </div>
      </section>


      {/* ================= RESUME SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <p className="text-blue-600 font-semibold">
                RESUME PREPARATION
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Present Your Skills Professionally
              </h2>

              <p className="text-slate-600 mt-5 leading-8">
                A well-structured resume helps recruiters quickly
                understand your technical knowledge, project experience
                and professional background.
              </p>

              <div className="space-y-4 mt-8">

                <CheckItem text="Professional resume structure" />
                <CheckItem text="Technical skills presentation" />
                <CheckItem text="Project description guidance" />
                <CheckItem text="Experience description guidance" />
                <CheckItem text="Resume keyword guidance" />
                <CheckItem text="Profile improvement suggestions" />

              </div>

            </div>


            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10">

              <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">

                <div className="flex items-center gap-4 border-b border-slate-200 pb-5">

                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    👤
                  </div>

                  <div>
                    <div className="h-3 bg-slate-800 rounded w-36"></div>
                    <div className="h-2 bg-slate-300 rounded w-24 mt-3"></div>
                  </div>

                </div>


                <div className="mt-6">

                  <p className="text-xs font-bold text-blue-600">
                    TECHNICAL SKILLS
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">

                    <ResumeSkill text="JavaScript" />
                    <ResumeSkill text="React" />
                    <ResumeSkill text="Node.js" />
                    <ResumeSkill text="MongoDB" />

                  </div>

                </div>


                <div className="mt-7">

                  <p className="text-xs font-bold text-blue-600">
                    PROJECTS
                  </p>

                  <div className="space-y-3 mt-4">

                    <div className="h-2 bg-slate-200 rounded w-full"></div>
                    <div className="h-2 bg-slate-200 rounded w-11/12"></div>
                    <div className="h-2 bg-slate-200 rounded w-3/4"></div>

                  </div>

                </div>


                <div className="mt-7">

                  <p className="text-xs font-bold text-blue-600">
                    EXPERIENCE
                  </p>

                  <div className="space-y-3 mt-4">

                    <div className="h-2 bg-slate-200 rounded w-full"></div>
                    <div className="h-2 bg-slate-200 rounded w-10/12"></div>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= INTERVIEW PREPARATION ================= */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <p className="text-blue-400 font-semibold">
                INTERVIEW PREPARATION
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Prepare for Technical Interviews
              </h2>

              <p className="text-slate-400 mt-5 leading-8">
                Interview preparation focuses on strengthening your
                understanding of important technical concepts and
                improving your ability to explain solutions clearly.
              </p>

              <Link
                to="/book-demo"
                className="inline-block mt-8 bg-blue-600 hover:bg-blue-500 px-7 py-3.5 rounded-lg font-semibold transition"
              >
                Start Your Learning
              </Link>

            </div>


            <div className="grid sm:grid-cols-2 gap-5">

              <InterviewCard
                number="01"
                title="Core Concepts"
                description="Review important programming and framework concepts."
              />

              <InterviewCard
                number="02"
                title="Coding Questions"
                description="Practice coding and logical problem-solving questions."
              />

              <InterviewCard
                number="03"
                title="Project Questions"
                description="Learn how to explain your projects and technical decisions."
              />

              <InterviewCard
                number="04"
                title="Mock Interview"
                description="Practice answering technical questions in an interview-style environment."
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
              PREPARATION AREAS
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Skills We Help You Strengthen
            </h2>

          </div>


          <div className="flex flex-wrap justify-center gap-4">

            {[
              "Programming Fundamentals",
              "Object-Oriented Programming",
              "Database & SQL",
              "REST APIs",
              "Frontend Development",
              "Backend Development",
              "Git & GitHub",
              "Debugging",
              "Project Explanation",
              "Problem Solving",
              "Technical Communication",
              "Interview Questions",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-slate-50 border border-slate-200 hover:border-blue-500 hover:text-blue-600 px-5 py-3 rounded-xl font-medium text-slate-700 transition"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>
      </section>


      {/* ================= IMPORTANT NOTE ================= */}
      <section className="pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-7 md:p-8">

            <div className="flex gap-4">

              <div className="text-2xl">
                💡
              </div>

              <div>

                <h3 className="font-bold text-lg text-slate-900">
                  Career Support at HKS-IT
                </h3>

                <p className="text-slate-600 mt-2 leading-7">
                  Our career support focuses on training, preparation,
                  guidance and skill development. Job opportunities
                  depend on individual skills, experience, interview
                  performance and employer requirements.
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
              START YOUR JOURNEY
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Build Skills for Your IT Career
            </h2>

            <p className="text-blue-100 mt-5 max-w-2xl mx-auto leading-7">
              Start learning practical technologies and strengthen
              your technical and interview preparation with HKS-IT.
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
                View Courses
              </Link>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};


/* ================= SUPPORT CARD ================= */

const SupportCard = ({ icon, title, description }) => {
  return (
    <div className="border border-slate-200 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl transition duration-300">

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


/* ================= JOURNEY CARD ================= */

const JourneyCard = ({
  number,
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-7 relative hover:shadow-lg transition">

      <span className="absolute right-5 top-5 text-slate-200 text-3xl font-bold">
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


/* ================= CHECK ITEM ================= */

const CheckItem = ({ text }) => {
  return (
    <div className="flex items-center gap-3">

      <div className="w-7 h-7 flex-shrink-0 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
        ✓
      </div>

      <span className="text-slate-700 font-medium">
        {text}
      </span>

    </div>
  );
};


/* ================= RESUME SKILL ================= */

const ResumeSkill = ({ text }) => {
  return (
    <span className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full">
      {text}
    </span>
  );
};


/* ================= INTERVIEW CARD ================= */

const InterviewCard = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">

      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold">
        {number}
      </div>

      <h3 className="text-lg font-bold mt-5">
        {title}
      </h3>

      <p className="text-slate-400 mt-2 leading-7">
        {description}
      </p>

    </div>
  );
};

export default CareerSupport;