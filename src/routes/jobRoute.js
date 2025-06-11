import express from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  updateJob,
} from "../controllers/jobController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// All routes below are protected
// router.use(protect);

// Create a new job
/**
 * @swagger
 * /user/jobs:
 *   post:
 *     summary: Create a new job
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - company
 *               - position
 *               - address
 *               - status
 *               - type
 *             properties:
 *               company:
 *                 type: string
 *                 example: Google
 *               position:
 *                 type: string
 *                 example: Software Engineer
 *               address:
 *                 type: string
 *                 example: "1600 Amphitheatre Parkway, Mountain View, CA"
 *               status:
 *                 type: string
 *                 enum: [pending, interview, declined, accepted]
 *                 example: pending //interview //declined //accepted
 *               type:
 *                 type: string
 *                 enum: [full-time, part-time, remote, internship]
 *                 example: full-time //part-time //remote, //internship
 *     responses:
 *       201:
 *         description: Job created successfully
 *       400:
 *         description: Bad request
 */
router.post("/jobs", protect, createJob);

// Get all jobs for a user
/**
 * @swagger
 * /user/jobs:
 *   get:
 *     summary: Get all jobs for the user
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of jobs
 */
router.get("/jobs", protect, getAllJobs);

// Get a single job by ID
/**
 * @swagger
 * /user/jobs/{id}:
 *   get:
 *     summary: Get a single job by ID
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Job found
 *       404:
 *         description: Job not found
 */
router.get("/jobs/:id", protect, getJob);

// Update a job by ID
/**
 * @swagger
 * /user/jobs/{id}:
 *   patch:
 *     summary: Update a job
 *     tags:
 *       - Jobs
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the job to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               company:
 *                 type: string
 *                 example: Google
 *               position:
 *                 type: string
 *                 example: Lead engineer
 *               status:
 *                 type: string
 *                 enum: [pending, interview, declined, accepted]
 *                 example: pending //interview //declined //accepted
 *               type:
 *                 type: string
 *                 enum: [full-time, part-time, remote, internship]
 *                 example: full-time //part-time //remote, //internship
 *     responses:
 *       200:
 *         description: Job updated successfully
 *       400:
 *         description: Bad request (e.g., invalid status/type)
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Job not found
 *       500:
 *         description: Internal server error
 */
router.patch("/jobs/:id", protect, updateJob);

// Delete a job by ID
/**
 * @swagger
 * /user/jobs/{id}:
 *   delete:
 *     summary: Delete a job
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Job deleted successfully
 */
router.delete("/jobs/:id", protect, deleteJob);

export default router;
