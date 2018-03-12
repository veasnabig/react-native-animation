import React from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';

export default class AnimatedPallel extends React.Component {
    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
        this.value = 0;
        this.animatedValue.addListener(({ value }) => {
            this.value = value;
        })
        this.fronInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg']
        })
        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        })
    }
    flipCard() {
        (this.value >= 90 ?
            Animated.spring(this.animatedValue, {
                toValue: 0,
                friction: 8,
                tension: 10
            }).start()
            :
            Animated.spring(this.animatedValue, {
                toValue: 180,
                friction: 9,
                tension: 10
            }).start()
        )
    }
    render() {
        const fronAnimatedStyle = {
            transform: [
                { rotateY: this.fronInterpolate }
            ]
        }
        const backAnimatedStyle = {
            transform: [
                { rotateY: this.backInterpolate }
            ]
        }
        return (
            <View style={styles.container}>
                <View>
                    <Animated.View style={[styles.flipCard, fronAnimatedStyle]}>
                        <Text style={styles.text}>
                            This text is flipping on the front;
                        </Text>
                    </Animated.View>
                    <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}>
                        <Text style={styles.text}>
                            This text is flipping on the back;
                        </Text>
                    </Animated.View>
                </View>
                <TouchableOpacity onPress={() => this.flipCard()}>
                    <Text>Flip!</Text>
                </TouchableOpacity>
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
    flipCard: {
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        backfaceVisibility: 'hidden'
    },
    flipCardBack: {
        backgroundColor: 'red',
        position: 'absolute',
        top: 0
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
