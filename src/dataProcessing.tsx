import Papa from 'papaparse';

export const processData = (data: string) => {
    const results = Papa.parse(data, { header: true });

    const aggregatedData: { [key: string]: { totalJobs: number; totalSalary: number; count: number; jobTitles: { [key: string]: number } } } = {};

    results.data.forEach((row: any) => {
        const year = row.work_year;
        const salary = parseFloat(row.salary_in_usd);
        const jobTitle = row.job_title;

        if (year) {
            if (!aggregatedData[year]) {
                aggregatedData[year] = { totalJobs: 0, totalSalary: 0, count: 0, jobTitles: {} };
            }
            aggregatedData[year].totalJobs += 1;
            aggregatedData[year].totalSalary += salary;
            aggregatedData[year].count += 1;

            // Count job titles
            if (!aggregatedData[year].jobTitles[jobTitle]) {
                aggregatedData[year].jobTitles[jobTitle] = 0;
            }
            aggregatedData[year].jobTitles[jobTitle] += 1;
        }
    });

    // Prepare the final data structure
    return Object.keys(aggregatedData).map((year) => ({
        year,
        totalJobs: aggregatedData[year].totalJobs,
        averageSalary: aggregatedData[year].totalSalary / aggregatedData[year].count,
        jobTitles: aggregatedData[year].jobTitles,
    }));
};
