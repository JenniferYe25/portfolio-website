const username = 'JenniferYe25';
const repo = 'portfolio-website';

function fetchCommits() {
    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
      .then(response => response.json())
      .then(commits => {
        const commitTable = document.getElementById('commitTable');
        commitTable.innerHTML = '<tr><th>Name</th><th>Date</th><th>Message</th></tr>';
  
        commits.forEach(commit => {
          const tableRow = document.createElement('tr');
          const nameCell = document.createElement('td');
          nameCell.textContent = commit.commit.author.name;
          const dateCell = document.createElement('td');
          dateCell.textContent = commit.commit.author.date;
          const messageCell = document.createElement('td');
          messageCell.textContent = commit.commit.message;
  
          tableRow.appendChild(nameCell);
          tableRow.appendChild(dateCell);
          tableRow.appendChild(messageCell);
          commitTable.appendChild(tableRow);
        });
      })
      .catch(error => {
        console.error('Error fetching commit history:', error);
      });
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    fetchCommits();
    setInterval(fetchCommits, 60000); // Update every minute
  });