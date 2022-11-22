import {ReturnCode} from "../common/return-code";

export class BizException {

    private readonly _errorCode: ReturnCode;
    private readonly _errorMessage: string;

    get errorCode(): ReturnCode {
        return this._errorCode;
    }

    get errorMessage(): string {
        return this._errorMessage;
    }

    protected constructor(errorEntity: ReturnCode, errorMessage: string) {
        this._errorMessage = errorMessage;
        this._errorCode = errorEntity;
    }

    static create(errEntity: ReturnCode, errMessage?: string): BizException {
        return new BizException(errEntity, errMessage);
    }
}
