import React from 'react'
import { Text } from 'react-native';
import styles from './styles'
export interface Props {
    errorMensgame: string | undefined;
}
const MensagemErros: React.FC<Props> = (props) => {
    const {errorMensgame} = props;
    if(!errorMensgame) null
    return( <Text style={styles.textMessage}>{errorMensgame}</Text>)
}
export default MensagemErros;