import React from 'react'
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native'
import Constants from 'expo-constants'
import {useFonts} from 'expo-font'
import Svg, { Path } from 'react-native-svg'

const Main = () => {
    
    const [fontsLoaded] = useFonts({
        Limelight: require('../assets/fonts/Limelight-Regular.ttf'),
        PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf')
    })

    if (!fontsLoaded) {
        return <View style={styles.loadingContainer}><Text>Loading...</Text></View>;
    }
    const { height } = Dimensions.get('window');

    return (
        <View style={[styles.container, { height }]}>
            <Image source={require('../assets/images/LogoBingo.png')} style={styles.logo}/>
            <Text style={styles.logoText}>Del 1 al 90</Text>

            <View style={styles.blackBackground}>
                <Text style={{ color: '#FFFFFE', fontFamily: 'PoppinsRegular', fontSize: 18}}>¡Apretá el botón y sacá números!</Text>
                {/* Usa Svg y Path para renderizar tu SVG */}
                <View style={{ marginTop: 30 }}>
                    <Svg
                        width={100}
                        height={100}
                        viewBox="0 0 30 100"
                    >
                        <Path
                        d="M34.1045 17.2506L5.81802 0.527796C3.51974 -0.830278 0 0.487617 0 3.84664V37.2842C0 40.2977 3.27063 42.1138 5.81802 40.603L34.1045 23.8883C36.6278 22.4016 36.6358 18.7372 34.1045 17.2506Z"
                        fill="#FFFFFE"
                        />
                    </Svg>
                </View>
            </View>
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container:{
        marginTop: Constants.statusBarHeight,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FFFFFE'
    },

    logo:{
        width: 200,
        height: 200,
        marginTop: 30
    },

    logoText:{
        fontSize: 30,
        color: '#BF0000',
        fontFamily: 'Limelight'
    },

    blackBackground:{
        height: 400,
        width: '200%',
        backgroundColor: '#0F0F0F',
        position: 'absolute',
        bottom: -1,
        borderTopLeftRadius: 500,
        borderTopRightRadius: 500,
        display: 'flex',
        alignItems: 'center', // Center the content horizontally
        justifyContent: 'center', // Center the
    }
})