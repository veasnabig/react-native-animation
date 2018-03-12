import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default class AnimatedStagger extends React.Component {
    componentWillMount() {
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(1);
        this.animatedWidth = new Animated.Value(200);
        this.animatedHeight = new Animated.Value(200);
        this.animatedRadius = new Animated.Value(0);
    }
    componentDidMount() {
        Animated.sequence([
            Animated.timing(this.animatedValue1, {
                toValue: 200,
                duration: 700
            }),
            // Animated.spring(this.animatedValue2, {
            //     toValue: .3
            // }),
            Animated.timing(this.animatedWidth, {
                toValue: 300,
                duration: 300
            }),
            Animated.timing(this.animatedRadius, {
                toValue: 50,
                duration: 300
            }),
            Animated.timing(this.animatedHeight, {
                toValue: 70,
                duration: 200
            }),
            Animated.timing(this.animatedValue1, {
                toValue: 0,
                duration: 500
            }),
            Animated.spring(this.animatedValue2, {
                toValue: .7
            }),
            Animated.timing(this.animatedWidth, {
                toValue: 70,
                duration: 200
            }),
            Animated.spring(this.animatedValue2, {
                toValue: 1.5,
            }),
        ]).start()
    }
    render() {
        const animatedStyle = {
            width: this.animatedWidth,
            height: this.animatedHeight,
            borderRadius: this.animatedRadius,
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
