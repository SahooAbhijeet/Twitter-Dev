import JWT, { ExtractJwt } from "passport-jwt";
import User from "../models/user";

const JwtStrategy = JWT.Strategy;
const ExtractJWT = JWT.ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'twitterSecret'
}

export const passportAuth = (passport) => {
    passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
        const user = await User.findById(jwt_payload.id);
        if(!user) {
            done(null, false);
        } else {
            done(null, user)
        }
    }))
}
