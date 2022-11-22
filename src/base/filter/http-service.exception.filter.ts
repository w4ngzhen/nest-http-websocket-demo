import {ArgumentsHost, Catch, ExceptionFilter, HttpException} from "@nestjs/common";
import {ServerResponseWrapper} from "../../common/server-response-wrapper";
import {BizException} from "../../common/biz-exception";

/**
 * 全局Http服务的异常处理，
 * 该Filter在main中通过
 * app.useGlobalExceptionFilter来全局引入，
 * 仅处理HTTP服务
 */
@Catch()
export class HttpServiceExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): any {
        // 进入该拦截器，说明http调用中存在异常，需要解析异常，并返回统一处理
        let responseWrapper: ServerResponseWrapper;
        let httpStatusCode: number;
        if (exception instanceof BizException) {
            // 业务层Exception
            responseWrapper = {
                returnCode: exception.errorCode.codeString,
                errorMessage: exception.errorMessage
            }
            httpStatusCode = exception.errorCode.statusCode;
        } else if (exception instanceof HttpException) {
            // 框架层的Http异常
            responseWrapper = {
                returnCode: 'IM9009',
                errorMessage: exception.message,
            }
            httpStatusCode = exception.getStatus();
        } else {
            // 其他错误
            responseWrapper = {
                returnCode: 'IM9999',
                errorMessage: 'server unknown error: ' + exception.message,
            };
            httpStatusCode = 500;

        }

        // 该拦截器处理HTTP服务的异常，所以手动切换到HTTP Host
        // 并获取响应response，进行HTTP响应的写入
        const httpHost = host.switchToHttp();
        const response = httpHost.getResponse();
        response.status(httpStatusCode).json(responseWrapper);
    }
}
