function handleSearch(query) {
    const lowerCaseQuery = query.toLowerCase();

    // Check for specific search terms and navigate accordingly
    if (lowerCaseQuery === "animals") {
      window.location.href = "#Animal"; // Replace with the actual URL for the Animals page
    } else if (lowerCaseQuery === "gallery") {
      window.location.href = "#Gallery"; // Replace with the actual URL for the Gallery page
    } else if (lowerCaseQuery === "contact us") {
      window.location.href = "#Contact"; // Replace with the actual URL for the Contact Us page
    } 
    else if (lowerCaseQuery === "crab") {
        window.location.href = "crab.html"; // Replace with the actual URL for the Contact Us page
      }
      else if (lowerCaseQuery === "dolphin") {
        window.location.href = "dolphin.html"; // Replace with the actual URL for the Contact Us page
      }
      else if (lowerCaseQuery === "crab") {
        window.location.href = "crab.html"; // Replace with the actual URL for the Contact Us page
      }
    else if (lowerCaseQuery === "contact us") {
        window.location.href = "#contact"; // Replace with the actual URL for the Contact Us page
      }else {
      // Handle other search terms or display results
      updateResults(query);
    }
  }

  // Function to update the displayed results based on the search query
  function updateResults(query) {
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = "";
    const message = document.createElement("div");
    message.textContent = `No specific result found for "${query}". Displaying general results.`;
    resultsContainer.appendChild(message);
  }

  // Event listener for the input field to trigger the search
  document.getElementById("search-bar").addEventListener("input", function(event) {
    const searchQuery = event.target.value;
    handleSearch(searchQuery);
  });

  