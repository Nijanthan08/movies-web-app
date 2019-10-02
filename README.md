# movies-web-app

Movie Review Portal build using React JS

1. View the list of Movies available in Portal

![](/screenshots/Movies.jpg)

2. Check complete Movie information and add Reviews

![](/screenshots/MovieInfo.jpg)

![](/screenshots/CheckReviews.jpg)

3. Add a Movie to the portal

![](/screenshots/AddMovie.jpg)

4. View Top Rated Movies

![](/screenshots/Top10Movies.jpg)

# Please follow the steps mentioned below to host the WEB APP in your local:

1. Make sure to install the following softwares mentioned below

    Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
    Download Url : https://nodejs.org/en/
    
    Visual Studio Code: Code Editor (OPTIONAL).
    Download Url : https://code.visualstudio.com/
    
2. Clone the repository to your local and run the following command in the project folder to install the node modules

     npm install
     
3. Run the following command to start the application.

     npm start
     
   Now the application should get launched in the following URL : http://localhost:3000
   
4. Connect the application to the rest-api using the apiEndPoint url  mentioned in the following file:
    
      src\util\config.json
      
5. Refer the following repository to host the backend REST API in your local

      https://github.com/Nijanthan08/movies-rest-api

5. Refer the following repository to host the Spring Boot Batch Application for processing User Reviews and publish Top Rated Movies

      https://github.com/Nijanthan08/movies-spring-boot-batch
