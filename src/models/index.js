// import all model
import User from "./User.js";
import sequelize from "../config/database.js";
import Job from "./Jobs.js";

User.hasMany(Job, { foreignKey: "userId", as: "jobs" });
Job.belongsTo(User, { foreignKey: "userId", as: "user" });

export { User, Job, sequelize };
