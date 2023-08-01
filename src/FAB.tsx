import React, { useRef, useState } from 'react';
import type { ImageStyle, ViewStyle } from 'react-native';
import {
  Animated,
  Image,
  PanResponder,
  TouchableOpacity,
  View,
} from 'react-native';
import styles, { height, width } from './FAB.styles';
import type { FABProps } from './FAB.types';
import { ICONS } from './assets';

let timer: NodeJS.Timeout;

export const FAB: React.FC<FABProps> = ({
  renderSize,
  draggable = true,
  reversible = false,
  icon = ICONS.iconDefault,
  iconSize = 24,
  iconStyle,
  tintColor,
  borderRadius,
  backgroundColor,
  topOffset = 60,
  rightOffset = 16,
  bottomOffset = 60,
  leftOffset = 16,
  idleOpacity = 0.5,
  idleDelayTime = 3000,
  children,
  onPress,
  onLongPress,
  onDragStart,
  onDragEnd,
  ...touchableProps
}) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const [opacity, setOpacity] = useState<number>(idleOpacity);
  const HORIZONTAL_BOUNDS = width - renderSize - (leftOffset + rightOffset);
  const VERTICAL_BOUNDS = height - renderSize - (bottomOffset + topOffset);
  const VERTICAL_BOUNDS_RANGE = [-VERTICAL_BOUNDS, 0];

  const wrapperStyle: (ViewStyle | any)[] = [
    { position: 'absolute' },
    { bottom: bottomOffset },
    { right: rightOffset },
  ];

  const containerStyle: (ViewStyle | any)[] = [
    styles.defaultStyle,
    { width: renderSize, height: renderSize },
    { opacity: opacity },
    borderRadius && { borderRadius: borderRadius },
    backgroundColor && { backgroundColor: backgroundColor },
  ];

  const defaultIconStyle: ImageStyle = {
    height: iconSize,
    width: iconSize,
    tintColor: tintColor,
    ...iconStyle,
  };

  const transform = [
    { translateX: pan.x },
    {
      translateY: pan.y.interpolate({
        inputRange: VERTICAL_BOUNDS_RANGE,
        outputRange: VERTICAL_BOUNDS_RANGE,
        extrapolate: 'clamp',
      }),
    },
  ];

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        onDragStart && onDragStart(gestureState);
        return draggable && (gestureState.dx !== 0 || gestureState.dy !== 0);
      },
      onPanResponderGrant: () => {
        timer && clearTimeout(timer);
        pan.setOffset((pan as any).__getValue());
        pan.setValue({ x: 0, y: 0 });
        setOpacity(1);
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderEnd: (_, gestureState) => {
        if (reversible) {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        } else {
          let newX = 0;
          let xValue = (pan.x as any)._value;
          let centerHorizontal = (width - renderSize) / 2;
          if (xValue > 0) {
            newX = Math.abs(xValue) > centerHorizontal ? HORIZONTAL_BOUNDS : 0;
          } else {
            newX = Math.abs(xValue) > centerHorizontal ? -HORIZONTAL_BOUNDS : 0;
          }
          Animated.spring(pan, {
            toValue: { x: newX, y: (pan.y as any)._value },
            useNativeDriver: false,
          }).start();
        }
        onDragEnd && onDragEnd(gestureState);
        timer = setTimeout(() => {
          setOpacity(idleOpacity);
        }, idleDelayTime);
      },
    })
  ).current;

  return (
    <View style={wrapperStyle}>
      <Animated.View {...panResponder.panHandlers} style={{ transform }}>
        <TouchableOpacity
          onPress={onPress}
          onLongPress={onLongPress}
          {...touchableProps}
        >
          <View style={containerStyle}>
            {children ? (
              children
            ) : (
              <Image
                source={icon}
                style={defaultIconStyle}
                resizeMode="contain"
              />
            )}
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};
