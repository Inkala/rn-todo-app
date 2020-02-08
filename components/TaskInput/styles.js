import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    marginTop: 50,
    flex: 1
  },
  inputField: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between'
  },
  button: {
    width:  '40%'
  }
});

export default styles;
