import React,{useState,useEffect} from 'react'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import firestore from '@react-native-firebase/firestore';
import { StyleSheet,Alert} from 'react-native';

const AllJobs = ({ params ,navigation }) => {
    const [jobs, setJobslist] = useState([]);

    useEffect(() => {
        const subscriber = firestore().collection("Jobs").onSnapshot(snapshot => (
            setJobslist(snapshot.docs.map(doc => doc.data()))
        ))
        return () => {
            subscriber();
        }
    }, [])

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
                    <Button transparent onPress={()=> navigation.navigate("Job Details", {
                        job_title: info.job_title,
                        discription: info.discription,
                        requirement: info.requirements,
                        responsibilities: info.responsibilities,
                        salary: info.slaray
                    }) }>
                        <Text>View</Text>
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
export default AllJobs;
