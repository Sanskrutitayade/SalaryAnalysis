import React, { useEffect, useState } from 'react';
import SalaryTable from './components/SalaryTable';
import SalaryLineChart from './components/SalaryLineChart';
import { processData } from './dataProcessing';

const App: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [selectedYearData, setSelectedYearData] = useState<any[]>([]);

    useEffect(() => {
        fetch('/data.csv')
            .then((response) => response.text())
            .then((csvData) => {
                const parsedData = processData(csvData);
                console.log(parsedData); // Check if data is parsed correctly
                setData(parsedData);
            });
    }, []);

    const handleRowClick = (year: string) => {
        const yearData = data.find((row) => row.year === year);
        if (yearData) {
            const jobTitlesArray = Object.entries(yearData.jobTitles).map(([title, count]) => ({
                title,
                count,
            }));
            setSelectedYearData(jobTitlesArray);
        }
    };

    return (
        <div>
            <h1>ML Engineer Salary Data</h1>
            <SalaryTable data={data} onRowClick={handleRowClick} />
            <SalaryLineChart data={data} />
            {selectedYearData.length > 0 && (
                <div>
                    <h2>Job Titles for {data.find(row => row.year === selectedYearData[0]?.year)?.year}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Job Title</th>
                                <th>Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedYearData.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.title}</td>
                                    <td>{row.count}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default App;
