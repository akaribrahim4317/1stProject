import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          F
          style={styles.TextInput}
          placeholder="Your Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color="lightseagreen"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 16,
    borderBottomColor: "#1d2e7a",
    backgroundColor: "#1d2e7a",
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
    marginBottom: 20,
  },

  TextInput: {
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "#e4d0ff",
    color: "darkblue",
    width: "90%",
    borderRadius: 6,
    padding: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 16,
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
});
