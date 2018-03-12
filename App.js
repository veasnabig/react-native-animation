import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Animated
import AnimatedTiming from './Animated/AnimatedTiming.js'
import AnimatedSpring from './Animated/AnimatedSpring.js';
import AnimatedDecay from './Animated/AnimatedDecay.js';
import Interpolate from './Animated/Interpolate.js';
import AnimatedSequence from './Animated/AnimatedSequence.js';
import AnimatedStagger from './Animated/AnimatedStagger.js';
import AnimatedParallel from './Animated/AnimateParallel.js';
import AnimatedFlip from './Animated/AnimatedFlip.js';
import AnimatedScrollView from './Animated/AnimatedScrollView.js';
import Header from './Animated/Header/index.js';

export default class App extends React.Component {
  render() {
    return (
      <Header />
    );
  }
}