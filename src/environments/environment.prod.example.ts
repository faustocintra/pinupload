// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  authUrl: 'https://api.pinterest.com/oauth/',
  redirectUri: 'https://willdfz.github.io/pinupload/oauth2/callback',
  tokenUri: 'https://api.pinterest.com/v1/oauth/token',
  apiUri: 'https://api.pinterest.com/v1/',
  clientId: '5048713209628899439', 
  clientSecret: '8def3b7ac59572fa4266a0e44061416632c45f2bd5ff2267ed7fba5ce0312f85'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
