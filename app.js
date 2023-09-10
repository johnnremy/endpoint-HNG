const express = require('express');
const app = express();

// Define a route that listens to GET requests
app.get('/api', (req, res) => {
  // Retrieve query parameters
  const { slack_name, track } = req.query;

  // Get the current day of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[new Date().getDay()];

  // Get the current UTC time (accurate within +/-2 minutes)
  const now = new Date();
  const utcTime = now.toISOString();

  // Hardcoded GitHub URLs
  const githubFileUrl = 'https://github.com/remy01gh/endpoint-HNG/blob/main/app.js';
  const githubRepoUrl = 'https://github.com/remy01gh/endpoint-HNG';

  // Prepare the JSON response
  const jsonResponse = {
    slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  // Send the JSON response
  res.json(jsonResponse);
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});