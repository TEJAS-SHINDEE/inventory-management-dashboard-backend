## user credentials 
    email - test@gmail.com
    pass - test@123

# inventory management backend - MERN

this is backend service for inventory management in MERN stack.
created backend that secured API using jwt authentication and also used firebase google login to easily streamline login process


## what I implemented 
1. REST API's for user login and products.
2. JWT based authentication
3. CURD operations
4. connected to online mongodb atlas service


## tech stack 
- nodejs
- expressjs
- mongodb atlas
- firebase for login with google

## How to setup project

  ### 1. clone repo
  ### 2. install dependencies
  ### 3. create .env file 
  ### 4. start server

## routes 

  ### for user authentication
      POST - /api/auth/google-login   -> lobin with google ( firebase )
      POST - /api/auth/login       -> login via email and pass
      POST - /api/auth/register    -> for new user 

  ### for product
      GET  - /api/products
      POST - /api/products
      PUT - /api/products/:id 
      DELETE - /api/products/:id 



      


  
  
