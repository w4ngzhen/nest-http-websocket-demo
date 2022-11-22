import {Injectable} from '@nestjs/common';
import {UserDto} from "../../entity/user/user.dto";
import * as _ from 'lodash';
import {BizException} from "../../common/biz-exception";
import {ERR_REQ_FIELD_ERROR} from "../../common/return-code";

@Injectable()
export class UserService {

    async getUserById(userId: string): Promise<UserDto> {
        if (_.isEmpty(userId)) {
            throw BizException.create(ERR_REQ_FIELD_ERROR, 'user id is empty');
        }
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
