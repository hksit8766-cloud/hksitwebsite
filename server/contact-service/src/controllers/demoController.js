import DemoBooking from "../models/DemoBooking.js";


// =====================================================
// CREATE DEMO BOOKING
// POST /demos
// =====================================================

export const createDemoBooking = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      course,
      experience,
      preferredDate,
      preferredTime,
      learningMode,
      message,
    } = req.body;


    // Required fields
    if (
      !name ||
      !email ||
      !phone ||
      !course ||
      !experience ||
      !preferredDate ||
      !preferredTime ||
      !learningMode
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }


    // Email validation
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }


    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        message:
          "Please enter a valid 10-digit mobile number.",
      });
    }


    // Date validation
    const selectedDate = new Date(
      `${preferredDate}T00:00:00`
    );

    const today = new Date();

    today.setHours(0, 0, 0, 0);


    if (
      Number.isNaN(selectedDate.getTime()) ||
      selectedDate < today
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please select a valid current or future demo date.",
      });
    }


    // Save booking
    const demoBooking =
      await DemoBooking.create({
        name,
        email,
        phone,
        course,
        experience,
        preferredDate,
        preferredTime,
        learningMode,
        message: message || "",
      });


    return res.status(201).json({
      success: true,
      message:
        "Demo request submitted successfully.",
      data: demoBooking,
    });

  } catch (error) {

    console.error(
      "Create Demo Booking Error:",
      error
    );


    // Mongoose validation error
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message:
          Object.values(error.errors)
            .map((item) => item.message)
            .join(" "),
      });
    }


    return res.status(500).json({
      success: false,
      message:
        "Unable to submit demo request.",
      error: error.message,
    });
  }
};


// =====================================================
// GET ALL DEMO BOOKINGS
// Later → ADMIN ONLY
// =====================================================

export const getDemoBookings = async (
  req,
  res
) => {
  try {

    const bookings =
      await DemoBooking.find()
        .sort({
          createdAt: -1,
        });


    return res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });

  } catch (error) {

    console.error(
      "Get Demo Bookings Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to retrieve demo bookings.",
    });
  }
};


// =====================================================
// GET DEMO BOOKING BY ID
// =====================================================

export const getDemoBookingById = async (
  req,
  res
) => {
  try {

    const booking =
      await DemoBooking.findById(
        req.params.id
      );


    if (!booking) {
      return res.status(404).json({
        success: false,
        message:
          "Demo booking not found.",
      });
    }


    return res.status(200).json({
      success: true,
      data: booking,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message:
        "Unable to retrieve demo booking.",
    });
  }
};


// =====================================================
// UPDATE DEMO STATUS
// Later → ADMIN ONLY
// =====================================================

export const updateDemoStatus = async (
  req,
  res
) => {
  try {

    const { status } = req.body;


    const allowedStatuses = [
      "pending",
      "confirmed",
      "completed",
      "cancelled",
    ];


    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid demo status.",
      });
    }


    const booking =
      await DemoBooking.findByIdAndUpdate(
        req.params.id,
        {
          status,
        },
        {
          new: true,
          runValidators: true,
        }
      );


    if (!booking) {
      return res.status(404).json({
        success: false,
        message:
          "Demo booking not found.",
      });
    }


    return res.status(200).json({
      success: true,
      message:
        "Demo status updated successfully.",
      data: booking,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message:
        "Unable to update demo status.",
    });
  }
};