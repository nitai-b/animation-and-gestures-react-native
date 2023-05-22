import {useRef} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';

export default function App() {
    const opacity = useRef(new Animated.Value(1)).current;
    const diameter = 100;

    const fadeInBall = () => {
        Animated.spring(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    const fadeOutBall = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[{
                width: diameter,
                height: diameter,
                opacity,
                borderRadius: 50,
                backgroundColor: 'red',
            }]}>

            </Animated.View>
            <Button onPress={fadeInBall} title="Fade In" style={{marginTop: 'auto'}}/>
            <Button onPress={fadeOutBall} title="Fade Out" style={{marginTop: 'auto'}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
