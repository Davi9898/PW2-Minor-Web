import { Octokit, App } from "https://cdn.skypack.dev/octokit";
import { personalToken } from './keys.js'

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
        author: owner
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




