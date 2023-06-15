import User from "../model/user-model.js"
import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user:"khalilhussaini2022@gmail.com",
    pass: process.env.GMAIL_PASS,
  },
  tls: { rejectUnauthorized: false },
  ignoreTLS: true,
});

const getUsers = async () => {
  try {
    const users = await User.findAll()
    return users
  } catch (error) {
    throw new Error('');
  }

}

const getUserByEmail = async (pEmail) => {
  try {
    const user = await User.findOne({
      where: {
        email: pEmail
      }
    })
    return user;
  } catch (error) {
    throw new Error('error while getting users');
  }

}

//repository:
//create User
const createUser = async (pUser) => {
  try {
     // Check if user with provided email already exists
     const existingUser = await User.findOne({ where: { email: pUser.email } });
     if (existingUser) {
       throw new Error('User with this email already exists');
     }
     // Create new user if email does not exist
    const newUser = await User.create(pUser);

    const emailOptions = {
      from: "khalilhussaini2022@gmail.com",
      to: pUser.email,
      subject: "Hello",
      html: "Welcome to Travel and Tour Website ",
    };
    transporter.sendMail(emailOptions, (err, info) => {
      if (err) {
        console.log("hello");
        console.error(err);
      } else console.log(info);
    });
    return newUser;
  }catch (error) {
    throw new Error('error while getting users');
  }
 
};


const deleteUserById = async (pUserId) => {
  return await User.destroy({
    where: {
      id: pUserId
    }
  });
}

const updatedUsers = async (users) => {
  try {
    const result = await User.bulkCreate(users, {
      updateOnDuplicate: ["role"]
    });
    console.log(result); // Prints the updated rows
  } catch (error) {
    console.error(error);
  }
};

export default {
  getUsers,
  createUser,
  deleteUserById,
  getUserByEmail,
  updatedUsers
}


