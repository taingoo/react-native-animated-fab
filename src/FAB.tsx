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
  position = 'right',
  draggable = true,
  reversible = false,
  icon = ICONS.iconDefault,
  iconSize = 24,
  iconStyle,
  tintColor,
  borderRadius,
  backgroundColor,
  xOffset = 16,
  yOffset = 80,
  idleOpacity = 0.5,
  idleDelayTime = 3000,
  children,
  onPress = () => {},
  onLongPress = () => {},
  onDragStart = () => {},
  onDragEnd = () => {},
  ...touchableProps
}) => {
  const [opacity, setOpacity] = useState<number>(idleOpacity);
  const pan = useRef(new Animated.ValueXY()).current;
  const HORIZONTAL_BOUNDS = -width + renderSize + 2 * xOffset;
  const VERTICAL_BOUNDS = -height + renderSize + 2 * yOffset;
  const HORIZONTAL_BOUNDS_RANGE =
    position === 'right' ? [HORIZONTAL_BOUNDS, 0] : [0, -HORIZONTAL_BOUNDS];
  const VERTICAL_BOUNDS_RANGE = [VERTICAL_BOUNDS, 0];

  const wrapperStyle: (ViewStyle | any)[] = [
    { position: 'absolute' },
    { bottom: yOffset },
    { opacity: opacity },
    position === 'right' && { right: xOffset },
    position === 'left' && { left: xOffset },
  ];

  const containerStyle: (ViewStyle | any)[] = [
    styles.defaultStyle,
    { width: renderSize, height: renderSize },
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
    {
      translateX: pan.x.interpolate({
        inputRange: HORIZONTAL_BOUNDS_RANGE,
        outputRange: HORIZONTAL_BOUNDS_RANGE,
        extrapolate: 'clamp',
      }),
    },
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
        onDragStart(gestureState);
        return (
          !!draggable &&
          Math.abs(gestureState.dx) !== 0 &&
          Math.abs(gestureState.dy) !== 0
        );
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
          Animated.spring(pan, {
            toValue: { x: 0, y: (pan.y as any)._value },
            useNativeDriver: false,
          }).start();
          pan.flattenOffset();
        }
        onDragEnd(gestureState);
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
