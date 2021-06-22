Joke API

This project was my second project in the General Assembly Software Engineering Immersive Course. It consisted of creating a React app in a 48-hour time frame with my GA classmate Michael Henderson. 

We deployed the app using Netlify.

Deployed Project: https://joke-api.netlify.app/


Technologies Used:
- JavaScript ES6
- React.js 
- HTML5
- CSS
- Bulma
- Axios 
- Insomnia REST Client 
- Yarn
- react-router-dom 
- The external API used: https://sv443.net/jokeapi/v2/?ref=apilist.fun#getting-started

Overview:

The app's main function was to render a random selection of jokes from the external API depending on the category chosen by the site visitor. The visitor can then choose to rate the joke out of 5 stars. Once a joke had been rated, it was stored in the rated jokes page using local storage. A button can be clicked to clear the saved jokes in order to make room for new ones. 

Using the data: 

After much research, we decided to use the joke API. After exploring said API in Insomnia REST Client and reading through the documentation, we discovered the API had many categories which we could use to differentiate the data with.  
After spending time familiarising ourselves with the different possible end points, we created an axios get request, setting the chosen category to the useState hook in order for the user to be able to choose which category the joke was pulled from. We also decided at this point to enable the safe-mode in order to avoid any offensive jokes being displayed on our app. 
