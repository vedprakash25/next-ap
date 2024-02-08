// create a export function getDataFromToken
// get cookies/token and access value from
// verify token and sote in decoded taken

import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export const getDataFromToken = (req: NextRequest) => {
  try {
    let token = req.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    return decodedToken.id;
  } catch (error: any) {
    return NextResponse.json({ message: "No data found", status: 400 });
  }
};
