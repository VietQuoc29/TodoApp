import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTask} from '../redux/taskSlice';

const TodoHeader = () => {
  const [todo, setTodo] = useState('');
  const dispact = useDispatch();
  const onSubmitTask = () => {
    if (todo.trim().length === 0) {
      Alert.alert('You need to add a task');
      setTodo('');
      return;
    }
    dispact(
      addTask({
        task: todo,
      }),
    );
    setTodo('');
  };

  return (
    <View>
      <Text style={styles.title}> Todo List</Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          style={styles.input}
          placeholder="Add"
          onChangeText={text => setTodo(text)}
          value={todo}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onSubmitTask}>
        <Text style={styles.add}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    margin: 10,
    width: '90%',
    borderRadius: 15,
  },
  button: {
    height: 80,
    width: 80,
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'red',
    padding: 10,
    top: 650,
    left: 300,
    borderRadius: 50,
  },
  add: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
});
export default TodoHeader;
