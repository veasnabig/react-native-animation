import React from 'react';
import { StyleSheet, Text, View, Animated, PanResponder } from 'react-native';

export default class AnimatedSequence extends React.Component {
    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
    }
    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 2000
        }).start()
    }
    render() {
        const interpolateRotation = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        const animateStyle = {
            transform: [
                {
                    rotate: interpolateRotation
                }
            ]
        }
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box]} >
                    <Animated.Text style={[styles.text, animateStyle]}>Spinner</Animated.Text>
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
        backgroundColor: '#1dd1a1',
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
