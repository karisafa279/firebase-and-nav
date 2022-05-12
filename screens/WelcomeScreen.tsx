import { StyleSheet, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { Button } from "react-native-elements";
import React from "react";

const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Welcome screen!</Text>

            <View style={styles.buttons}>
                <Button 
                title="Sign In" 
                buttonStyle={styles.button}
                onPress={() => navigation.navigate('Sign In')}/>
                <Button 
                title="Sign Up" 
                type="outline"
                buttonStyle={styles.button}
                onPress={() => navigation.navigate('Sign Up')}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        flex: 1,
    },
    button: {
        marginTop: 10,
    },
});

export default WelcomeScreen;