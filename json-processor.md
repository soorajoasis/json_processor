# JSON Processor

JSON processor is a pre-processor api which accepts the external url and a JSON document as the input. Internally the controller calls the external url supplied and maps the JSON output from the external URL to the JSON document provided.

## npm packages used.

1. axios
2. jmespath

## axios

Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface.

- npmjs ( https://www.npmjs.com/package/axios )

- documentation ( https://axios-http.com/ )

## jmespath

JMESPath is a query language for JSON. It takes a JSON document and transform it into another JSON document through a JMESPath expression.

- npmjs ( https://www.npmjs.com/package/jmespath )
- documentation ( https://jmespath.org/ )

**Other library considered for JSON processing**

jsonpath has been tested along with jmespath for JSON processing.

Why jmespath preffered.?

- For JSON Query it found jmespath have more flexible options.
- More number of downloads recently.
- More recent and regular updates.

## Endpoint details.

### Input Schema.

```json
{"externalUrl": "string", "jsonRequest": {}}
```

Example 1:

```json
{
  "externalUrl": "http://universities.hipolabs.com/search?country=India",
  "jsonRequest": {
    "country_code": "[0].alpha_two_code",
    "name": "[0].name",
    "domain": "[0].domains[0]",
    "state": "[0].\"state-province\"",
    "country": "[0].country"
  }
}
```

Response:

```json
{
  "country_code": "IN",
  "name": "University of Petroleum and Energy Studies",
  "domain": "upes.ac.in",
  "state": "Dehradun",
  "country": "India"
}
```

In the above example the URL gives an array for data object, and to choose the first element displayed pointing to the 0th element.

Example 2:

```json
{
  "externalUrl": "https://api.nationalize.io/?name=david",
  "jsonRequest": {
    "name": "name",
    "us": "country[0].probability",
    "au": "country[1].probability",
    "nz": "country[2].probability"
  }
}
```

Response:

```json
{
  "name": "david",
  "us": 0.03443833723326355,
  "au": 0.02926072441495639,
  "nz": 0.02468736647258503
}
```

In this example nested json is being used to pick the required information.
