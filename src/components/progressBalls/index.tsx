import React from 'react'
import { View } from 'react-native';

import styles from './styles';

export function ProgressBallFilled ({ ...rest }) {

    return (
        <View style={styles.progressBallFilled}/>
    );
}

export function ProgressBallEmpty ({ ...rest }) {

    return (
        <View style={styles.progressBallEmpty}/>
    );
}

export function ProgressBallsContainer ({ children, ...rest }) {

    return (
        <View style={styles.progressBallsContainer}>
            {children}
        </View>
    );
}