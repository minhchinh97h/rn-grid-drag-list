import React, {PropsWithChildren, useCallback, useMemo} from 'react';
import {ScrollView, Text} from 'react-native';
import GridDragListItem from './GridDragListItem';

interface Props extends PropsWithChildren {
  width?: number;
  height?: number;
  activisionPercentage?: number;
  columns: number;
  data: any[];
}

const GridDragList = (props: Props) => {
  const itemWidth = useMemo(() => {
    if (props.width && props.columns) {
      return props.width / props.columns;
    }

    return 0;
  }, [props.columns, props.width]);

  const itemHeight = useMemo(() => {
    return 200;
  }, []);

  const renderItem = useCallback(
    (item: any, index: number) => {
      return (
        <GridDragListItem
          key={`grid-drag-list-item-${item.value}`}
          item={item}
          index={index}
          columns={props.columns}
          itemHeight={itemHeight}
          itemWidth={itemWidth}
        />
      );
    },
    [itemHeight, itemWidth, props.columns],
  );

  return (
    <ScrollView
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: 'pink',
      }}>
      {props.data.map((dataItem, index) => renderItem(dataItem, index))}
    </ScrollView>
  );
};

export default React.memo(GridDragList);
