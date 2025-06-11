import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Job = sequelize.define("Job", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM("pending", "interview", "declined", "accepted"),
    defaultValue: "pending",
  },
  type: {
    type: DataTypes.ENUM("full-time", "part-time", "remote", "internship"),
    defaultValue: "full-time",
  },
  dateApplied: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

export default Job;
