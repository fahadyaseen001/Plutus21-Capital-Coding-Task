export interface ResponseBody {
    statusCode: number;
    headers: {
      [header: string]: string | number | boolean;
    };
    body: string;
  }
  
  export const formatResponse = (statusCode: number, body: any): ResponseBody => {
    return {
      statusCode,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };
  };
  
  export const successResponse = (data: any): ResponseBody => {
    return formatResponse(200, data);
  };
  
  export const errorResponse = (statusCode: number, message: string): ResponseBody => {
    return formatResponse(statusCode, { error: message });
  };