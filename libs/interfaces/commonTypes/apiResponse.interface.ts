export declare namespace ApiResponse {
    interface ApiOK {
    data?: any,
    statusCode?: number,
    message?: string,
    extraMessage?: any
    success?: boolean
  }


   interface ApiResponseType {
    data: any,
    statusCode: number,
    message: string,
    extraError?: any,
    extraMessage?: any,
    success?: boolean

  }

  export interface ApiErrorType {
    statusCode: number;
    message: string;
    extraError?: any;
    stack?: string;
    name?:string
  }
}