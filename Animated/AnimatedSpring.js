import React from 'react';
import { StyleSheet, Text, View, Animated, Easing, TouchableWithoutFeedback } from 'react-native';

export default class AnimatedSpring extends React.Component {
    constructor(props) {
        super(props);
        this.handlePressIn = this.handlePressIn.bind(this);
        this.handlePressOut = this.handlePressOut.bind(this);
    }
    componentWillMount() {
        this.animatedVlaue = new Animated.Value(1);
    }
    handlePressIn() {
        Animated.spring(this.animatedVlaue, {
            toValue: .6
        }).start()
    }
    handlePressOut() {
        Animated.spring(this.animatedVlaue, {
            toValue: 1,
            friction: 3,
            tension: 40
        }).start()
    }
    render() {
        const animatedStyle = {
            transform: [{ scale: this.animatedVlaue }]
        }
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPressIn={this.handlePressIn}
                    onPressOut={this.handlePressOut}
                >
                    <Animated.View style={[styles.button, animatedStyle]}>
                        <Text style={styles.text}>Click Here</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
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
    button: {
        backgroundColor: '#1dd1a1',
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 18
    }
});
