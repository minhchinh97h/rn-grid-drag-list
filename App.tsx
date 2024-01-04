import React from 'react';
import {SafeAreaView} from 'react-native';
import GridDragList from './src/components/GridDragList';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GridDragList width={300} height={1000} />
    </SafeAreaView>
  );
};

export default React.memo(App);
