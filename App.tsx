import React from 'react';
import {SafeAreaView} from 'react-native';
import GridDragList from './src/components/GridDragList';
import {MOCK_DATA} from './src/constants/mock-data';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <GridDragList data={MOCK_DATA} width={300} height={1000} columns={3} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default React.memo(App);
