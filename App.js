/* eslint-disable react/no-unstable-nested-components */
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TodoHeader from './Component/TodoHeader';
import TodoList from './Component/TodoList';
import store from './redux/store';
import {Provider} from 'react-redux';
function App() {
  const RootApp = () => {
    return (
      <SafeAreaView>
        <TodoHeader />
        <TodoList />
      </SafeAreaView>
    );
  };

  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}

export default App;
