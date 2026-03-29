/**
 * Redirects the user to the specific game/client HTML page.
 * @param {string} fileName - The name of the HTML file to open.
 */
function launchGame(fileName) {
    console.log("Launching: " + fileName);
    
    // This tells the browser to change the URL to your game file
    window.location.href = fileName;
}
