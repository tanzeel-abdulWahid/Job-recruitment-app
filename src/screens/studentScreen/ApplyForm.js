import React,{useState} from 'react'
import { Container, Button, Content, Form, Item, Input, Label , Text} from 'native-base';
import firestore from '@react-native-firebase/firestore';
import { StyleSheet, Alert} from 'react-native';


const ApplyForm = ({navigation}) => {
    const [name, setName] = useState('');
    const [fname, setFname] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [qualification, setQualification] = useState('');
    const [gpa, setGpa] = useState('');

    
    const sendApplication = () => {
        firestore()
        .collection("ApplicationData")
        .add({
            name: name,
            fname: fname,
            contactNo: contactNo,
            qualification: qualification,
            gpa: gpa
        })
        .then((docref)=>{
            // console.log("ref",docref.id);
            Alert.alert("Application has been sent successfully, You will be contacted soon");
            navigation.navigate("Available Jobs")
        });
    }

    return (
        <Container>
        <Content style={{marginTop:20}}>
            <Form>
                <Item stackedLabel>
                    <Label style={styles.titles}>Name</Label>
                <Input value={name} onChangeText={e => setName(e)}  />
                </Item>
                <Item stackedLabel last>
                    <Label style={styles.titles}>Father's Name</Label>
                <Input  value={fname} onChangeText={e => setFname(e)}   />
                </Item>


                <Item stackedLabel last>
                    <Label style={styles.titles}>Contact Number</Label>
                <Input keyboardType='numeric' value={contactNo} onChangeText={e => setContactNo(e)} />
                </Item>

                <Item stackedLabel last>
                    <Label style={styles.titles}>Last Qualification</Label>
                <Input value={qualification} onChangeText={e => setQualification(e)} />
                </Item>

                <Item stackedLabel last>
                    <Label style={styles.titles}>GPA</Label>
                <Input value={gpa} onChangeText={e => setGpa(e)} />
                </Item>

            </Form>
            </Content>
            <Button filled primary style={styles.btn} onPress={sendApplication}><Text> Apply Now </Text></Button>

        </Container>
    )
}
const styles = StyleSheet.create({
    titles: {
        fontSize: 18,
        color:'#4834d4',
    },
    btn: {
        width:180,
        display: 'flex',
        justifyContent:  'center',
        alignItems:'center',
        // marginTop:10,
        marginBottom:30,
        alignSelf:'center',
    }
    });
export default ApplyForm
