import React,{useState} from 'react'
import { Container, Content, Form, Item, Input, Label, Button,Text } from 'native-base';
import { StyleSheet, Image,Alert } from 'react-native';
import auth from "@react-native-firebase/auth";

const RegisterStudent = ( {navigation} ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = (e) =>{
        if(email.substring(email.length - 11) === "student.com"){
            auth().createUserWithEmailAndPassword(email, password)
            .then(()=> navigation.navigate("Available Jobs"))
            .catch((e)=>Alert.alert(e.message))
        }else{
            Alert.alert("Please enter correct email")
        }
    }
    return (
        <Container>
            <Image style={{width: 200, height:120, alignSelf: 'center'}} source={require('../assests/logo-removebg-preview.png')} />
            
            <Content>

                <Form>
                    <Item stackedLabel>
                        <Label>Name</Label>
                        <Input require />
                    </Item>
                    
                    <Item stackedLabel>
                        <Label>Email</Label>
                        <Input placeholder='name@student.com'  autoCompleteType="email" value={email} onChangeText={e => setEmail(e)} />
                    </Item>

                    <Item stackedLabel>
                        <Label>Qualification</Label>
                        <Input require />
                    </Item>
                    <Item stackedLabel last>
                        <Label>Password</Label>
                        <Input secureTextEntry value={password} onChangeText={e => setPassword(e)} />
                    </Item>
                </Form>
                <Button primary style={styles.btn} onPress={register}><Text> Register </Text></Button>

            </Content>
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
    });
export default RegisterStudent
