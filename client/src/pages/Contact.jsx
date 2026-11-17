import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle Input Change
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    // Remove validation error while typing
    if (errors[name]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: "",
      }));
    }

    setSubmitted(false);
  };

  // Validate Form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
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

    if (!formData.subject.trim()) {
      newErrors.subject = "Please select a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    return newErrors;
  };

  // Submit Form
  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Temporary frontend submit
    console.log("Contact Form Data:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
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
            CONTACT HKS-IT
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Let's Start a
            <span className="text-blue-400"> Conversation</span>
          </h1>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Have questions about our courses, training programs or
            career support? Send us a message and our team will help
            you with the information you need.
          </p>

        </div>
      </section>


      {/* ================= CONTACT INFO ================= */}
      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <ContactInfoCard
              icon="📞"
              title="Call Us"
              value="+91 9689868185"
              description="Talk with our team"
            />

            <ContactInfoCard
              icon="✉️"
              title="Email Us"
              value="info@hks-it.com"
              description="Send us your enquiry"
            />

            <ContactInfoCard
              icon="📍"
              title="Location"
              value="Pune, Maharashtra"
              description="India"
            />

            <ContactInfoCard
              icon="🕐"
              title="Working Hours"
              value="Mon - Sat"
              description="9:00 AM - 7:00 PM"
            />

          </div>

        </div>

      </section>


      {/* ================= CONTACT FORM ================= */}
      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <div>

              <p className="text-blue-600 font-semibold">
                GET IN TOUCH
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Have a Question?
              </h2>

              <p className="text-slate-600 mt-5 leading-8">
                Whether you want to know more about our courses,
                upcoming batches, demo sessions or training approach,
                you can contact us using the form.
              </p>


              {/* Contact Details */}

              <div className="space-y-5 mt-10">

                <ContactRow
                  icon="📞"
                  title="Phone"
                  value="+91 9689868185"
                />

                <ContactRow
                  icon="✉️"
                  title="Email"
                  value="info@hks-it.com"
                />

                <ContactRow
                  icon="📍"
                  title="Training Location"
                  value="Pimpri Pune, Maharashtra, India"
                />

                <ContactRow
                  icon="🕐"
                  title="Business Hours"
                  value="Monday - Saturday, 9:00 AM - 7:00 PM"
                />

              </div>


              {/* Quick Demo */}

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mt-10">

                <h3 className="text-lg font-bold">
                  Looking for a Free Demo?
                </h3>

                <p className="text-slate-600 mt-2 leading-7">
                  Book a demo session and learn more about the course
                  before getting started.
                </p>

                <Link
                  to="/book-demo"
                  className="inline-block text-blue-600 font-semibold mt-4 hover:text-blue-800"
                >
                  Book Free Demo →
                </Link>

              </div>

            </div>


            {/* RIGHT SIDE - FORM */}

            <div className="bg-white border border-slate-200 rounded-3xl p-7 md:p-10 shadow-sm">

              <h3 className="text-2xl font-bold">
                Send Us a Message
              </h3>

              <p className="text-slate-600 mt-2">
                Fill in the details below and we'll get back to you.
              </p>


              {/* SUCCESS MESSAGE */}

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 mt-6">
                  ✓ Thank you! Your message has been submitted successfully.
                </div>
              )}


              <form
                onSubmit={handleSubmit}
                className="space-y-5 mt-7"
              >

                {/* NAME */}

                <div>

                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Full Name *
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition ${errors.name
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-300 focus:border-blue-500"
                      }`}
                  />

                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name}
                    </p>
                  )}

                </div>


                {/* EMAIL + PHONE */}

                <div className="grid md:grid-cols-2 gap-5">

                  <div>

                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition ${errors.email
                        ? "border-red-400"
                        : "border-slate-300 focus:border-blue-500"
                        }`}
                    />

                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}

                  </div>


                  <div>

                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Mobile Number *
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit number"
                      maxLength="10"
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition ${errors.phone
                        ? "border-red-400"
                        : "border-slate-300 focus:border-blue-500"
                        }`}
                    />

                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}

                  </div>

                </div>


                {/* SUBJECT */}

                <div>

                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    What can we help you with? *
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border outline-none bg-white transition ${errors.subject
                      ? "border-red-400"
                      : "border-slate-300 focus:border-blue-500"
                      }`}
                  >

                    <option value="">
                      Select an option
                    </option>

                    <option value="course">
                      Course Information
                    </option>

                    <option value="demo">
                      Free Demo
                    </option>

                    <option value="fees">
                      Course Fees
                    </option>

                    <option value="batch">
                      Upcoming Batch
                    </option>

                    <option value="career">
                      Career Support
                    </option>

                    <option value="other">
                      Other
                    </option>

                  </select>

                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}

                </div>


                {/* MESSAGE */}

                <div>

                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us how we can help you..."
                    className={`w-full px-4 py-3 rounded-xl border outline-none resize-none transition ${errors.message
                      ? "border-red-400"
                      : "border-slate-300 focus:border-blue-500"
                      }`}
                  />

                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}

                </div>


                {/* SUBMIT */}

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-semibold transition cursor-pointer"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* ================= LOCATION ================= */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-12">

            <p className="text-blue-600 font-semibold">
              FIND US
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Our Location
            </h2>

            <p className="text-slate-600 mt-4">
              HKS-IT Technology Training Institute
            </p>

            <p className="text-slate-500 mt-2">
              Pimpri, Pune, Maharashtra, India
            </p>

          </div>

          {/* Google Map */}
          {/* Google Map - Small Size */}
          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-slate-200 shadow-md">

            <iframe
              src="https://www.google.com/maps?q=18.6117411,73.8035775&z=16&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HKS-IT Location"
            />

          </div>

          {/* Location Information */}
          <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                  📍
                </div>

                <div>

                  <h3 className="text-lg font-bold text-slate-900">
                    HKS-IT Technology Training Institute
                  </h3>

                  <p className="text-slate-600 mt-1">
                    Pimpri, Pune, Maharashtra, India
                  </p>

                </div>

              </div>


              {/* Open Google Maps */}
              <a
                href="https://www.google.com/maps/place/Aura+Kids+Preschool+and+Daycare+-+Pimpri/@18.6132191,73.7847148,15z/data=!4m10!1m2!2m1!1saura+kids+preschool+and+daycare+-+pimpri!3m6!1s0x3bc2b951a4aa45bf:0x881724ddb253d877!8m2!3d18.6117411!4d73.8035775"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                📍 Open in Google Maps
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-slate-50">

        <div className="max-w-5xl mx-auto px-5">

          <div className="text-center mb-12">

            <p className="text-blue-600 font-semibold">
              QUICK ANSWERS
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Frequently Asked Questions
            </h2>

          </div>


          <div className="space-y-4">

            <FAQ
              question="Can I attend a demo before joining?"
              answer="Yes. You can book a free demo session to understand the training approach and course structure."
            />

            <FAQ
              question="Do you provide practical training?"
              answer="Our courses are designed around practical learning, coding exercises and project-based development."
            />

            <FAQ
              question="Can beginners join the courses?"
              answer="Course requirements depend on the selected program. Beginner-friendly learning paths can start with programming fundamentals."
            />

            <FAQ
              question="Do you provide career support?"
              answer="Career support can include resume guidance, technical preparation, project guidance and mock interview preparation."
            />

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-5">

          <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-3xl px-8 md:px-14 py-14 text-center shadow-xl">

            <p className="text-blue-100 font-semibold">
              START LEARNING
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Ready to Explore Your IT Career?
            </h2>

            <p className="text-blue-100 mt-5 max-w-2xl mx-auto leading-7">
              Explore our training programs or book a free demo to
              learn more about HKS-IT.
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


/* ================= CONTACT INFO CARD ================= */

const ContactInfoCard = ({
  icon,
  title,
  value,
  description,
}) => {
  return (
    <div className="border border-slate-200 rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-lg transition duration-300">

      <div className="w-14 h-14 mx-auto bg-blue-50 rounded-xl flex items-center justify-center text-2xl">
        {icon}
      </div>

      <h3 className="font-bold text-lg mt-4">
        {title}
      </h3>

      <p className="text-blue-600 font-semibold mt-2">
        {value}
      </p>

      <p className="text-slate-500 text-sm mt-1">
        {description}
      </p>

    </div>
  );
};


/* ================= CONTACT ROW ================= */

const ContactRow = ({ icon, title, value }) => {
  return (
    <div className="flex items-center gap-4">

      <div className="w-12 h-12 flex-shrink-0 bg-blue-50 rounded-xl flex items-center justify-center text-xl">
        {icon}
      </div>

      <div>

        <p className="text-sm text-slate-500">
          {title}
        </p>

        <p className="font-semibold text-slate-800 mt-1">
          {value}
        </p>

      </div>

    </div>
  );
};


/* ================= FAQ ================= */

const FAQ = ({ question, answer }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">

      <h3 className="font-bold text-lg text-slate-900">
        {question}
      </h3>

      <p className="text-slate-600 mt-3 leading-7">
        {answer}
      </p>

    </div>
  );
};

export default Contact;