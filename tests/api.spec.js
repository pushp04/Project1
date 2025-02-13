const { test, expect } = require('@playwright/test');

let userid;

test.fail('Get',async ({ request }) =>{

    const response =await request.get('https://reqres.in/api/users?page=2')
    console.log( await response.json())
    
    expect(response.status()).toBe(200);
})

test.skip('Post',async ({ request }) =>{
    const response =await request.post('https://reqres.in/api/users',
        {
            data: {
                "name": "morpheus",
                "job": "leader"
            },
            headers:{
                "Accept":"application/json"
            }
        }
    )

    console.log( await response.json())
    expect(response.status()).toBe(201);

    let res = await response.json()

    userid=res.id
    console.log(userid)
})

test.skip('Put',async ({ request }) =>{
    const response =await request.put('https://reqres.in/api/users/'+userid,
        {
            data: {
                "name": "Putname",
                "job": "PutJOb"
            },
            headers:{
                "Accept":"application/json"
            }
        }
    )

    console.log( await response.json())
    expect(response.status()).toBe(200);

})

test('Delete',async ({ request }) =>{
    const response =await request.delete('https://reqres.in/api/users/'+userid)
    expect(response.status()).toBe(204);
})

test.fixme('Delete_fixme',async ({ request }) =>{
    const response =await request.delete('https://reqres.in/api/users/'+userid)
    console.log(await response.json())
    expect(response.status()).toBe(204);
})