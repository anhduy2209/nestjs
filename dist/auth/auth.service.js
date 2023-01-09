"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users = require('../users.json');
let AuthService = class AuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    signIn(dto) {
        const user = users.find((_user) => _user.email === dto.email);
        if (!user)
            throw new common_1.UnauthorizedException('Credentials incorrect');
        if (user.password !== dto.password)
            throw new common_1.UnauthorizedException('Credentials incorrect');
        return this.signUser(user.id, user.email, 'user');
    }
    signUp(dto) { }
    ;
    signUser(userId, email, type) {
        return this.jwtService.sign({
            sub: userId,
            email,
            claim: type
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map