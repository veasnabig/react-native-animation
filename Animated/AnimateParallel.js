import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default class AnimatedPallel extends React.Component {
    componentWillMount() {
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(0);
    }
    componentDidMount() {
        Animated.parallel([
            Animated.timing(this.animatedValue1, {
                toValue: 500,
                duration: 1000
            }),
            Animated.spring(this.animatedValue2, {
                toValue: 1.5
            })
        ]).start()
    }
    render() {
        const animatedStyle = {
            transform: [
                { translateY: this.animatedValue1 },
                { scale: this.animatedValue2 }
            ]
        }
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle]} >
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
        // justifyContent: 'center',
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
