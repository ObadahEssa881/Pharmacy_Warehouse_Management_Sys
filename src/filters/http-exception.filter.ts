// src/filters/http-exception.filter.ts
import {
  ExceptionFilter,
  Catch,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any) {
    console.error(exception); // Log unexpected errors

    if (exception instanceof HttpException) {
      return exception.getResponse();
    }

    return {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
    };
  }
}
