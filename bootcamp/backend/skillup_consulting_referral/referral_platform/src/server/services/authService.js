import { PrismaClient } from "../../generated/prisma/client.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import omit from "lodash/omit.js";
import * as emailService from "./emailService.js";

const prisma = new PrismaClient();

export async function registerUser(data) {
  const password = data.password;

  const hashedPassword = await bcrypt.hash(
    password,
    parseInt(process.env.PASSWORD_SALT_ROUNDS)
  );

  // Registration logic here

  const newUser = await prisma.user.create({
    data: { ...data, password: hashedPassword },
  });

  await emailService.sendEmail(
    newUser.email,
    "Welcome to SkillUp Consulting Referral Platform",
    `Hello ${newUser.firstName},\n\nThank you for registering at SkillUp Consulting Referral Platform.\n\nBest regards,\nSkillUp Consulting Team`
  );

  const token = jwt.sign(
    {
      id: newUser.id,
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      mobile: newUser.mobile,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return token;
}

export async function loginUser(data) {
  const user = await prisma.user.findUnique({
    where: { email: data.email },
  });
  if (!user) {
    throw new Error("User not found");
  }

  const isValid = await bcrypt.compare(data.password, user.password);
  if (!isValid) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      mobile: user.mobile,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return token;
}
