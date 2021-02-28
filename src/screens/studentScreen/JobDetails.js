import React from "react";
import { Container, Content, Card, CardItem, Text, Body, Button } from "native-base";
import Navigation from "../../config/navigation";

const JobDetails = ({route, navigation}) => {
    const { job_title, discription, requirement,responsibilities,salary } = route.params;
    return (
        <Container>
        <Content>
            <Card>
                <CardItem header>
                <Text style={{fontSize:25}}> Job Title: {job_title} </Text>
                </CardItem>
                <CardItem>
                <Body >
                    <Text style={{fontSize:20}}>Description:  {discription} </Text>
                    <Text style={{fontSize:20}}>Requirement: {requirement}</Text>
                    <Text style={{fontSize:20}}>Responsibilities: {responsibilities} </Text>
                </Body>
                </CardItem>
                <CardItem footer>
                <Text style={{fontSize:20}} >Salary: {salary}</Text>
                </CardItem>
            </Card>
            <Button block primary onPress={() => navigation.navigate("Apply For Job")}><Text>Apply Now</Text></Button>
            </Content>
        </Container>
    )
}

export default JobDetails
