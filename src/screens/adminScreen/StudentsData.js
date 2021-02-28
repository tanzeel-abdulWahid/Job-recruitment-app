import React, {useState,useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';
import { Container, Content, List,Text, Body,Card, CardItem,Button } from 'native-base';
import { StyleSheet,Alert} from 'react-native';

const StudentsData = ({route,navigation}) => {
    const [student, setStudent] = useState([]);
    useEffect(() => {
        const subscriber = firestore().collection("ApplicationData").onSnapshot(snapshot => (
            setStudent(snapshot.docs.map(doc => doc.data()))
        ))
        return () => {
            subscriber();
        }
    }, [])

    const dlt = (e) =>{
        console.log("e==",e);
        firestore().collection("ApplicationData").doc(e).delete()
        .then(() => {
            Alert.alert("User deleted")
            });
    }
    return (
        <Container>
            <Content>
        {student.map(info => (
            <List key={info.name}>
                    <Card>
                        <CardItem header>
                            <Text>Name: {info.name} {info.fname} </Text>
                        </CardItem>
                        <CardItem>
                        <Body>
                            <Text> Contact No: {info.contactNo} </Text>
                            <Text> Qualification: {info.qualification} </Text>
                            <Text> Final GPA: {info.gpa} </Text>

                        </Body>
                        </CardItem>
                        <CardItem footer>
                            <Button onPress={()=>dlt(info.name)}>
                            <Text>Delete User</Text>
                            </Button>
                        </CardItem>
                    </Card>
            </List>
        ))}
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
        marginBottom:20,
        alignSelf:'center',
    },
    });
export default StudentsData;
