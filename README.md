# Vocab-YOU-lary


## Overview
-1 Flow Chart    
-2 WireFrame    
-3 Login Button
    -No errors    
-4 Create Entry Form
    -No errors    
-5 Navagation Bar
    -No errors    
-12 Logout Button
    -No errors    
-11 Title 
    -No errors    
-13 Logo 
    -No errors    
-7 Database user storage
    -No errors    
-5 Vocabulary Card
    -No errors    
-6 Read Cards/math random?    
    -No errors    
-9 Update Entries
    -No errors    
-8 Delete Cards
    -No errors    
-10 Filter by Language/Tech
    -No errors    
-14 Styling
    -No errors    

## Netlify link:
https://vocabassessment.netlify.app/

## Flow Chart
https://lucid.app/lucidspark/a72277c5-1e25-48ad-af32-7ec587ab25a1/edit?beaconFlowId=246AAAEB78957518&invitationId=inv_b505a68e-6815-4260-bbfe-a1bcaa3b148a&page=0_0#

## Wireframe
https://www.figma.com/design/bQczxM1gao4nzbEjhToXg7/MVP?node-id=3-58&node-type=INSTANCE&t=8AApiwzN6KMuZ2Vb-0

## ERD link:
https://lucid.app/lucidchart/19ac9f9c-5c6c-4c4b-8959-9fddd82869b4/edit?viewport_loc=1172%2C-4671%2C1363%2C1029%2C0_0&invitationId=inv_cbf54547-d0d8-4177-9474-01f7ac323205

[VIEW PROJECT INSTRUCTIONS](./PROJECT_INSTRUCTIONS.MD)

## Topics
- [Get Started](#get-started)
- [Starting the Project](#starting-the-project)
- [Other important tidbits](#other-important-tidbits)
    - [Console messages](#console-messages)
    - [Including images with webpack](#including-images-with-webpack)
    - [Importing CSS](#importing-cssscss)
    - [Deploying on Netlify](#deploying-on-netlify)
___



## Other Important Tidbits
### Console messages
From this time forward, you will be expected to have a clean console in order for your assignments to be approved. This means that the use of `console.log` is acceptable **_(debugger is WAY better though)_** while developing, but will throw an error in your console like the image below, but all `logs` will have to be removed. You may use `console.error` and `console.warn` in your code however for messages. These need to all be removed before pushing to production unless they contain vital info for the user/developer.

![notacceptable](https://user-images.githubusercontent.com/29741570/190486163-3dd8640f-5dda-4f73-9436-6020fc9e00c4.png)

### Including Images with Webpack
If you have a folder of local images that you want to load into your code things get a little strange with webpack.  Remember the only way webpack knows about assets is if they are imported into your javascript files.  Even our CSS is not added until those files are imported into our javascript files.  Below is some sample code for how to load a local image file into your project

```js
import cat from './assets/cat.jpg';

let domString = `<img src=${cat} alt="picture of a cat"/>`;

document.getElementById('cat').innerHTMl = domString;
```

### Importing CSS/SCSS
**NOTE:** We will be using SCSS files. They are used the same way your CSS files work, with some added benefits that we will discuss later.

Since Webpack is making the connection to the JS and CSS for us and we are no longer manually adding links or script tags to our HTML, we have to get our styles to the application some way...

Here is how we add our styles using webpack:

```js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = '<h1>HELLO! You are up and running!</h1>');
  console.log('YOU ARE UP AND RUNNING!');
};

init();
```

### Deploying on Netlify

- Build Command: `npm run build`
- Publish directory: `dist`
- Add Environmental Variables (NOT REQUIRED for Apps that do not use API Keys, etc)
    - Any Enviromental variables you are using in your `.env` file should be added to Netlify. 
        - Go to Site settings > Build & deploy > Environment > Environment variables and the keys and values there.

- Update Firebase URL Settings
    - In Firebase under Authentication select sign in methods, scroll to Authorized domains. Add your Netlify URL.
        
## More Info and Resources on Webpack
- Visit the [Webpack documentation](https://webpack.js.org/concepts/) if you want to explore more.
- [Info on our Webpack Config](https://github.com/nss-nightclass-projects/Night-Class-Resources/blob/master/book-2-patterns-and-tools/chapters/webpack-configure.md)
