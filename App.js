import {useRef} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';

export default function App() {
    const leftValue = useRef(new Animated.Value(0)).current;

    const moveBall = () => {
        Animated.timing(leftValue, {
            toValue: 200,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[{
                width: 100,
                height: 100,
                transform: [
                    {translateX: leftValue}
                ],
                borderRadius: 50,
                backgroundColor: 'red',
            }]}>

            </Animated.View>
            <Button onPress={moveBall} title="Click me" style={{marginTop: 'auto'}}/>
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
