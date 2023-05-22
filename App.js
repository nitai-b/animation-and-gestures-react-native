import React, {useRef} from 'react';
import {Animated, Button, PanResponder, StyleSheet, View} from 'react-native';

export default function App() {
    const diameter = 100, opacity = 1;

    // this is an animated object that is used in the pan responder move it along with the user's finger
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = React.useRef(PanResponder.create({
        // Ask to be the responder:
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
        onPanResponderGrant: (evt, gestureState) => {
            pan.setOffset({x: pan.x._value, y: pan.y._value})
        },
        onPanResponderMove: (_, gestureState) => {
            pan.setValue({x: gestureState.dx, y: gestureState.dy})
        },
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderRelease: (evt, gestureState) => {
            pan.flattenOffset()
        },
        onPanResponderTerminate: (evt, gestureState) => {
            // Another component has become the responder, so this gesture
            // should be cancelled
        },
        onShouldBlockNativeResponder: (evt, gestureState) => {
            // Returns whether this component should block native components from becoming the JS
            // responder. Returns true by default. Is currently only supported on android.
            return true;
        },
    }),).current;


    return (<View style={styles.container}>
        <Animated.View {...panResponder.panHandlers} style={[{
            width: diameter, height: diameter, opacity, borderRadius: 50, backgroundColor: 'red',
        }, pan.getLayout()]}/>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
    },
});
