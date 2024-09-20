
markdown
Copy code
# ML Engineer Salary Data Visualization

This project visualizes salary data for Machine Learning Engineers from 2020 to 2024, utilizing React and TypeScript. It provides a comprehensive analysis through a sortable table, a line graph, and insights generated via a chat interface powered by LLMs.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Data Visualization**: Interactive line graph showcasing salary trends over the years.
- **Sortable Table**: Displays aggregated data, including the number of jobs and average salary per year, sortable by any column.
- **Job Titles Breakdown**: Clicking on a row in the main table reveals a second table with job titles and their corresponding counts for that year.
- **Chat Interface**: Integrates a chat component that generates insights based on the salary data using LLMs.

## Technologies Used

- **Frontend**: React, TypeScript
- **Data Visualization**: Recharts
- **Data Parsing**: PapaParse
- **CSS Framework**: Ant Design (optional)
- **Development Tools**: VSCode, Node.js, npm

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sanskrutitayade/JobTrendAnalytics.git
   cd ml-engineer-salary-visualization
Install dependencies:

bash
Copy code
npm install
Add your CSV file:

Place your data.csv file in the public directory.
Run the application:

bash
Copy code
npm start
Usage
Navigate to http://localhost:3000 in your web browser to view the application.
Interact with the main table to sort data and view aggregated job titles by clicking on the years.
Use the chat interface to get insights based on the salary data.
File Structure
bash
Copy code
/ml-engineer-salary-visualization
├── /public
│   ├── data.csv
│   ├── index.html
├── /src
│   ├── /components
│   │   ├── ChatComponent.tsx
│   │   ├── SalaryLineChart.tsx
│   │   └── SalaryTable.tsx
│   ├── App.tsx
│   ├── dataProcessing.ts
│   ├── index.tsx
│   ├── styles.css
├── package.json
├── tsconfig.json
└── README.md
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.
