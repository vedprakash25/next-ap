import { connect } from "#/dbConfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import User from "#/model/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    // expect the request using NextRequest
    const reqBody = await request.json();
    // desctructurting the request data
    const { email, password } = reqBody;
    // find user data ss per the inoput from the client
    const user = await User.findOne({ email });
    console.log(user, "route Login");
    // not found message
    if (!user) {
      return NextResponse.json({
        message: "User does not exist!",
        status: 400,
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({
        message: "Enter valid credentials!",
        status: 400,
      });
    }
    console.log(user);

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login Successfull",
      status: 200,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({
      message: "Something went wrong, Please try later!",
      status: 500,
    });
  }
}
