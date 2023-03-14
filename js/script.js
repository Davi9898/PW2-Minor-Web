import { Octokit, App } from "https://cdn.skypack.dev/octokit";
import { personalToken } from './keys.js'


// Animatie Text
const textAnimation = document.querySelector('section:nth-of-type(3) > div:nth-of-type(1)');
const textAnimation2 = document.querySelector('section:nth-of-type(3) > div:nth-of-type(2)');
const textAnimation3 = document.querySelector('section:nth-of-type(3) > div:nth-of-type(3)');
setInterval(() => {
  textAnimation.style.animation = 'none';
  textAnimation.offsetHeight; /* Forces reflow */
  textAnimation.style.animation = 'move-left 352s linear infinite';

  textAnimation2.style.animation = 'none';
  textAnimation2.offsetHeight; /* Forces reflow */
  textAnimation2.style.animation = 'move-left 290s linear infinite';

  textAnimation3.style.animation = 'none';
  textAnimation3.offsetHeight; /* Forces reflow */
  textAnimation3.style.animation = 'move-right 300s linear infinite';
}, 20000);

console.log('Banaan')

const octokit = new Octokit({ auth: personalToken });

const {
   data: repositories
   } = await octokit.rest.repos.listForAuthenticatedUser({
    per_page: 10,
    q: "Kunstzoeker CSS-to-the-rescue"
   });
console.log(repositories);



const {
  data: { login },
  } = await octokit.rest.users.getAuthenticated();
  console.log("Hello, %s", login);
  


  const owner = "Davi9898"; // Replace with your GitHub username
  const repos = ["Kunstzoeker", "css-to-the-rescue-2223"];
  
  // Get the <ul> element you want to add the repositories to
  const repoList = document.querySelector("ul");
  
  for (const repo of repos) {
    try {
      const { data: repository } = await octokit.rest.repos.get({
        owner,
        repo
      });
      console.log(`Repository "${repository.full_name}" was found!`);
  
      // Create a new <li> element for the repository
      const repoItem = document.createElement("li");

       // Create a new <img> element for the repository
      const imageEl = document.createElement("img");
      // Set the <img>'s src attribute to a unique URL for this repository
      imageEl.src = `https://example.com/images/${repository.name}.jpg`;
      repoItem.appendChild(imageEl);
  
      // Set the <li>'s text content to the repository name
      const nameEl = document.createElement("h2");
      nameEl.textContent = repository.name;
      repoItem.appendChild(nameEl);
  
      // Set the <li>'s text content to the repository description
      const descEl = document.createElement("p");
      descEl.textContent = repository.description;
      repoItem.appendChild(descEl);
  
      // Retrieve the number of commits you have made to the repository
      const { data: commits } = await octokit.rest.repos.listCommits({
        owner,
        repo,
        author: owner,
        per_page: 1000
      });
      console.log(`You have made ${commits.length} commits to the repository.`);
  
      // Display the number of commits in the <li>
      const commitsEl = document.createElement("p");
      commitsEl.textContent = `You have made ${commits.length} commits to this repository.`;
      repoItem.appendChild(commitsEl);

       
  
      // Append the <li> to the repository list
      repoList.appendChild(repoItem);
  
    } catch (error) {
      console.log(`Repository "${repo}" not found!`);
    }
  }




