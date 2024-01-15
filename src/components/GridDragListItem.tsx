import React, {useMemo} from 'react';
import {Text} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureStateChangeEvent,
  GestureUpdateEvent,
  PanGestureChangeEventPayload,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import {getItemOriginPosition} from '../helpers/position-helpers';
import Animated from 'react-native-reanimated';

interface Props {
  item: any;
  index: number;
  itemWidth: number;
  itemHeight: number;
  columns: number;
}

const GridDragListItem = (props: Props) => {
  const originPosition = useMemo(() => {
    return getItemOriginPosition(
      props.itemWidth,
      props.itemHeight,
      props.columns,
      props.index,
    );
  }, [props.columns, props.index, props.itemHeight, props.itemWidth]);

  const panGesture = useMemo(
    () =>
      Gesture.Pan()
        .activateAfterLongPress(500)
        .onStart(
          (event: GestureStateChangeEvent<PanGestureHandlerEventPayload>) => {},
        )
        .onChange(
          (
            event: GestureUpdateEvent<
              PanGestureHandlerEventPayload & PanGestureChangeEventPayload
            >,
          ) => {},
        ),
    [],
  );

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          width: props.itemWidth,
          height: props.itemHeight,
          backgroundColor: 'yellow',
          transform: [
            {
              translateX: originPosition.x,
            },
            {
              translateY: originPosition.y,
            },
          ],
        }}>
        <Text>{props.item.value}</Text>
      </Animated.View>
    </GestureDetector>
  );
};

export default React.memo(GridDragListItem);
