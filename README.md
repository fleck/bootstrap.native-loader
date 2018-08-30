# bootstrap.native-loader

This is a webpack loader for [bootstrap.native](https://github.com/thednp/bootstrap.native).

```
yarn add bootstrap.native
```
```
yarn add --dev bootstrap.native-loader
```

In your webpack config file, in the rules array, add this object. This will compile all of the bootstrap.native modules.
```javascript
{
  test: /bootstrap\.native/,
  use: {
    loader: 'bootstrap.native-loader'
  }
}
```
There's also an only option. (cannot be used at the same time as the ignore option)
```javascript
{
  test: /bootstrap\.native/,
  use: {
    loader: 'bootstrap.native-loader',
    options: {
      only: ['modal', 'dropdown']
    }
  }
}
```
Also, an ignore option. (cannot be used at the same time as the only option)
```javascript
{
  test: /bootstrap\.native/,
  use: {
    loader: 'bootstrap.native-loader',
    options: {
      ignore: ['carousel', 'button']
    }
  }
}
```
A full list of components that can be listed under ignore or only are shown below. 
```javascript
['alert', 'button',  'carousel', 'collapse', 'dropdown', 'modal', 'popover', 'scrollspy', 'tab', 'tooltip']
```

Once you have the above setup in your add the code below to include the custom build in your bundle.
```
import 'bootstrap.native';
```
or if you use require
```
require('bootstrap.native');
```
