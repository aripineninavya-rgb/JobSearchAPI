const jobsearch = async () => {
  try {
    const result = `https://jobsearch.api.jobtechdev.se/search?q=Software%20Developer&offset=0&limit=10`;
    const response = await fetch(result);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
jobsearch();
