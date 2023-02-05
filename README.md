# React Native Basic UI Setup

# Features:

:white_check_mark:  Folder Architecture  

:white_check_mark:  Stack, Tab and Drawer Navigation 

:white_check_mark:  Font and Size(height & width) Responsive Design for all mobile screens 

:white_check_mark: Light and Dark Mode 

:white_check_mark: SVG Images Rendering 

:white_check_mark: Custom Bottom Tab Bar

:white_check_mark: Language Translation

:white_check_mark: Fixed Sub Tabs

:loop: Dynamic Sub Tabs ( Coming soon... )

:loop: Animations ( Coming soon... )

:loop: More features will be added soon...


# Step 1

npx react-native init CareerWill

# Step 2

```
npm i --save @react-native-masked-view/masked-view @react-navigation/native @react-navigation/stack  metro-config react-native-gesture-handler react-native-safe-area react-native-safe-area-context react-native-screens react-native-svg react-native-svg-transformer react-native-vector-icons react-native-iphone-x-helper  @react-native-async-storage/async-storage react-native-reanimated
```

for Language translation 

```
npm i --save i18next react-i18next react-native-localize

```
Settings -> Langauge -> Choose Language



for Language Fixed Top Tabbard

```
npm i --save react-native-pager-view @react-navigation/material-top-tabs

```
Home -> Live -> Select Fixed Tabs


# Step 3

Copy assets/fonts from root

Add below lines in babel.config.js

```
  plugins: [
    'react-native-reanimated/plugin',
  ],
```

to support SVG icons replace metro.config.js file with below

```
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
 const {
   resolver: { sourceExts, assetExts },
 } = await getDefaultConfig();

 return {
   transformer: {
     babelTransformerPath: require.resolve('react-native-svg-transformer'),
     getTransformOptions: async () => ({
       transform: {
         experimentalImportSupport: false,
         inlineRequires: false,
       },
     }),
   },
   resolver: {
     assetExts: assetExts.filter(ext => ext !== 'svg'),
     sourceExts: [...sourceExts, 'svg'],
   },
 };
})();

module.exports = {
 transformer: {
   getTransformOptions: async () => ({
     transform: {
       experimentalImportSupport: false,
       inlineRequires: true,
     },
   }),
 },
};
```


for Fonts add react-native.config.js in root and copy below

```
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts/'],
};
```

and add

```
npx react-native-asset 
```

to add fonts to android/IOS


# Step 4

 npx react-native assest ( to added fonts to android/ios )
 
 cd/ios - pod install

# Step 5

npm run-android


npm run ios

# Light Mode

 <img src="/screenshots/4.png" width="300px"></img> 
 <img src="/screenshots/3.png" width="300px" ></img> 
  
  # Dark Mode
  <img src="/screenshots/2.png" width="300px" ></img> 
  <img src="/screenshots/1.png" width="300px" ></img> 

