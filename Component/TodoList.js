/* eslint-disable prettier/prettier */
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IconFea from 'react-native-vector-icons/Feather';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTask} from '../redux/taskSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todo = useSelector(state => state.tasks);

  const itemDelete = id => {
    dispatch(deleteTask({id: id}));
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}> {item.name}</Text>
        <TouchableOpacity onPress={() => itemDelete(item.id)}>
          <IconFea name="trash" size={30} color="red" />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={todo}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: 'black',
  },
  delete: {
    fontSize: 24,
    color: 'red',
  },
});
