# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: APITest.spec.js >> Update User
- Location: tests\APITest.spec.js:25:6

# Error details

```
ReferenceError: response is not defined
```

# Test source

```ts
  1  | import { expect, test } from "@playwright/test";
  2  | 
  3  | test('Get Users', async ({ request }) => {
  4  |     const response = await request.get('https://reqres.in/api/users/2');
  5  |     console.log(await response.json());
  6  |     expect(response.status()).toBe(200);
  7  | })
  8  | 
  9  | 
  10 | test('Create User', async ( { request }) => {
  11 |     const response = await request.post('https://reqres.in/api/users', {
  12 |         data: {
  13 |             name: 'Smita QA',
  14 |             job: 'Software Engineer'
  15 |         },
  16 | 
  17 |         headers : {
  18 |             'Accept': 'application/json'
  19 |         }
  20 |     });
  21 |     console.log(await response.json());
  22 |     expect(response.status()).toBe(201);
  23 | })
  24 | 
  25 | test.only('Update User' , async ( { request }) => {
  26 | 
  27 |     await request.put('https://reqres.in/api/users/2', {
  28 |         data: {
  29 |             name: 'Smita QA',
  30 |             job: 'Senior Software Engineer'
  31 |         },
  32 |         headers: {
  33 |             'Accept': 'application/json'
  34 |         }
  35 |     });
  36 | 
> 37 |      console.log(await response.json());
     |                        ^ ReferenceError: response is not defined
  38 |     expect(response.status()).toBe(200);
  39 | })
```