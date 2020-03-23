/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/andrecolon/followers")
    .then(response => {
        console.log("An Array of followers objects", response.data)

        let entryPoint = document.querySelector('.cards')
        response.data.forEach(profile => {
            let newUserCard = userCard(profile)
            entryPoint.appendChild(newUserCard)
        })
    })
    .catch(err => {
        console.log("Something happened - like a 404 or bad request", err)
    })
    // })


// Skip to Step 3.


/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

let container = document.querySelector('.cards');


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

let followersArray = ["kingluddite", "mgroff1", "zbrown36", "mrattana", "RyanPlanteNJ", "NateTheDev1", "reannalp"];


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
let userCard = obj => {

    let newCard = document.createElement('div')
    let userImg = document.createElement('img')
    let userInfo = document.createElement('div')
    let userName = document.createElement('h3')
    let userGitName = document.createElement('p')
    let userLocation = document.createElement('p')
    let userProfile = document.createElement('p')
    let userLink = document.createElement('a')
    let followerLink = document.createElement('a')
    let followingLink = document.createElement('a')
    let userFollowers = document.createElement('p')
    let userFollowing = document.createElement('p')
    let userBio = document.createElement('p')




    newCard.classList.add('card')
    userInfo.classList.add('card-info')
    userName.classList.add('name')
    userGitName.classList.add('username')
        // userLocation.classList.add('')
        // userProfile.classList.add('')
        // userFollowers.classList.add('')
        // userFollowing.classList.add('')
        //userBio.classList.add(userbio)

    newCard.appendChild(userInfo)
    newCard.appendChild(userImg)
    userInfo.appendChild(userImg)
    userProfile.appendChild(userLink)
    userProfile.appendChild(followerLink)
    userProfile.appendChild(followingLink)


    userInfo.appendChild(userGitName)
    userInfo.appendChild(userLocation)
    userInfo.appendChild(userProfile)
    userInfo.appendChild(userFollowers)
    userInfo.appendChild(userFollowing)
    userInfo.appendChild(userBio)


    userName.textContent = obj.name
    userImg.src = obj.avatar_url
    userGitName.textContent = obj.login

    userLocation.textContent = `Location: ${obj.location}`
    userLink.href = obj.html_url

    userBio.textContent = obj.bio

    // Create the text element and append data to element
    userProfile.textContent = "Profile: ";
    userProfile.appendChild(userLink);
    userLink.href = `http: //github.com/${obj.html_url}`;
    userLink.textContent = `http://github.com/${obj.html_url}`;

    userFollowers.textContent = "Followers: ";
    userFollowers.appendChild(followerLink);
    followerLink.href = obj.followers_url;
    followerLink.textContent = `${obj.followers_url}`;


    userFollowing.textContent = "Following: ";
    userFollowing.appendChild(followingLink);
    followingLink.href = obj.following_url;
    followingLink.textContent = `${obj.following_url}`;






    // newuser.addEventListener('click', () => {
    //     newuser.classList.add('selected')
    // })
    return newCard
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/