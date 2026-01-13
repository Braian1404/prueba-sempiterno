import { Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly configService: ConfigService) {
        super ({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('JWT_SECRET') || 'clave secreta',
        })
    }

    async validate(payload: any){
        return {
            userId: payload.sub,
            email: payload.username,
            role: payload.role,
        }
    }

}