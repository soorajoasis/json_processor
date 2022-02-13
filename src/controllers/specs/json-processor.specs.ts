import {SchemaObject} from '@loopback/rest';

const jsonProcessorSchema: SchemaObject = {
  type: 'object',
  required: ['externalUrl', 'jsonRequest'],
  properties: {
    externalUrl: {
      type: 'string',
    },
    jsonRequest: {
      type: 'object'
    }
  }
}

export const jsonProcessorRequestBody = {
  description : 'The external url and the json request',
  required: true,
  content: {
    'application/json': {schema: jsonProcessorSchema}
  }
}
