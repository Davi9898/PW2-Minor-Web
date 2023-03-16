import { Octokit, App } from "https://cdn.skypack.dev/octokit";
import { personalToken } from './keys.js'


// Animatie Text
const textAnimation = document.querySelector('section:nth-of-type(4) > div:nth-of-type(1)');
const textAnimation2 = document.querySelector('section:nth-of-type(4) > div:nth-of-type(2)');
const textAnimation3 = document.querySelector('section:nth-of-type(4) > div:nth-of-type(3)');
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
    q: "Kunstzoeker CSS-to-the-rescue project_tech Boomagotchi"
   });
console.log(repositories);



const {
  data: { login },
  } = await octokit.rest.users.getAuthenticated();
  console.log("Hello, %s", login);
  


  const owner = "Davi9898"; // Replace with your GitHub username
  const repos = ["Kunstzoeker", "CSS-Vuurwerkshow"];
  
  // Get the <ul> element you want to add the repositories to
  const repoList = document.querySelector("section:nth-of-type(3) ul");
  
  for (const repo of repos) {
    try {
      const { data: repository } = await octokit.rest.repos.get({
        owner,
        repo
      });
      console.log(`Repository "${repository.full_name}" was found!`);
  
      // Create a new <li> element for the repository
      const repoItem = document.createElement("li");
  
      // Create a new <a> element for the repository URL
      const repoLink = document.createElement("a");
      repoLink.href = repository.html_url; // Set the URL to the repository's GitHub page
      repoItem.appendChild(repoLink);
  
      // Create a new <img> element for the repository
      const imageEl = document.createElement("img");
      // Set the <img>'s src attribute to a unique URL for this repository
      imageEl.src = `https://opengraph.githubassets.com/1/Davi9898/${repository.name}`;
      repoLink.appendChild(imageEl);
  
      // Set the <li>'s text content to the repository name
      const nameEl = document.createElement("h2");
      nameEl.textContent = repository.name;
      repoLink.appendChild(nameEl);
  
      // Set the <li>'s text content to the repository description
      const descEl = document.createElement("p");
      descEl.textContent = repository.description;
      repoLink.appendChild(descEl);
  
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
      commitsEl.textContent = `Gemaakt in ${commits.length} commits.`;
      repoLink.appendChild(commitsEl);
  
      // Add a click event listener to the repository image element
      imageEl.addEventListener("click", () => {
        // Redirect the user to the repository's GitHub page
        window.location.href = repository.html_url;
      });
  
      // Append the <li> to the repository list
      repoList.appendChild(repoItem);
    } catch (error) {
      console.log(`Repository "${repo}" not found!`);
    }
  }

  // Modal
  const workButton = document.querySelector('nav p:nth-of-type(2)')
  const homeButton = document.querySelector('nav p:nth-of-type(1)')
  const meerButton = document.querySelector('section:nth-of-type(3) a')

  meerButton.addEventListener('click', () => {
    showModal()
  })

  homeButton.addEventListener('click', () => {
    hideModal()
  })

  function hideModal() {
    let modal = document.querySelector('.details')
    modal.classList.add('hidden')
  }

  workButton.addEventListener('click', () => {
    showModal()
    console.log('het werkt')
  })

  function showModal() {
    let modal = document.querySelector('.details')
    modal.classList.remove('hidden')
  }
  
  // Get the <ul> element you want to add the repositories to
  const repoList2 = document.querySelector("section:nth-of-type(5) > ul");

  const repos2 = ["Kunstzoeker", "CSS-Vuurwerkshow", "project_tech", "Boomagotchi" ];
  
  for (const repo of repos2) {
    try {
      const { data: repository } = await octokit.rest.repos.get({
        owner,
        repo
      });
      console.log(`Repository "${repository.full_name}" was found!`);
  
      // Create a new <li> element for the repository
      const repoItem2 = document.createElement("li");
  
      // Create a new <a> element for the repository URL
      const repoLink2 = document.createElement("a");
      repoLink2.href = repository.html_url; // Set the URL to the repository's GitHub page
      repoItem2.appendChild(repoLink2);
  
      // Create a new <img> element for the repository
      const imageEl2 = document.createElement("img");
      // Set the <img>'s src attribute to a unique URL for this repository
      imageEl2.src = `https://opengraph.githubassets.com/1/Davi9898/${repository.name}`;
      repoLink2.appendChild(imageEl2);
  
      // Set the <li>'s text content to the repository name
      const nameEl2 = document.createElement("h2");
      nameEl2.textContent = repository.name;
      repoLink2.appendChild(nameEl2);
  
      // Set the <li>'s text content to the repository description
      const descEl2 = document.createElement("p");
      descEl2.textContent = repository.description;
      repoLink2.appendChild(descEl2);
  
      // Retrieve the number of commits you have made to the repository
      const { data: commits } = await octokit.rest.repos.listCommits({
        owner,
        repo,
        author: owner,
        per_page: 1000
      });
      console.log(`You have made ${commits.length} commits to the repository.`);
  
      // Display the number of commits in the <li>
      const commitsEl2 = document.createElement("p");
      commitsEl2.textContent = `Gemaakt in ${commits.length} commits.`;
      repoLink2.appendChild(commitsEl2);
  
      // Add a click event listener to the repository image element
      imageEl2.addEventListener("click", () => {
        // Redirect the user to the repository's GitHub page
        window.location.href = repository.html_url;
      });
  
      // Append the <li> to the repository list
      repoList2.appendChild(repoItem2);
    } catch (error) {
      console.log(`Repository "${repo}" not found!`);
    }
  }