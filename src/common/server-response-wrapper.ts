export interface ServerResponseWrapper {
    /**
     * 服务端返回码
     */
    returnCode: string;
    /**
     * 错误信息（如有，例如返回码非成功码）
     */
    errorMessage?: string;
    /**
     * 返回数据（如有）
     */
    data?: any;
}
