import React from 'react';
import { StyleSheet, Text, View, Animated, PanResponder } from 'react-native';

export default class Interpolate extends React.Component {
    componentWillMount() {
        this.animateValue = new Animated.Value(0);
    }
    componentDidMount() {
        this._changeColor();
    }
    _changeColor() {
        Animated.timing(this.animateValue, {
            toValue: 150,
            duration: 1000
        }).start()
    }
    render() {
        const interpolateColor = this.animateValue.interpolate({
            inputRange: [0, 100],
            outputRange: ['#10ac84', '#2e86de']
        })
        const animatedStyle = {
            backgroundColor: interpolateColor,
            transform: [
                {
                    translateY: this.animateValue
                }
            ]
        }
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle]} >
                    <Text style={styles.text}>Drag Me</Text>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        // backgroundColor: '#1dd1a1',
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 18
    }
});
