import type {
  ImageStyle,
  PanResponderGestureState,
  TouchableOpacityProps,
} from 'react-native';

export type IPosition = 'right' | 'left';

export interface FABProps extends TouchableOpacityProps {
  /**
   * @description Specifies the size of the FAB.
   */
  renderSize: number;
  /**
   * @description Defines the position of the FAB relative to its parent container.
   */
  position?: IPosition;
  /**
   * @description Indicates whether the FAB is draggable.
   */
  draggable?: boolean;
  /**
   * @description Specifies if the FAN can be reverted to the original position.
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
   * @description Defines the horizontal offset of the FAB.
   */
  xOffset?: number;
  /**
   * @description Defines the vertical offset of the FAB.
   */
  yOffset?: number;
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
