// Initial start with totale
// When user clicks filter, it shows result based on input
// When user clicks total it goes back to it's inital start
document.addEventListener('DOMContentLoaded', function() {
    const jobCountDiv = document.getElementById('job-count');
    const filterForm = document.getElementById('filter-form');
    const totalButton = document.getElementById('total-button');

    // Function to fetch total job count from LinkedIn API
    async function fetchTotalJobCount() {
        try {
            // Replace with actual LinkedIn API call
            let response = await fetch('https://api.linkedin.com/v2/jobPostings?q=total');
            let data = await response.json();
            jobCountDiv.textContent = `Total Jobs: ${data.total}`;
        } catch (error) {
            jobCountDiv.textContent = 'Error fetching total job count';
        }
    }

    // Function to fetch filtered job count from LinkedIn API
    async function fetchFilteredJobCount(filters) {
        try {
            // Replace with actual LinkedIn API call and query parameters
            let query = new URLSearchParams(filters).toString();
            let response = await fetch(`https://api.linkedin.com/v2/jobPostings?${query}`);
            let data = await response.json();
            jobCountDiv.textContent = `Filtered Jobs: ${data.total}`;
        } catch (error) {
            jobCountDiv.textContent = 'Error fetching filtered job count';
        }
    }

    // Event listener for form submission
    filterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let filters = {
            country: document.getElementById('country').value,
            jobField: document.getElementById('job-field').value,
            yoe: document.getElementById('yoe').value
        };
        fetchFilteredJobCount(filters);
    });

    // Event listener for total button
    totalButton.addEventListener('click', function() {
        fetchTotalJobCount();
    });

    // Initial fetch of total job count
    fetchTotalJobCount();
});
