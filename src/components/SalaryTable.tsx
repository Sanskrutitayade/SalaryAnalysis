import React from 'react';

interface SalaryTableProps {
    data: any[];
    onRowClick: (year: string) => void;
}

const SalaryTable: React.FC<SalaryTableProps> = ({ data, onRowClick }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Jobs</th>
                    <th>Average Salary (USD)</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row.year} onClick={() => onRowClick(row.year)}>
                        <td>{row.year}</td>
                        <td>{row.totalJobs}</td>
                        <td>{row.averageSalary.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SalaryTable;
