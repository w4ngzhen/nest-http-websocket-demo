import {Injectable} from '@nestjs/common';
import {UserDto} from "../../entity/user/user.dto";

@Injectable()
export class UserService {

    async getUserById(userId: string): Promise<UserDto> {
        // 测试数据
        const demoData: UserDto[] = [
            {
                userId: 'tom',
                username: 'Tom',
                age: 10
            },
            {
                userId: 'jerry',
                username: 'Jerry',
                age: 11
            }
        ];

        return demoData.find(u => u.userId === userId);
    }
}
