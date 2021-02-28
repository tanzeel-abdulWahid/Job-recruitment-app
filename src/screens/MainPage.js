import React from 'react';
import { Container,Content, Form, Item, Input, Label, Button,Text } from 'native-base';
import {Image,StyleSheet} from 'react-native';

const MainPage = ({ navigation }) => {
    
    return (
        <Container style={{paddingTop:70}} >
            <Image style={{width: 200, height:190, alignSelf: 'center'}} source={require('../assests/logo-removebg-preview.png')} />
            <Text style={styles.heading}>HIRE OR GET HIRED!</Text>
            <Button  primary style={styles.btn} onPress={ () => navigation.navigate('StudentLogin') }><Text> Login as a student </Text></Button>
            <Button  primary style={styles.btn} onPress={ () => navigation.navigate('CompanyLogin') }><Text> Login as a Company </Text></Button>
            <Button  primary style={styles.btn} onPress={ () => navigation.navigate('AdminLogin') }><Text> Login as an Admin </Text></Button>
        </Container>
    )
}
const styles = StyleSheet.create({
    btn: {
        width:180,
        display: 'flex',
        justifyContent:  'center',
        alignItems:'center',
        marginTop:10,
        alignSelf:'center'
    },
    heading:{
        alignSelf:'center',
        fontSize: 30,
        fontWeight:'bold'
    }
    });
export default MainPage
