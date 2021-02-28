import React from 'react'
import { Container, Header, Content, Tab, Tabs ,Text} from 'native-base';
import CompanyJobs from './CompanyJobs';
import StudentsData from './StudentsData';

const AdminScreen = () => {
        return (
            <Container>
                {/* <Header hasTabs /> */}
                <Tabs>
                <Tab heading="Tab1">
                    <CompanyJobs />
                </Tab>
                <Tab heading="Tab2">
                    <StudentsData />
                </Tab>
                </Tabs>
            </Container>
            );
        }

export default AdminScreen
