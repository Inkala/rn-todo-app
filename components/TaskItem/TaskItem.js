import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const TaskItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onDelete(props.id)} >
      <View style={styles.listItem}>
        <Text>{props.task}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TaskItem;
