import React from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, ScrollView, TextInput, Easing } from 'react-native';

import styles from './styles.js';
import { Layout, FontSizes } from './constant.js';

import { Ionicons, Feather } from '@expo/vector-icons';

export default class header extends React.Component {
    componentWillMount() {
        this.animatedVlaue = new Animated.Value(0);
    }
    componentDidMount() {
        Animated.timing(this.animatedVlaue, {
            toValue: 1,
            duration: 500,
            easing: Easing.bezier(0.81, .53, .66, .99)
        }).start();
    }
    state = {
        scrollY: new Animated.Value(0),
        largeTitle: 'LargeTitle',
        currentOffsetY: new Animated.Value(0)
    };
    _onScroll(event) {
        Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { onScroll: this.props.onScroll }
        )(event)
    }
    _renderList = () => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27].map((index, i) => (
            <View key={index} style={{ backgroundColor: "#eee", marginVertical: 1, padding: 10 }}>
                <Text>{i}</Text>
            </View>
        ));
    };
    render() {
        const translateY = this.state.scrollY.interpolate({
            inputRange: [0, 130],
            outputRange: [0, -130],
            extrapolate: 'clamp'
        })
        const scale = this.state.scrollY.interpolate({
            inputRange: [0, 90],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })
        const appBarTitleCenter = this.state.scrollY.interpolate({
            inputRange: [0, Layout.header - Layout.appBarHeight],
            outputRange: [-10, 0],
            extrapolate: 'clamp'
        })
        const appBarTitleCenterColor = this.state.scrollY.interpolate({
            inputRange: [0, Layout.header - Layout.appBarHeight],
            outputRange: ["#fff", "#000"],
            extrapolate: 'clamp'
        })
        const animatedStyle = {
            transform: [{ scale: this.animatedVlaue }]
        }
        return (
            <Animated.View style={[styles.container, animatedStyle]}>
                <View style={styles.statusBar} />
                <View style={{
                    zIndex: 1,
                    backgroundColor: '#fff',
                    height: Layout.appBarHeight,
                    flexDirection: 'row'
                }}>
                    <View style={{ flex: 1.5, flexDirection: 'row' }}>
                        <View style={styles.appBarIconLeft}>
                            <Ionicons name="ios-arrow-back" size={FontSizes.appBarIconSize} />
                        </View>
                        <View style={styles.appBarTitleLeft}>
                            <Text style={{ fontSize: FontSizes.smallTitle }}>SmallTitle</Text>
                        </View>
                    </View>
                    <Animated.View style={[styles.appBarTitleCenter, { bottom: appBarTitleCenter }]}>
                        <Animated.Text style={{
                            fontSize: FontSizes.smallTitle,
                            color: appBarTitleCenterColor
                            // transform: [{ scale }]
                        }}>
                            {this.state.largeTitle}
                            {/* {this.state.currentOffsetY > 30 ? this.state.largeTitle : ""} */}
                        </Animated.Text>
                    </Animated.View>
                    <View style={styles.appBarIconRight}>
                    </View>
                </View>
                <Animated.ScrollView
                    contentContainerStyle={{ marginTop: 130, paddingBottom: 130 }}
                    style={{ flex: 1, backgroundColor: '#fff' }}
                    scrollEventThrottle={16}
                    onScroll={
                        Animated.event(
                            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
                        )
                    }
                    // onScroll={this._onScroll.bind(this)}
                >
                    {this._renderList()}
                </Animated.ScrollView>
                <Animated.View style={[
                    styles.header,
                    { transform: [{ translateY }] }
                ]}>
                    <Animated.View style={{
                        height: Layout.largeTopBarHeight,
                        paddingLeft: 12,
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: Layout.appBarHeight,
                        left: 0,
                        right: 0
                    }}>
                        <Animated.Text
                            style={{
                                color: '#000',
                                fontSize: 30,
                            }}>
                            {this.state.largeTitle}
                        </Animated.Text>
                    </Animated.View>
                    <View style={styles.searchBarHeight}>
                        <View style={styles.searchBox}>
                            <View style={styles.textInputIcon}>
                                <Ionicons name="ios-search" size={14} color="#8E8E93" />
                            </View>
                            <View style={{ flex: 1, marginLeft: 7 }}>
                                <TextInput
                                    style={{ height: 22 }}
                                    placeholder="Search"
                                    placeholderTextColor="#8E8E93"
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                        </View>
                    </View>
                </Animated.View>
            </Animated.View >
        );
    }
}