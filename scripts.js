// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const projectsSection = document.getElementById('projects');
    
    // Example of fetching data from an API or a JSON file.
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(project => {
                const listItem = document.createElement('li');
                listItem.textContent = project.name;
                projectsSection.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching projects:', error));
});
