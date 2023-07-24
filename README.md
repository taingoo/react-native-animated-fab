## React Native Animated FAB
*A JavaScript library is used for displaying draggable floating action button in React Native.*


[![npm](https://img.shields.io/npm/v/react-native-animated-fab.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/react-native-animated-fab)


<img src="https://github.com/taingoo/react-native-animated-fab/blob/master/example/src/demo.gif">


## Installation

 > Using **Yarn**
 
    yarn add react-native-animated-fab

> Or using **NPM**

    npm install react-native-animated-fab
    
## Basic Usage
<mark>React Native CLI:</mark>

```jsx
import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import FAB from 'react-native-animated-fab';

export default function App() {
  return (
    <View style={styles.container}>
      <FAB
        renderSize={60}
        borderRadius={30}
        onPress={() => Alert.alert('FAB pressed !')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```

## Props

| Prop                         | Description                                            | Required                     | Type           | Default                                   |
| ---------------------------- | -------------------------------------------------------| :----------------------------------------------:| :------------------------------------------:|:------:
| **`renderSize`**                  | Specifies the size of the FAB.                                       | :white_check_mark:           | number         |  
| **`position`**                 | Defines the position of the FAB relative to its parent container.                                      | :white_large_square:           | 'right' \| 'left' | 'right'    
| **`draggable`**           | Indicates whether the FAB is draggable.                    | :white_large_square:         | boolean         | true                               
| **`reversible`**         | Specifies if the FAN can be reverted to the original position.                                   | :white_large_square:         | boolean         | false
| **`icon`**       | Determines if the FAB displays an icon.                                     | :white_large_square:         | number         |   
| **`iconSize`**              | Specifies the size of the icon.                                        | :white_large_square:         | number         | 24     
| **`iconStyle`**           | Defines the style for the icon.                       | :white_large_square:         | ImageStyle         |                           
| **`tintColor`**             | Specifies the tint color for the icon.                                            | :white_large_square:         | string         | 
| **`borderRadius`**            | Defines the border radius for the FAB.                                          | :white_large_square:         | number         | 0  
| **`backgroundColor`**                 | Specifies the background color for the FAB.                                    | :white_large_square:         | string       | '#00000090' 
| **`xOffset`**               | Defines the horizontal offset of the FAB.                        | :white_large_square:         | number         | 16 
| **`yOffset`**                 | Defines the vertical offset of the FAB.                     | :white_large_square:         | number        | 80   
| **`idleOpacity`**                 | Specifies the opacity of the FAB when it is idle. (value from 0 to 1)                    | :white_large_square:         | number        | 0.5   
| **`idleDelayTime`**                 | Specifies the delay time before the FAB becomes idle. (value in ms)                  | :white_large_square:         | number        | 3000    
| **`children`**                 |  Specifies additional JSX elements to be rendered inside the FAB.                   | :white_large_square:         | React component        |     
| **`onPress`**            | Callback function triggered when the FAB is pressed.                                   | :white_large_square:         | function      | 
| **`onLongPress`**            | Callback function triggered when the FAB is long-pressed.                              | :white_large_square:         | function     |
| **`onDragStart`**            | Callback function triggered when the FAB drag operation starts.                               | :white_large_square:         | function     |
| **`onDragEnd`**            | Callback function triggered when the FAB drag operation ends.                            | :white_large_square:         | function     |


## License

[MIT](https://github.com/taingoo/react-native-animated-fab/blob/master/LICENSE)