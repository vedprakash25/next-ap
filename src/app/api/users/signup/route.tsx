import { connect } from "#/dbConfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import User from "#/model/userModel";
import bcrypt from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    // expecting json from the post request
    const reqBody = await request.json();
    // Desstructuring the json
    const { username, email, password } = reqBody;
    // check if user exists
    const user = await User.findOne({ email });
    if (user) {
      // if exist do not create user
      return NextResponse.json({ message: "User already exist", status: 400 });
    }
    // generate hash password
    const salt = await bcrypt.genSalt(10);
    // passing aslt with password
    const hashedPassword = await bcrypt.hash(password, salt);
    // a new user with hashed password and same json
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    // save to database
    const savedUser = await newUser.save();
    //  provide response to the client
    return NextResponse.json({
      message: "user created successfully!",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
