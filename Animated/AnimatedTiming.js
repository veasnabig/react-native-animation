import React from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

export default class AnimatedTiming extends React.Component {
    componentWillMount() {
        this.animatedValue = new Animated.Value(1);
    }
    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 300,
            duration: 1000,
            easing: Easing.bezier(0.81, .53, .66, .99)
        }).start()
    }
    render() {
        const animateStyle = { height: this.animatedValue }
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, animateStyle]} />
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
        width: 100,
        // height: 150
    }
});
