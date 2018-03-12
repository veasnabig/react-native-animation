import React from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, ScrollView, TextInput, Easing } from 'react-native';

import styles from './styles.js';
import { Layout, FontSizes } from './constant.js';

import { Ionicons, Feather } from '@expo/vector-icons';

export default class ScrollHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0)
        }
    }
    _renderList = () => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27].map((index, i) => (
            <View key={index} style={{ backgroundColor: "#eee", marginVertical: 1, padding: 10 }}>
                <Text>{i}</Text>
            </View>
        ));
    };
    render() {
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, Layout.appBarHeight],
            outputRange: [Layout.header, Layout.appBarHeight],
            extrapolate: 'clamp'
        })
        return (
            <View style={{ flex: 1, marginTop: 40 }}>
                <Animated.View style={{
                    height: headerHeight,
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'red',
                    zIndex: 1
                }}>
                </Animated.View>
                <ScrollView
                    contentContainerStyle={{ marginTop: Layout.header, paddingBottom: Layout.header }}
                    scrollEventThrottle={16}
                    onScroll={
                        Animated.event(
                            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
                        )
                    }
                >
                    {this._renderList()}
                </ScrollView>
            </View>
        );
    }
}