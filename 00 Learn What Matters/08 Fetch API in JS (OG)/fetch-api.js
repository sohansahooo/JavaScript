// Function to fetch data from an API
function fetchData(url) {
    // Make a request to the specified URL
    fetch(url)
      .then(response => {
        // Check if the response is okay (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the response as JSON
        return response.json();
      })
      .then(data => {
        // Log the data to the console
        console.log(data);
      })
      .catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Error fetching data:', error);
      });
  }
  
  // Example usage: Fetch data from a public API
  fetchData('https://api.example.com/data');
  