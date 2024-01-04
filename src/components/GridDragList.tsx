import React, {PropsWithChildren} from 'react';
import {ScrollView, Text} from 'react-native';

interface Props extends PropsWithChildren {
  width?: number;
  height?: number;
  columns?: number;
  activisionPercentage?: number;
  data?: any[];
}

const GridDragList = (props: Props) => {
  return (
    <ScrollView
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: 'pink',
      }}>
      <Text>Test</Text>
    </ScrollView>
  );
};

export default React.memo(GridDragList);
