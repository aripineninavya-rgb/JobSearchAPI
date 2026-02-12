const jobsearch = async () => {
  try {
    const result = `https://jobsearch.api.jobtechdev.se/search?q=Software%20Developer&offset=0&limit=10`;
    const response = await fetch(result);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
jobsearch();
