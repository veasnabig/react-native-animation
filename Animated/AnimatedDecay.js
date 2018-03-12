import React from 'react';
import { StyleSheet, Text, View, Animated, PanResponder } from 'react-native';

export default class AnimatedSpring extends React.Component {
    componentWillMount() {
        this.animatedValue = new Animated.ValueXY();
        this._value = { x: 0, y: 0 };
        this.animatedValue.addListener((value) => this._value = value);
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestreState) => true,
            onMoveShouldSetPanResponder: (eve, gestureState) => true,
            onPanResponderGrant: (e, gestreState) => {
                this.animatedValue.setOffset({
                    x: this._value.x,
                    y: this._value.y
                })
                this.animatedValue.setValue({ x: 0, y: 0 })
            },
            onPanResponderMove: Animated.event([
                null, { dx: this.animatedValue.x, dy: this.animatedValue.y }
            ]),
            onPanResponderRelease: (e, gestreState) => {
                this.animatedValue.flattenOffset();
                Animated.decay(this.animatedValue, {
                    deceleration: 0.997,
                    velocity: { x: gestreState.vx, y: gestreState.vy }
                }).start();
            }
        })
    }
    render() {
        const animatedStyle = {
            transform: this.animatedValue.getTranslateTransform()
        }
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle]} {... this.panResponder.panHandlers}>
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
