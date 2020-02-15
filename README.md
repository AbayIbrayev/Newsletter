# Newsletter
A Mailchimp Newsletter Sign Up Page Using Node.js, Express, body-parser, request, Bootstrap and https://mailchimp.com/

In the app.js file you can find an **options** object, where you will need to set up your specific details:
```
let options = {
    url: 'https://usX.api.mailchimp.com/3.0/lists/UNIQUE_ID',
    method: "POST",
    headers: {
      "Authorization": "USERNAME API_KEY"
    },
    body: jsonData
  };
 ```
 - In usX, X - is the ID of your allocated mailchimp's server
 - UNIQUE_ID - is your mailchimp's unique Identifier
 - API_KEY - is your mailchimps's API key
