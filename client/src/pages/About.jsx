import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-28 text-center">

          <p className="text-blue-300 font-semibold mb-4">
            ABOUT HKS-IT
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Learn. Build. Grow.
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto leading-8">
            HKS-IT is an IT training institute focused on practical
            technology education, real-world development skills and
            career-focused learning.
          </p>

        </div>
      </section>


      {/* ================= WHO WE ARE ================= */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>

            <p className="text-blue-600 font-semibold">
              WHO WE ARE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-slate-900">
              Building Practical Skills for the IT Industry
            </h2>

            <p className="text-slate-600 mt-6 leading-8">
              HKS-IT provides technology training designed to help
              students, freshers and working professionals strengthen
              their software development skills.
            </p>

            <p className="text-slate-600 mt-4 leading-8">
              Our approach focuses on understanding concepts,
              implementing them through practical examples and applying
              those skills to real-world projects.
            </p>

            <p className="text-slate-600 mt-4 leading-8">
              We aim to create a learning environment where students
              can develop technical knowledge, problem-solving skills
              and confidence for their IT careers.
            </p>

            <Link
              to="/courses"
              className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-lg font-semibold transition"
            >
              Explore Our Courses →
            </Link>

          </div>


          {/* RIGHT */}
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12">

            <div className="text-center">

              <div className="w-24 h-24 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center text-5xl">
                💻
              </div>

              <h3 className="text-2xl font-bold mt-7 text-slate-900">
                HKS-IT
              </h3>

              <p className="text-blue-600 font-semibold mt-2">
                Technology Training Institute
              </p>

              <p className="text-slate-600 mt-5 leading-7">
                Helping learners understand modern software
                technologies through structured and practical training.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-14">

            <p className="text-blue-600 font-semibold">
              OUR PURPOSE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Mission & Vision
            </h2>

          </div>


          <div className="grid md:grid-cols-2 gap-8">

            {/* Mission */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 hover:shadow-xl transition duration-300">

              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-3xl">
                🎯
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Our Mission
              </h3>

              <p className="text-slate-600 mt-4 leading-8">
                Our mission is to provide practical and accessible
                technology training that helps learners understand
                modern development tools, programming concepts and
                real-world software development practices.
              </p>

            </div>


            {/* Vision */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 hover:shadow-xl transition duration-300">

              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-3xl">
                🚀
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Our Vision
              </h3>

              <p className="text-slate-600 mt-4 leading-8">
                Our vision is to create a learning environment where
                students can develop strong technical foundations,
                practical experience and the confidence needed to
                grow in the software industry.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW WE TEACH ================= */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-14">

            <p className="text-blue-600 font-semibold">
              OUR APPROACH
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              How We Teach
            </h2>

            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Our training approach combines concepts, practical
              implementation and project-based learning.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <ApproachCard
              number="01"
              title="Learn Concepts"
              description="Understand programming fundamentals and important technical concepts."
            />

            <ApproachCard
              number="02"
              title="Practice"
              description="Implement concepts through coding exercises and practical examples."
            />

            <ApproachCard
              number="03"
              title="Build Projects"
              description="Apply your knowledge by developing real-world applications."
            />

            <ApproachCard
              number="04"
              title="Career Preparation"
              description="Prepare for technical interviews, resumes and career opportunities."
            />

          </div>

        </div>

      </section>


      {/* ================= WHY HKS-IT ================= */}
      <section className="py-20 bg-slate-950 text-white">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-14">

            <p className="text-blue-400 font-semibold">
              WHY CHOOSE US
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Why Learn With HKS-IT?
            </h2>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <WhyCard
              icon="💻"
              title="Practical Learning"
              description="Focus on implementation instead of only theoretical concepts."
            />

            <WhyCard
              icon="🛠️"
              title="Modern Technologies"
              description="Learn technologies and development practices used in modern applications."
            />

            <WhyCard
              icon="🚀"
              title="Project-Based Training"
              description="Strengthen your knowledge by building practical projects."
            />

            <WhyCard
              icon="🎯"
              title="Career Focus"
              description="Training designed with technical interviews and career development in mind."
            />

            <WhyCard
              icon="📚"
              title="Structured Learning"
              description="Learn step-by-step from fundamentals to advanced concepts."
            />

            <WhyCard
              icon="🤝"
              title="Guidance & Support"
              description="Get guidance throughout your learning and development journey."
            />

          </div>

        </div>

      </section>


      {/* ================= TECHNOLOGIES ================= */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-12">

            <p className="text-blue-600 font-semibold">
              TECHNOLOGIES
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Technologies You Can Learn
            </h2>

          </div>


          <div className="flex flex-wrap justify-center gap-4">

            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
              "C#",
              ".NET",
              "SQL",
              "Java",
              "Spring Boot",
              "Git",
              "Docker",
            ].map((technology) => (
              <span
                key={technology}
                className="bg-slate-50 border border-slate-200 px-6 py-3 rounded-xl font-semibold text-slate-700 hover:border-blue-500 hover:text-blue-600 transition"
              >
                {technology}
              </span>
            ))}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="py-20 bg-slate-50">

        <div className="max-w-6xl mx-auto px-5">

          <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-3xl px-8 md:px-14 py-14 text-center shadow-xl">

            <p className="text-blue-100 font-semibold">
              START LEARNING
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Take the Next Step in Your IT Career
            </h2>

            <p className="text-blue-100 mt-5 max-w-2xl mx-auto leading-7">
              Explore our technology courses or book a free demo
              session to learn more about HKS-IT training.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">

              <Link
                to="/courses"
                className="bg-white text-blue-700 hover:bg-slate-100 px-7 py-3.5 rounded-lg font-semibold transition"
              >
                Explore Courses
              </Link>

              <Link
                to="/book-demo"
                className="border border-white/40 hover:bg-white/10 px-7 py-3.5 rounded-lg font-semibold transition"
              >
                Book Free Demo
              </Link>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};


/* ================= APPROACH CARD ================= */

const ApproachCard = ({ number, title, description }) => {
  return (
    <div className="border border-slate-200 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition duration-300">

      <span className="text-blue-600 text-sm font-bold">
        {number}
      </span>

      <h3 className="text-xl font-bold mt-4">
        {title}
      </h3>

      <p className="text-slate-600 mt-3 leading-7">
        {description}
      </p>

    </div>
  );
};


/* ================= WHY CARD ================= */

const WhyCard = ({ icon, title, description }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-blue-500 transition duration-300">

      <div className="text-3xl">
        {icon}
      </div>

      <h3 className="text-xl font-bold mt-5">
        {title}
      </h3>

      <p className="text-slate-400 mt-3 leading-7">
        {description}
      </p>

    </div>
  );
};

export default About;