import React from "react";
import { Text, View } from "react-native";
import Button from "./Button";
import calculate, { initialState } from "./actions";
import { styles } from "./styles";
export default class Screen extends React.Component {
  state = initialState;
  handleTap = (type, value) => {
    this.setState(state => calculate(type, value, state));
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.value}>
          {parseFloat(this.state.displayValue).toLocaleString()}
        </Text>
        <View style={styles.row}>
          <View>
            <View style={styles.row}>
              <Button text="7" onPress={() => this.handleTap("number", 7)} />
              <Button text="8" onPress={() => this.handleTap("number", 8)} />
              <Button text="9" onPress={() => this.handleTap("number", 9)} />
            </View>
            <View style={styles.row}>
              <Button text="4" onPress={() => this.handleTap("number", 4)} />
              <Button text="5" onPress={() => this.handleTap("number", 5)} />
              <Button text="6" onPress={() => this.handleTap("number", 6)} />
            </View>
            <View style={styles.row}>
              <Button text="1" onPress={() => this.handleTap("number", 1)} />
              <Button text="2" onPress={() => this.handleTap("number", 2)} />
              <Button text="3" onPress={() => this.handleTap("number", 3)} />
            </View>
            <View style={styles.row}>
              <Button text="C" onPress={() => this.handleTap("clear")} />
              <Button text="0" onPress={() => this.handleTap("number", 0)} />
              <Button text="." onPress={() => this.handleTap("number", ".")} />
            </View>
          </View>
          <View>
            <Button
              text="/"
              type="operator"
              onPress={() => this.handleTap("operator", "/")}
            />
            <Button
              text="*"
              type="operator"
              onPress={() => this.handleTap("operator", "*")}
            />
            <Button
              text="-"
              type="operator"
              onPress={() => this.handleTap("operator", "-")}
            />
            <Button
              text="+"
              type="operator"
              onPress={() => this.handleTap("operator", "+")}
            />
            <Button
              type="operator"
              text="="
              onPress={() => this.handleTap("equal")}
            />
          </View>
        </View>
      </View>
    );
  }
}
