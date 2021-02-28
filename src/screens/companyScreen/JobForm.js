import React,{useState} from 'react'
import { Container, Button, Content, Form, Item, Input, Label , Text} from 'native-base';
import { StyleSheet, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const JobForm = ( {navigation} ) => {
    const [title, setTitle] = useState('');
    const [discription, setDiscription] = useState('');
    const [requirements, setRequirements] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [slaray, setSalary] = useState('');

    const sendJobData = () => {
        firestore()
        .collection("Jobs")
        .add({
            job_title: title,
            discription: discription,
            requirements: requirements,
            responsibilities: responsibilities,
            slaray: slaray
        })
        .then((docref)=>{
            // console.log("ref",docref.id);
            Alert.alert("Job Posted successfully");
            navigation.navigate("All jobs",{
                jobId: docref.id,
            });
        });
    }

    return (
        <Container>
        <Content style={{marginTop:20}}>
            <Form>
                <Item stackedLabel>
                    <Label style={styles.titles}>Job Title</Label>
                    <Input value={title} onChangeText={e => setTitle(e)} />
                </Item>
                <Item stackedLabel >
                    <Label style={styles.titles}>Job Discription</Label>
                    <Input value={discription} onChangeText={e => setDiscription(e)} />
                </Item>
                <Item stackedLabel >
                    <Label style={styles.titles}>Job requirements</Label>
                    <Input value={requirements} onChangeText={e => setRequirements(e)} />
                </Item>
                <Item stackedLabel >
                    <Label style={styles.titles}>Key responsibilities</Label>
                    <Input value={responsibilities} onChangeText={e => setResponsibilities(e)} />
                </Item>
                <Item stackedLabel >
                    <Label style={styles.titles}>Salary range</Label>
                    <Input value={slaray} onChangeText={e => setSalary(e)} />
                </Item>
            </Form>
            </Content>
            <Button filled primary style={styles.btn} onPress={sendJobData}><Text> Post a Job </Text></Button>
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
export default JobForm
