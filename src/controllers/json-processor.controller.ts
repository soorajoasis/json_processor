import {post, requestBody} from '@loopback/rest';
import axios from 'axios';
import jp from 'jmespath';
import {jsonProcessorRequestBody} from './specs/json-processor.specs';

interface IJsonProcessor {
  externalUrl: string,
  jsonRequest: object
}

export class JsonProcessorController {
  constructor() {}
  @post('/external',{
    responses:{
      '200': {
        description: 'The processed response from the external url.',
        content: {
          'application/json': {
            schema: Object,
          },
        },
      },
    } ,
  }) async jsonProcessor( @requestBody(jsonProcessorRequestBody) jsonProcessor: IJsonProcessor): Promise<Object>{

    let jsonProcessedObject = {};

    try {

      const externalUrlResponse = await axios.get(jsonProcessor.externalUrl)

      Object.entries(jsonProcessor.jsonRequest).forEach(([key,val])=>{

        let searchResponse = jp.search(externalUrlResponse.data, val)

        jsonProcessedObject = {...jsonProcessedObject, [key]:searchResponse }
      })

      return jsonProcessedObject;

    }
    catch (error) {
      return error
    }
  }

}

