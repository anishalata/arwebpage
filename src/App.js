// App.js

import React from 'react';
import ARView from './components/ARView'; // Import the ARView component

// Define the App component
function App() {
    // Define the URL of the USDZ file
    const usdzUrl = 'https://drive.google.com/file/d/1CPRGewmH-bcs8sAUJ2zLwY_AWsBS9ARt/view?usp=sharing';

    // Render the App component with the ARView component passing the usdzUrl as a prop
    return (
        <div className="App">
            {/* Display a heading */}
            <h1>AR Experience</h1>
            {/* Render the ARView component */}
            <ARView usdzUrl={usdzUrl} />
        </div>
    );
}

// Export the App component to be used as the main entry point of the application
export default App;
