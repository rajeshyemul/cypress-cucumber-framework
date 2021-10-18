const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: 'cypress/output/reports/',
	metadata:{
        browser: {
            name: 'chrome',
            version: '83'
        },
        device: 'Local test machine',
        platform: {
            name: 'mac',
            version: 'Catalina'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Cypress Cucumber Framework Demo'},
            {label: 'Release', value: 'Version 1.1'},
            {label: 'Report Generation Time', value: `${new Date().toLocaleString()}` }
        ]
    }
});