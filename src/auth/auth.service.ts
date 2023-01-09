/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto';

// eslint-disable-next-line 
const users = require('../users.json');


@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {

    }
    signIn(dto: AuthDto) {
        //Retrieve user
        const user = users.find((_user: { email: string; }) => _user.email === dto.email)
        if (!user) throw new UnauthorizedException('Credentials incorrect')
        if (user.password !== dto.password) throw new UnauthorizedException ('Credentials incorrect');

        return this.signUser(user.id, user.email, 'user'); 
    }
    
    signUp(dto: AuthDto) {};


    signUser(
        userId: number,
        email: string,
        type: string
    ) {
        return this.jwtService.sign({
            sub: userId,
            email,
            claim: type
        })
    }
 }
