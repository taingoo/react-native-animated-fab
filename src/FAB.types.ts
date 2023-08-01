import type {
  ImageStyle,
  PanResponderGestureState,
  TouchableOpacityProps,
} from 'react-native';

export interface FABProps extends TouchableOpacityProps {
  /**
   * @description Specifies the size of the FAB.
   */
  renderSize: number;
  /**
   * @description Indicates whether the FAB is draggable.
   */
  draggable?: boolean;
  /**
   * @description Specifies if the FAB can be reverted to the original position.
   */
  reversible?: boolean;
  /**
   * @description Determines if the FAB displays an icon.
   */
  icon?: number;
  /**
   * @description Specifies the size of the icon.
   */
  iconSize?: number;
  /**
   * @description Defines the style for the icon.
   */
  iconStyle?: ImageStyle;
  /**
   * @description Specifies the tint color for the icon.
   */
  tintColor?: string;
  /**
   * @description Defines the border radius for the FAB.
   */
  borderRadius?: number;
  /**
   * @description Specifies the background color for the FAB.
   */
  backgroundColor?: string;
  /**
   * @description Defines the top offset of the FAB.
   */
  topOffset?: number;
  /**
   * @description Defines the right offset of the FAB.
   */
  rightOffset?: number;
  /**
   * @description Defines the bottom offset of the FAB.
   */
  bottomOffset?: number;
  /**
   * @description Defines the left offset of the FAB.
   */
  leftOffset?: number;
  /**
   * @description Specifies the opacity of the FAB when it is idle.
   */
  idleOpacity?: number;
  /**
   * @description Specifies the delay time before the FAB becomes idle.
   */
  idleDelayTime?: number;
  /**
   * @description Specifies additional JSX elements to be rendered inside the FAB.
   */
  children?: JSX.Element;
  /**
   * @description Callback function triggered when the FAB is pressed.
   */
  onPress?: () => void;
  /**
   * @description Callback function triggered when the FAB is long-pressed.
   */
  onLongPress?: () => void;
  /**
   * @description Callback function triggered when the FAB drag operation starts.
   */
  onDragStart?: (state: PanResponderGestureState) => void;
  /**
   * @description Callback function triggered when the FAB drag operation ends.
   */
  onDragEnd?: (state: PanResponderGestureState) => void;
}
