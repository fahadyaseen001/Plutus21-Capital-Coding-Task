import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb';
import { Task } from '../models/taskSchema';

export class lamdaFunction {
  private readonly docClient: DynamoDBDocumentClient;
  private readonly tableName: string;

  constructor() {
    const client = new DynamoDBClient({});
    this.docClient = DynamoDBDocumentClient.from(client);
    this.tableName = process.env.TASKS_TABLE || 'TasksTable';
  }

  async getAllTasks(): Promise<Task[]> {
    try {
      const params = {
        TableName: this.tableName
      };

      const { Items } = await this.docClient.send(new ScanCommand(params));
      
      return (Items as Task[]) || [];
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw new Error('Could not retrieve tasks');
    }
  }
}