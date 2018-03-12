import React from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';

export default class AnimatedPallel extends React.Component {
    state = {
        scrollY: new Animated.Value(0),
        animateView: new Animated.Value(0)
    };
    _renderList = () => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((index, i) => (
            <View key={index} style={{ backgroundColor: "#eee", marginVertical: 1, padding: 10 }}>
                <Text>{i}</Text>
            </View>
        ));
    };
    render() {
        const translateY = this.state.scrollY.interpolate({
            inputRange: [0, 90],
            outputRange: [0, -90],
            extrapolate: 'clamp'
        })
        const scale = this.state.scrollY.interpolate({
            inputRange: [0, 90],
            outputRange: [1, 0.5],
            extrapolate: 'clamp'
        })
        const textTranslateY = this.state.scrollY.interpolate({
            inputRange: [0, 90],
            outputRange: [0, 10],
            extrapolate: 'clamp'
        })
        return (
            <View style={styles.container}>
                <Animated.ScrollView
                    contentContainerStyle={{ marginTop: 200 }}
                    style={{ flex: 1 }}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                    )}>
                    {this._renderList()}
                </Animated.ScrollView>
                <Animated.View style={{
                    height: 200,
                    backgroundColor: 'gray',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    transform: [{ translateY }],
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingBottom: 20
                }}>
                    <Animated.Text style={{
                        fontSize: 50,
                        color: '#fff',
                        transform: [{ scale }, { translateY: textTranslateY }],
                    }}>
                        LargeTitle
                    </Animated.Text>
                </Animated.View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 150,
        backgroundColor: 'gray',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    }
});
