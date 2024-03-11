import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import UserServices from "../services/user.js";
import dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  //payload includes new information from frontend to update.
  //done: to say that the token is done and you can move to next level (controller function) and update information.
  async (payload, done) => {
    const foundUser = await UserServices.findUserByEmail(payload.email);
    if (!foundUser) return "no user!";
    done(null, foundUser);
  }
);
