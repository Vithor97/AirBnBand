import React from 'react'
import { View, Image } from 'react-native';

import waves from './styles';

function Waves () {
    return (
        <>
            <View style={waves.wavesContainer}>
                <Image
                    source={require('../../resources/Images/onda_laranja_escura.png')}
                    style={waves.waveFooterDark}
                />

                <Image
                    source={require('../../resources/Images/onda_laranja.png')}
                    style={waves.waveFooter}
                />
            </View>
        </>
    );
}

export default Waves;