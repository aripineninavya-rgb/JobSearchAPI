type employer = {
  name: string;
};

type workplaceAddress = {
  municipality: string;
  city: string;
};

type jobAd = {
  headline: string;
  publication_date: string;
  employer?: employer;
  workplace_address?: workplaceAddress;
  hits: jobAd[];
};

// const municipality = 1280; // Malmö municipality ID

const jobsearch: (keywords: string[]) => Promise<void> = async (
  keywords: string[],
) => {
  try {
    const result = `https://jobsearch.api.jobtechdev.se/search?municipality=1280&q=${keywords.join("%20")}&offset=0&limit=2`;
    const response = await fetch(result);
    const data: jobAd = await response.json();
    // console.dir(data, { depth: null });

    console.log(
      `\nFound ${data.hits.length} jobs for Software Developer in municipality Malmö:\n`,
    );
    console.log(`-`.repeat(50));

    data.hits.forEach((job: jobAd, index: number) => {
      const pubDate = new Date(job.publication_date);
      console.dir(job.headline, { depth: 1 });
      console.dir(job.employer, { depth: 3 });
      console.dir(job.publication_date, { depth: 1 });

      console.log(`${index + 1}. ${job.headline}`);
      console.log(`Company: ${job.employer?.name}`);
      console.log(`Location: ${job.workplace_address?.municipality}`);
      console.log(`Publication: ${pubDate.toISOString().split("T")[0]}`);
      console.log(`-`.repeat(50));
    });

    // console.dir(data.hits[0], { depth: null });
  } catch (error) {
    console.error(error);
  }
};

const runApp = () => {
  try {
    console.log("Started job search...");
    console.log(
      `Fetching job listings for Software Developer in Malmö using jobsearch API...`,
    );
    // Define search keywords
    const keywords = ["Software Developer"];
    jobsearch(keywords);
  } catch (error) {
    console.error(error);
  }
};
runApp();
