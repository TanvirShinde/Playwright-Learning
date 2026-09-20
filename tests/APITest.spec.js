import { expect, test } from "@playwright/test";

test('Get Users', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    console.log(await response.json());
    expect(response.status()).toBe(200);
})

var userId ;

test('Create User', async ( { request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            name: 'mayal QA',
            job: 'Software Engineer'
        },

        headers : {
            'Accept': 'application/json'
        }
    });
    console.log(await response.json());
    expect(response.status()).toBe(201);

    var res = await response.json();
    userId = res.id;
    console.log("User ID is : " + userId);
})

test('Update User' , async ( { request }) => {

   const response = await request.put('https://reqres.in/api/users/${userId}', {
        data: {
            name: 'Smita QA',
            job: 'Senior Software Engineer'
        },
        headers: {
            'Accept': 'application/json'
        }
    });

     console.log(await response.json());
    expect(response.status()).toBe(200);
})

test('Delete Record' , async ( { request }) => {
    const response = await request.delete('https://reqres.in/api/users/${userId}');
    console.log(await response.status());
    expect(response.status()).toBe(204);
})
