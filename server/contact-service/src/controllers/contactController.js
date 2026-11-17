import Enquiry from "../models/contact.js";


// ============================================
// CREATE CONTACT ENQUIRY
// POST /enquiries
// ============================================

export const createEnquiry = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            subject,
            message,
        } = req.body;


        // Required field validation
        if (
            !name ||
            !email ||
            !phone ||
            !subject ||
            !message
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
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


        // Create enquiry
        const enquiry = await Enquiry.create({
            name,
            email,
            phone,
            subject,
            message,
        });


        return res.status(201).json({
            success: true,
            message:
                "Thank you! Your enquiry has been submitted successfully.",
            data: enquiry,
        });

    } catch (error) {

        console.error(
            "Create Enquiry Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Something went wrong while submitting your enquiry.",
            error: error.message,
        });
    }
};


// ============================================
// GET ALL ENQUIRIES
// GET /enquiries
// Later this will be Admin Only
// ============================================

export const getEnquiries = async (req, res) => {
    try {

        const enquiries = await Enquiry.find()
            .sort({
                createdAt: -1,
            });


        return res.status(200).json({
            success: true,
            count: enquiries.length,
            data: enquiries,
        });

    } catch (error) {

        console.error(
            "Get Enquiries Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Unable to retrieve enquiries.",
            error: error.message,
        });
    }
};


// ============================================
// GET SINGLE ENQUIRY
// ============================================

export const getEnquiryById = async (
    req,
    res
) => {
    try {

        const enquiry =
            await Enquiry.findById(req.params.id);


        if (!enquiry) {
            return res.status(404).json({
                success: false,
                message: "Enquiry not found.",
            });
        }


        return res.status(200).json({
            success: true,
            data: enquiry,
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message:
                "Unable to retrieve enquiry.",
            error: error.message,
        });
    }
};