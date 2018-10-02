import { authRequest } from '.';

export const examplePostRequest = body => authRequest.post('relative_route', {
  body
})
  .then(response => response.data)

export const exampleGetRequest = () => authRequest.get('relative_route', {})
  .then(response => response.data)

