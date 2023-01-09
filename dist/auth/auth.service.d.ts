import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    signIn(dto: AuthDto): string;
    signUp(dto: AuthDto): void;
    signUser(userId: number, email: string, type: string): string;
}
