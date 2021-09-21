import {Injectable} from '@nestjs/common';
import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
const jwt = require('jsonwebtoken')

const generateJwt = (id, name, role) => {
    return jwt.sign(
        {id, name, role},
        "SDGSDG",
        {expiresIn: '24h'}
    )
}

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User) {
    }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto)
        const token = generateJwt(user.id, user.name, user.role)
        return token
    }

    login() {

    }
}
