import React, { useState } from 'react';
import { View, TextInput, Button, Modal } from 'react-native';

import styles from './styles';

const TaskInput = props => {
  const [enteredTask, setEnteredTask] = useState('');

  const taskInputHandler = enteredText => {
    setEnteredTask(enteredText);
  };

  const onPressHandler = () => {
    if (!enteredTask.trim()) {
      setEnteredTask('');
      return;
    }
    props.onAddTask(enteredTask);
    closeModalHandler();
  };

  const closeModalHandler = () => {
    props.closeModal();
    setEnteredTask('');
  };
    
  return (
    <Modal visible={props.modalVissible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="To Do Task"
          style={styles.inputField}
          onChangeText={taskInputHandler}
          value={enteredTask}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={closeModalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={onPressHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaskInput;
