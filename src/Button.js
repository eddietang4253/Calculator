import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: "#333",
    fontSize: 30,
    fontWeight: "bold"
  },
  textSecondary: {
    color: "#060606"
  },
  button: {
    backgroundColor: "#DDDDDD",
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 5
  }
});

class Button extends React.Component {
  render() {
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[
          buttonStyles,
          { height: this.props.type == "operator" ? 62 : 80 }
        ]}
      >
        <Text style={textStyles}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
export default React.memo(Button);
