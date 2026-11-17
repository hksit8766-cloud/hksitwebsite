import { useState } from "react";
import { Link } from "react-router-dom";

const courses = [
  "MERN Stack Development",
  ".NET Full Stack Development",
  "Java Full Stack Development",
  "React Development",
  "Node.js Backend Development",
  "DevOps Fundamentals",
  "Not Sure - Need Guidance",
];

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    preferredDate: "",
    preferredTime: "",
    learningMode: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Today's date - prevents selecting past dates
  const today = new Date().toISOString().split("T")[0];

  // ================= HANDLE CHANGE =================
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: "",
      }));
    }

    setSubmitted(false);
  };

  // ================= VALIDATION =================
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your mobile number.";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.course) {
      newErrors.course = "Please select a course.";
    }

    if (!formData.experience) {
      newErrors.experience = "Please select your experience level.";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please select a preferred demo date.";
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = "Please select a preferred time.";
    }

    if (!formData.learningMode) {
      newErrors.learningMode = "Please select a learning mode.";
    }

    return newErrors;
  };

  // ================= SUBMIT =================
  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Temporary frontend-only submission
    console.log("Demo Booking Data:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      experience: "",
      preferredDate: "",
      preferredTime: "",
      learningMode: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-28 text-center">

          <p className="text-blue-300 font-semibold mb-4">
            FREE DEMO SESSION
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Experience HKS-IT
            <span className="text-blue-400"> Before You Start</span>
          </h1>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Book a free demo session to understand our training
            approach, explore the course structure and discuss your
            learning goals with our team.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <span className="bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm">
              ✓ Free Demo
            </span>

            <span className="bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm">
              ✓ Course Guidance
            </span>

            <span className="bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm">
              ✓ No Obligation
            </span>

          </div>

        </div>
      </section>


      {/* ================= BOOKING SECTION ================= */}
      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="grid lg:grid-cols-5 gap-10">

            {/* ================= LEFT SIDE ================= */}
            <div className="lg:col-span-2">

              <p className="text-blue-600 font-semibold">
                BOOK YOUR DEMO
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Start Your Learning Journey
              </h2>

              <p className="text-slate-600 mt-5 leading-8">
                Fill in the form and select the technology you're
                interested in. Our team can help you understand the
                course and learning path.
              </p>


              {/* Benefits */}

              <div className="space-y-5 mt-10">

                <DemoBenefit
                  icon="🎯"
                  title="Course Guidance"
                  description="Understand which technology matches your learning goals."
                />

                <DemoBenefit
                  icon="💻"
                  title="Training Overview"
                  description="See how concepts, practical sessions and projects are covered."
                />

                <DemoBenefit
                  icon="👨‍🏫"
                  title="Meet the Trainer"
                  description="Understand the teaching approach during the demo session."
                />

                <DemoBenefit
                  icon="🛠️"
                  title="Practical Learning"
                  description="Learn how hands-on coding and projects are included."
                />

              </div>


              {/* Help Box */}

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mt-10">

                <h3 className="font-bold text-lg">
                  Not Sure Which Course?
                </h3>

                <p className="text-slate-600 mt-2 leading-7">
                  Select "Not Sure - Need Guidance" and discuss your
                  interests and career goals with our team.
                </p>

                <Link
                  to="/courses"
                  className="inline-block text-blue-600 font-semibold mt-4 hover:text-blue-800"
                >
                  Explore All Courses →
                </Link>

              </div>

            </div>


            {/* ================= FORM ================= */}
            <div className="lg:col-span-3">

              <div className="bg-white border border-slate-200 rounded-3xl p-7 md:p-10 shadow-sm">

                <div className="mb-8">

                  <h3 className="text-2xl font-bold">
                    Book Free Demo
                  </h3>

                  <p className="text-slate-600 mt-2">
                    Enter your details and preferred demo schedule.
                  </p>

                </div>


                {/* ================= SUCCESS ================= */}

                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-5 mb-7">

                    <p className="font-bold">
                      ✓ Demo request submitted successfully!
                    </p>

                    <p className="text-sm mt-1">
                      Thank you for your interest in HKS-IT. Your demo
                      request has been received.
                    </p>

                  </div>
                )}


                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  {/* ================= NAME ================= */}

                  <FormField
                    label="Full Name"
                    required
                    error={errors.name}
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={inputClass(errors.name)}
                    />
                  </FormField>


                  {/* ================= EMAIL / PHONE ================= */}

                  <div className="grid md:grid-cols-2 gap-5">

                    <FormField
                      label="Email Address"
                      required
                      error={errors.email}
                    >
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClass(errors.email)}
                      />
                    </FormField>


                    <FormField
                      label="Mobile Number"
                      required
                      error={errors.phone}
                    >
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        maxLength="10"
                        className={inputClass(errors.phone)}
                      />
                    </FormField>

                  </div>


                  {/* ================= COURSE ================= */}

                  <FormField
                    label="Course Interested In"
                    required
                    error={errors.course}
                  >
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className={inputClass(errors.course)}
                    >

                      <option value="">
                        Select a course
                      </option>

                      {courses.map((course) => (
                        <option
                          key={course}
                          value={course}
                        >
                          {course}
                        </option>
                      ))}

                    </select>
                  </FormField>


                  {/* ================= EXPERIENCE ================= */}

                  <FormField
                    label="Your Current Level"
                    required
                    error={errors.experience}
                  >
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className={inputClass(errors.experience)}
                    >

                      <option value="">
                        Select your current level
                      </option>

                      <option value="student">
                        Student
                      </option>

                      <option value="fresher">
                        Fresher
                      </option>

                      <option value="0-1">
                        0 - 1 Year Experience
                      </option>

                      <option value="1-3">
                        1 - 3 Years Experience
                      </option>

                      <option value="3-5">
                        3 - 5 Years Experience
                      </option>

                      <option value="5+">
                        5+ Years Experience
                      </option>

                      <option value="career-switch">
                        Looking for Career Switch
                      </option>

                    </select>
                  </FormField>


                  {/* ================= DATE / TIME ================= */}

                  <div className="grid md:grid-cols-2 gap-5">

                    <FormField
                      label="Preferred Demo Date"
                      required
                      error={errors.preferredDate}
                    >
                      <input
                        type="date"
                        name="preferredDate"
                        min={today}
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className={inputClass(errors.preferredDate)}
                      />
                    </FormField>


                    <FormField
                      label="Preferred Time"
                      required
                      error={errors.preferredTime}
                    >
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className={inputClass(errors.preferredTime)}
                      >

                        <option value="">
                          Select time
                        </option>

                        <option value="10:00 AM">
                          10:00 AM
                        </option>

                        <option value="11:00 AM">
                          11:00 AM
                        </option>

                        <option value="12:00 PM">
                          12:00 PM
                        </option>

                        <option value="2:00 PM">
                          2:00 PM
                        </option>

                        <option value="3:00 PM">
                          3:00 PM
                        </option>

                        <option value="4:00 PM">
                          4:00 PM
                        </option>

                        <option value="5:00 PM">
                          5:00 PM
                        </option>

                        <option value="6:00 PM">
                          6:00 PM
                        </option>

                      </select>
                    </FormField>

                  </div>


                  {/* ================= LEARNING MODE ================= */}

                  <FormField
                    label="Preferred Learning Mode"
                    required
                    error={errors.learningMode}
                  >

                    <div className="grid sm:grid-cols-2 gap-4">

                      <LearningMode
                        value="online"
                        label="Online Training"
                        icon="💻"
                        selected={formData.learningMode}
                        onChange={handleChange}
                      />

                      <LearningMode
                        value="classroom"
                        label="Classroom Training"
                        icon="🏫"
                        selected={formData.learningMode}
                        onChange={handleChange}
                      />

                    </div>

                  </FormField>


                  {/* ================= MESSAGE ================= */}

                  <FormField label="Message / Questions">

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell us what you would like to learn or ask..."
                      className={`${inputClass()} resize-none`}
                    />

                  </FormField>


                  {/* ================= SUBMIT ================= */}

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition cursor-pointer"
                  >
                    Book My Free Demo
                  </button>


                  <p className="text-center text-xs text-slate-500">
                    By submitting this form, you agree to be contacted
                    regarding your demo request.
                  </p>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-14">

            <p className="text-blue-600 font-semibold">
              HOW IT WORKS
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Book Your Demo in 3 Simple Steps
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-7">

            <StepCard
              number="01"
              icon="📝"
              title="Submit Request"
              description="Fill in your details, choose your course and preferred demo schedule."
            />

            <StepCard
              number="02"
              icon="📞"
              title="Get Confirmation"
              description="Our team can contact you regarding the availability of your requested session."
            />

            <StepCard
              number="03"
              icon="💻"
              title="Attend Demo"
              description="Attend your demo session and understand the training approach and course structure."
            />

          </div>

        </div>

      </section>


      {/* ================= WHAT YOU CAN DISCUSS ================= */}
      <section className="py-20 bg-slate-950 text-white">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <p className="text-blue-400 font-semibold">
                YOUR DEMO SESSION
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                What Can You Discuss?
              </h2>

              <p className="text-slate-400 mt-5 leading-8">
                The demo session gives you an opportunity to understand
                the training program and ask questions before deciding
                on your learning path.
              </p>

            </div>


            <div className="grid sm:grid-cols-2 gap-5">

              <DemoTopic text="Course Curriculum" />
              <DemoTopic text="Training Approach" />
              <DemoTopic text="Course Duration" />
              <DemoTopic text="Projects" />
              <DemoTopic text="Technology Stack" />
              <DemoTopic text="Batch Information" />
              <DemoTopic text="Career Support" />
              <DemoTopic text="Your Career Goals" />

            </div>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}
      <section className="py-20 bg-slate-50">

        <div className="max-w-5xl mx-auto px-5">

          <div className="text-center mb-12">

            <p className="text-blue-600 font-semibold">
              QUESTIONS
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Demo Session FAQ
            </h2>

          </div>


          <div className="space-y-4">

            <FAQ
              question="Is the demo session free?"
              answer="Yes. You can request a free demo session to understand the course and training approach."
            />

            <FAQ
              question="Can I book a demo if I don't know which course to choose?"
              answer='Yes. Select "Not Sure - Need Guidance" in the course field and discuss your learning goals with our team.'
            />

            <FAQ
              question="Can I choose my preferred date?"
              answer="Yes. You can select your preferred date and time. The final session timing can be confirmed based on trainer availability."
            />

            <FAQ
              question="Can working professionals book a demo?"
              answer="Yes. Students, freshers, working professionals and people considering a career change can request a demo."
            />

          </div>

        </div>

      </section>


      {/* ================= CONTACT CTA ================= */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-5">

          <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-3xl px-8 md:px-14 py-14 text-center shadow-xl">

            <h2 className="text-3xl md:text-4xl font-bold">
              Have Questions Before Booking?
            </h2>

            <p className="text-blue-100 mt-4 max-w-xl mx-auto">
              Contact HKS-IT and ask us about courses, training
              options and the learning process.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-white text-blue-700 hover:bg-slate-100 px-7 py-3.5 rounded-lg font-semibold mt-7 transition"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>
    </>
  );
};


/* ================= FORM FIELD ================= */

const FormField = ({
  label,
  required,
  error,
  children,
}) => {
  return (
    <div>

      <label className="block text-sm font-semibold text-slate-700 mb-2">
        {label}

        {required && (
          <span className="text-red-500 ml-1">
            *
          </span>
        )}
      </label>

      {children}

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}

    </div>
  );
};


/* ================= INPUT STYLE ================= */

const inputClass = (error) => {
  return `w-full px-4 py-3 rounded-xl border outline-none bg-white transition ${error
      ? "border-red-400 focus:border-red-500"
      : "border-slate-300 focus:border-blue-500"
    }`;
};


/* ================= LEARNING MODE ================= */

const LearningMode = ({
  value,
  label,
  icon,
  selected,
  onChange,
}) => {
  return (
    <label
      className={`border rounded-xl p-4 cursor-pointer transition flex items-center gap-3 ${selected === value
          ? "border-blue-600 bg-blue-50"
          : "border-slate-300 hover:border-blue-400"
        }`}
    >

      <input
        type="radio"
        name="learningMode"
        value={value}
        checked={selected === value}
        onChange={onChange}
        className="accent-blue-600"
      />

      <span className="text-xl">
        {icon}
      </span>

      <span className="font-medium">
        {label}
      </span>

    </label>
  );
};


/* ================= DEMO BENEFIT ================= */

const DemoBenefit = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex gap-4">

      <div className="w-12 h-12 flex-shrink-0 bg-blue-50 rounded-xl flex items-center justify-center text-xl">
        {icon}
      </div>

      <div>

        <h3 className="font-bold">
          {title}
        </h3>

        <p className="text-slate-600 text-sm mt-1 leading-6">
          {description}
        </p>

      </div>

    </div>
  );
};


/* ================= STEP CARD ================= */

const StepCard = ({
  number,
  icon,
  title,
  description,
}) => {
  return (
    <div className="border border-slate-200 rounded-2xl p-7 text-center hover:-translate-y-1 hover:shadow-lg transition duration-300">

      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mx-auto">
        {icon}
      </div>

      <p className="text-blue-600 font-bold text-sm mt-5">
        STEP {number}
      </p>

      <h3 className="text-xl font-bold mt-2">
        {title}
      </h3>

      <p className="text-slate-600 mt-3 leading-7">
        {description}
      </p>

    </div>
  );
};


/* ================= DEMO TOPIC ================= */

const DemoTopic = ({ text }) => {
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


/* ================= FAQ ================= */

const FAQ = ({ question, answer }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">

      <h3 className="text-lg font-bold text-slate-900">
        {question}
      </h3>

      <p className="text-slate-600 mt-3 leading-7">
        {answer}
      </p>

    </div>
  );
};

export default BookDemo;