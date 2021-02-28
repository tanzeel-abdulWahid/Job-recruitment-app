import React, {useState,useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { StyleSheet,Alert} from 'react-native';

const CompanyJobs = ({route,navigation}) => {
    const [jobs, setJobslist] = useState([]);
    useEffect(() => {
        const subscriber = firestore().collection("Jobs").onSnapshot(snapshot => (
            setJobslist(snapshot.docs.map(doc => doc.data()))
        ))
        return () => {
            subscriber();
        }
    }, [])

    const dlt = (e) =>{
        console.log("e==",e);
        firestore().collection("Jobs").doc(e).delete()
        .then(() => {
            Alert.alert("job deleted")
            });
    }
    return (
        <Container>
            <Content>
        {jobs.map(info => (
            <List key={info.job_title}>
                <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{ uri: 'https://image.shutterstock.com/image-vector/job-logo-design-magnifying-glass-260nw-715130101.jpg' }} />
                </Left>
                <Body>
                    <Text>{info.job_title}</Text>
                    <Text note numberOfLines={2}>{info.discription}</Text>
                </Body>
                <Right>
                    <Button transparent>
                    <Text onPress={() => dlt(info.job_title)}>Delete</Text>
                    </Button>
                </Right>
                </ListItem>
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
export default CompanyJobs;
