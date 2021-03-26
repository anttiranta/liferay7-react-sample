# Liferay 7 portlet with React and Webpack

This portlet aims to demo how React and Liferay MVC resource commands can be used to create single page portlets. 

Portlet just shows the current time, and a button to refresh the time.

The demonstrator consists of two parts:

1. A [Liferay Resouce Command](https://help.liferay.com/hc/en-us/articles/360017885812-MVC-Resource-Command) backend that handles all requests as resource requests. 
   It leverages the [GSON](https://github.com/google/gson) for JSON encoding, so JSON response can be returned to the frontend. 
2. An [React](https://facebook.github.io/react/) frontend that can also be run **without Liferay** (thanks to a fake server), which can greatly accelerate the development.


## Requirements

Needs Liferay 7.1+ (tested with Liferay 7.1)

Might not work with very old browsers (tested with IE 11 tho).  

## Development (without Liferay)

Run `npm install` in reactapp folder.

Start the dev server and run the app with `npm start`

## Deployment

Run `blade gw clean deploy` (or from IDE)

Then add portlet to whatever page you want in Liferay.

## Testing

Run `npm test` in reactapp folder 

To collect coverage report: `npm run coverage`
