import React from 'react';
import { Image, View, Text } from 'react-native';

const estrela_vazia_cor_primaria = require('../../resources/Icons/estrela_vazia_laranja.png');
const estrela_vazia_cor_alternativa = require('../../resources/Icons/estrela_vazia_branca.png');
const estrela_preenchida_cor_primaria = require('../../resources/Icons/estrela_preenchida_laranja.png');
const estrela_preenchida_cor_alternativa = require('../../resources/Icons/estrela_preenchida_branca.png');

import styles from './styles';

function RatedStars () {
    return (
                <View style={styles.starsContainer}>
                    <Text style={styles.ratingText}>Avaliação: </Text>
                    <Text style={styles.ratingNumber}>4,0</Text>

                    <Image
                        source={estrela_preenchida_cor_primaria}
                        style={styles.starImage}
                    />
                </View>
    );
}

export default RatedStars;