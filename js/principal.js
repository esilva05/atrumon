async function readJSONFile(filePath) {
    try {
        // Fetch the JSON file
        const response = await fetch(filePath);
        
        // Check if the fetch was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parse the JSON content
        const data = await response.json();
        
        // Log the data to the console (or use it as needed)
        console.log(data);
        
        // Return the data for further use
        return data;
    } catch (error) {
        console.error('Error reading JSON file:', error);
    }
}

// Call the function with the path to your JSON file
readJSONFile('primera_edicion.json');