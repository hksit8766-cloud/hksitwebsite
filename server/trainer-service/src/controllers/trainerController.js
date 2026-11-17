import Trainer from "../models/Trainer.js";


// =====================================================
// CREATE TRAINER
// POST /trainers
// =====================================================

export const createTrainer = async (req, res) => {
  try {
    const {
      name,
      role,
      experience,
      initials,
      description,
      skills,
      image,
      isActive,
      displayOrder,
    } = req.body;


    if (
      !name ||
      !role ||
      !experience ||
      !initials ||
      !description
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }


    if (!Array.isArray(skills) || skills.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please provide at least one skill.",
      });
    }


    const trainer = await Trainer.create({
      name,
      role,
      experience,
      initials,
      description,
      skills,
      image: image || "",
      isActive:
        typeof isActive === "boolean"
          ? isActive
          : true,
      displayOrder: displayOrder || 0,
    });


    return res.status(201).json({
      success: true,
      message: "Trainer created successfully.",
      data: trainer,
    });

  } catch (error) {
    console.error("Create Trainer Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to create trainer.",
      error: error.message,
    });
  }
};


// =====================================================
// GET ALL TRAINERS
// GET /trainers
// =====================================================

export const getTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find({
      isActive: true,
    }).sort({
      displayOrder: 1,
      createdAt: -1,
    });


    return res.status(200).json({
      success: true,
      count: trainers.length,
      data: trainers,
    });

  } catch (error) {
    console.error("Get Trainers Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to retrieve trainers.",
    });
  }
};


// =====================================================
// GET TRAINER BY ID
// GET /trainers/:id
// =====================================================

export const getTrainerById = async (req, res) => {
  try {
    const trainer = await Trainer.findById(
      req.params.id
    );


    if (!trainer) {
      return res.status(404).json({
        success: false,
        message: "Trainer not found.",
      });
    }


    return res.status(200).json({
      success: true,
      data: trainer,
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Invalid trainer ID.",
    });
  }
};


// =====================================================
// UPDATE TRAINER
// PUT /trainers/:id
// =====================================================

export const updateTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );


    if (!trainer) {
      return res.status(404).json({
        success: false,
        message: "Trainer not found.",
      });
    }


    return res.status(200).json({
      success: true,
      message: "Trainer updated successfully.",
      data: trainer,
    });

  } catch (error) {
    console.error("Update Trainer Error:", error);

    return res.status(400).json({
      success: false,
      message: "Unable to update trainer.",
      error: error.message,
    });
  }
};


// =====================================================
// DELETE TRAINER
// DELETE /trainers/:id
// =====================================================

export const deleteTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndDelete(
      req.params.id
    );


    if (!trainer) {
      return res.status(404).json({
        success: false,
        message: "Trainer not found.",
      });
    }


    return res.status(200).json({
      success: true,
      message: "Trainer deleted successfully.",
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Unable to delete trainer.",
    });
  }
};