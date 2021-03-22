
Cypress.Commands.add('getDeviceCode', function() {
    cy.request({
        url: 'https://allegro.pl/auth/oauth/device?client_id=843d0f99aa074bed8bf0a3465400deac',
        method: 'POST',
        timeout: 10000,
        headers: {
            'Authorization' : 'Basic ODQzZDBmOTlhYTA3NGJlZDhiZjBhMzQ2NTQwMGRlYWM6aXljTklEejhHZXQzRXRBaVBwWVI3QU9xQk1Zc28waDlhNTRCQzh4TlZ1VWlSVDYzQ1ZRM0RyUG80RTZ1UmN3ZA==',
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Cookie' : 'QXLSESSID=ffe00dff15e4b8b17b4a635ffc71ca479cecd9b60bcc68//00; _cmuid=crztr9kj-bz73-54wz-8w90-5jswrbmrgqng; datadome=57xjae47dbdZrCVSZ5T.lsxvPrTzMVjF5dATPk6qWFVFtt~o7hx0TN~dpMxgKZ4gN_aW.QeaAKvE_5sxt~VVTahYDyW.8Op5M4umjkpcbz'
        },
        });
    });

Cypress.Commands.add('getCategories', Id => {
    cy.request({
        method: 'GET',
        failOnStatusCode: false,
        url: 'https://api.allegro.pl/sale/categories/' + Id,
        headers: {
            'accept': 'application/vnd.allegro.public.v1+json',
            'accept-language' : 'pl',
            'authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIyMjI2ODIyMiIsInNjb3BlIjpbImFsbGVncm86YXBpOm9yZGVyczpyZWFkIiwiYWxsZWdybzphcGk6cHJvZmlsZTp3cml0ZSIsImFsbGVncm86YXBpOnNhbGU6b2ZmZXJzOndyaXRlIiwiYWxsZWdybzphcGk6YmlsbGluZzpyZWFkIiwiYWxsZWdybzphcGk6Y2FtcGFpZ25zIiwiYWxsZWdybzphcGk6ZGlzcHV0ZXMiLCJhbGxlZ3JvOmFwaTpiaWRzIiwiYWxsZWdybzphcGk6c2FsZTpvZmZlcnM6cmVhZCIsImFsbGVncm86YXBpOm9yZGVyczp3cml0ZSIsImFsbGVncm86YXBpOmFkcyIsImFsbGVncm86YXBpOnBheW1lbnRzOndyaXRlIiwiYWxsZWdybzphcGk6c2FsZTpzZXR0aW5nczp3cml0ZSIsImFsbGVncm86YXBpOnByb2ZpbGU6cmVhZCIsImFsbGVncm86YXBpOnJhdGluZ3MiLCJhbGxlZ3JvOmFwaTpzYWxlOnNldHRpbmdzOnJlYWQiLCJhbGxlZ3JvOmFwaTpwYXltZW50czpyZWFkIl0sImFsbGVncm9fYXBpIjp0cnVlLCJhdGkiOiIxNjdjZDMzZS1lMmJiLTQzZTktYTYwOS04NjEzYjM0ZWMwYWMiLCJleHAiOjE2MjM4NTMzOTEsImp0aSI6ImVmZTBmMDkxLTljMTctNDZjMi05MDY1LTcwNDFlNmJkNjE0ZSIsImNsaWVudF9pZCI6Ijg0M2QwZjk5YWEwNzRiZWQ4YmYwYTM0NjU0MDBkZWFjIn0.EQgmvq--nvrIXIqslXsPwtVfHqMsyoto7j11uAC5jUy7uIs6Dk2LO7wymjIqbyVZf6qr8SJIcAiyhs8b7xy3J6w1toOdlUZfAn15yaSbB_lq4d28lFinwIAzCvBPCYM2chJx0lv2jJHfJWCpYuCyp10wmmfM5sl4tbgT0Xfkd7nmlcDCcGiJ66hc6sBokZtc4rhoePXzn0veWPlumOK-Yos26LNMYpvHzcQ3_Y73mmrWw6o0tzftFrVHQg4fhtqYF3yxoGFdIvuAcpyEE-E1qlvnWoig_rVA-8iOaQ4aW1PjJRO_wYUYB5nOKKFPH-Nxz0g7nR6oNYQOhQ6Hggv0Kw'
        },
        timeout: 1000
    })
})