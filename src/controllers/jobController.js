import { Job } from "../models/index.js";

export const createJob = async (req, res, next) => {
  try {
    const { company, position, status, location, type } = req.body;
    const { id } = req.user;

    if (!id) {
      return res.status(404).json({
        status: "error",
        message: "Error getting user! Please try and login again.",
      });
    }

    const job = await Job.create({
      company,
      position,
      status,
      location,
      type,
      userId: id,
    });

    if (!job) {
      return res.status(404).json({
        status: "error",
        message: "Error creating jobs!",
      });
    }
    return res
      .status(201)
      .json({ message: "Job created successfully", status: "success" });
  } catch (error) {
    next(error);
  }
};

export const getAllJobs = async (req, res, next) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        status: "error",
        message: "Invalid user session. Please log in again.",
      });
    }
    const id = req.user.id;

    const jobs = await Job.findAll({ where: { userId: id } });

    if (!jobs) {
      return res
        .status(400)
        .json({ message: "No job found!", success: "error" });
    }

    return res.status(200).json({
      status: "success",
      message: "Jobs fetched successfully",
      data: jobs,
    });
  } catch (error) {
    next(error);
  }
};

export const getJob = async (req, res, next) => {
  try {    
    if ( !req.user.id) {
      return res.status(401).json({
        status: "error",
        message: "Invalid user session. Please log in again.",
      });
    }
    const id = req.user.id;
    const { id: jobId } = req.params;

    const job = await Job.findOne({ where: { id: jobId, userId: id } });

    if (!job) {
      return res.status(404).json({
        status: "error",
        message: "Job not found!",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Job fetched successfully",
      data: job,
    });
  } catch (error) {
    next(error);
  }
};

export const updateJob = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { id: jobId } = req.params;
    const updates = req.body;

    const job = await Job.findOne({ where: { id: jobId, userId: id } });

    if (!job) {
      return res.status(404).json({
        status: "error",
        message: "Job not found!",
      });
    }

    await job.update(updates);

    return res.status(200).json({
      status: "success",
      message: "Job updated successfully",
      data: job,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteJob = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { id: jobId } = req.params;

    const job = await Job.findOne({ where: { id: jobId, userId: id } });

    if (!job) {
      return res.status(404).json({
        status: "error",
        message: "Job not found!",
      });
    }

    await job.destroy();

    return res.status(200).json({
      status: "success",
      message: "Job deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
