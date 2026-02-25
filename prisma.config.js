const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

module.exports = {
  schema: path.resolve(__dirname, "prisma", "schema.prisma"),
  datasource: {
    db: {
      provider: "postgresql",
      url: process.env.NODE_ENV === "production"
        ? process.env.DATABASE_URL
        : process.env.DIRECT_URL,
    },
  },
};
