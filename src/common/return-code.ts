export class ReturnCode {

    private readonly _preCode: 'SUC' | 'ERR';
    private readonly _subCode: string;

    private readonly _statusCode: number;

    get codeString(): string {
        return `${this._preCode}${this._subCode}`;
    }

    get statusCode(): number {
        return this._statusCode;
    }

    constructor(prefix: 'SUC' | 'ERR', subCode: string, statusCode: number) {
        this._preCode = prefix;
        this._subCode = subCode;
        this._statusCode = statusCode;
    }
}

export const SUCCESS = new ReturnCode('SUC', '00000', 200);
export const ERR_REQ_FIELD_ERROR = new ReturnCode('ERR', '40000', 400);
export const ERR_NOT_FOUND = new ReturnCode('ERR', '40400', 404);
