import { PrismaClient } from "../../generated/prisma/client.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import omit from "lodash/omit.js";

const prisma = new PrismaClient();

export async function registerAdminUser(data) {
  // add hashing of password here before saving to DB in real app
  const password = data.password;

  const hashedPassword = await bcrypt.hash(
    password,
    parseInt(process.env.PASSWORD_SALT_ROUNDS)
  );
  const newAdminUser = await prisma.adminUser.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });
  return newAdminUser;
}

export async function loginAdminUser(data) {
  const adminUser = await prisma.adminUser.findUnique({
    where: { email: data.email },
  });
  if (!adminUser) {
    throw new Error("Admin user not found");
  }
  const isValidPassword = await bcrypt.compare(
    data.password,
    adminUser.password
  );
  if (!isValidPassword) {
    throw new Error("Invalid password");
  }
  const token = jwt.sign(
    { id: adminUser.id, email: adminUser.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return token;
}
