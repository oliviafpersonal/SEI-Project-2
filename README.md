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

In order to allow the users to rate the joke, we created a function in which a if-else statement was used to store the rated jokes to local storage which was then displayed on the rated jokes page by creating an empty array in which we pushed the local storage items into. 

Challenges:

Once we had decided we wanted to implement local storage in order to give the users of the site an interactive option, it was at first a struggle to transfer the skills of having used local storage in vanilla JavaScript in my project one, to using it in React. Overcoming this challenge was extremely satisfying. 


Wins:

Having hands on practice of using React was an exciting experience. Pair coding was also really fun as it showed me the importance of being able to read and decipher someone else's code as everyone has their own unique style. 
Using an external API also taught me the importance of diving into the documentation and really understanding how the API works before using it - which is something I also now appreciate when using new technologies such as CSS packages. 

Remaining bugs:

Post deployment I noticed the images used in our About section no longer render making the styling I had implemented not functional. 
