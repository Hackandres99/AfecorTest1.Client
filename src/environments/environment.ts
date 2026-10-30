import packageJson from '../../package.json';

export const environment = {
    appVersion: packageJson.version,
    apiUrl: 'https://localhost:7289',

    serviceLayer: {
        url: '/b1s/v1',
        CompanyDB: 'SBODemoGT',
        UserName: 'manager',
        Password: 'manager'
    },

}