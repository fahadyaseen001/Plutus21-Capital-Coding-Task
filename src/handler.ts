import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { lamdaFunction } from './services/lamdaFunction';
import { successResponse, errorResponse } from './utils/responseHelper';

 
export const getTasks = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log('GetTasks event:', JSON.stringify(event, null, 2));
  
  try {
    const taskService = new lamdaFunction();
    
    const tasks = await taskService.getAllTasks();
    
    return successResponse({ tasks });
  } catch (error) {
    console.error('Error in getTasks handler:', error);
    
    if (error instanceof Error) {
      return errorResponse(500, error.message);
    }
    return errorResponse(500, 'An unknown error occurred');
  }
};