import React, { useState } from 'react';
import { View, FlatList, Button } from 'react-native';
import shortid from 'shortid';

import TaskItem from './components/TaskItem/TaskItem';
import TaskInput from './components/TaskInput/TaskInput';
import styles from './AppStyles';

const App = () => {
  const [courseTasks, setCourseTasks] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addTaskHandler = enteredTask => {
    setCourseTasks(currentTasks => [
      ...currentTasks,
      { uid: shortid.generate(), task: enteredTask }
    ]);
  };

  const deleteTaskHandler = taskId => {
    setCourseTasks(currentTask =>
      currentTask.filter(task => task.uid !== taskId)
    );
  };

  const modalVisibilityHandler = () => {
    setIsAddMode(!isAddMode);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.button}>
        <Button title="Add New Task" onPress={modalVisibilityHandler} />
      </View>
      <TaskInput
        onAddTask={addTaskHandler}
        modalVissible={isAddMode}
        closeModal={modalVisibilityHandler}
      />
      <FlatList
        keyExtractor={item => item.uid}
        data={courseTasks}
        renderItem={taskItem => (
          <TaskItem
            id={taskItem.item.uid}
            task={taskItem.item.task}
            onDelete={deleteTaskHandler}
          />
        )}
      ></FlatList>
    </View>
  );
};

export default App;
