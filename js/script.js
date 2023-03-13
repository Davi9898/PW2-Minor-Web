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
  
  const repoList = document.querySelector("ul");

// Loop through the repositories and create a list item for each one
repositories.forEach(repo => {
  // Create a new list item element
  const listItem = document.createElement("li");

  // Set the text content of the list item to the repository name
  listItem.textContent = repo.name;

  // Append the list item to the repository list
  repoList.appendChild(listItem);
});

const owner = "Davi9898"; // Replace with your GitHub username
const repos = ["Kunstzoeker", "css-to-the-rescue-2223"];

for (const repo of repos) {
  try {
    const { data: repository } = await octokit.rest.repos.get({
      owner,
      repo
    });
    console.log(`Repository "${repository.full_name}" was found!`);
    // Do something with the repository data, like displaying it on your webpage
  } catch (error) {
    console.log(`Repository "${repo}" not found!`);
  }
}