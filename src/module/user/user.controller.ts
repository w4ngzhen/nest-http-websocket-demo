import {Controller, Get, Param} from '@nestjs/common';
import {UserService} from './user.service';
import {UserDto} from "../../entity/user/user.dto";

@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) {
    }
    @Get(":userId")
    async getHello(@Param('userId') userId: string): Promise<UserDto> {
        return this.userService.getUserById(userId);
    }
}
