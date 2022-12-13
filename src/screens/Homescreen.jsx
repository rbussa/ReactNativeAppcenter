import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

class Homescreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Home Page</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
  });

export default Homescreen;