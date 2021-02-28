import React,{useState} from 'react'
import { Container, Content, Button, Text, Form, Item, Input, Label } from 'native-base';
import { StyleSheet, Image, Alert } from 'react-native';
import auth from "@react-native-firebase/auth";

const StudentLogin = ({ navigation } ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) =>{
        if(email.substring(email.length - 11) === "student.com"){
            auth().signInWithEmailAndPassword(email,password)
            .then(() => {
                navigation.navigate("Available Jobs")
            })
            .catch((e)=> Alert.alert(e.message))
        }else{
            Alert.alert("Please enter correct email")
        }
    }
    return (
        <Container style={{paddingTop:20}}>
        <Image style={{width: 200, height:190, alignSelf: 'center'}} source={require('../assests/logo-removebg-preview.png')} />
    
        <Content>

            <Form>
                <Item stackedLabel>
                    <Label>Email</Label>
                    <Input placeholder='name@student.com' autoCompleteType="email" value={email} onChangeText={e => setEmail(e)} />
                </Item>
                
                <Item stackedLabel last>
                    <Label>Password</Label>
                    <Input secureTextEntry value={password} onChangeText={e => setPassword(e)}/>
                </Item>
            </Form>


            <Button primary style={styles.btn} onPress={login}><Text> Login </Text></Button>
            <Button bordered primary style={styles.btn} onPress={ () => navigation.navigate('RegisterStudent') }><Text> Register </Text></Button>

        </Content>
    </Container>
    )
    };

    const styles = StyleSheet.create({
        btn: {
            width:180,
            display: 'flex',
            justifyContent:  'center',
            alignItems:'center',
            marginTop:10,
            alignSelf:'center'
        },
        });
    
export default StudentLogin
