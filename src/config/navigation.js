import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../screens/MainPage';
import StudentLogin from "../screens/StudentLogin";
import CompanyLogin from "../screens/CompanyLogin";
import RegisterStudent from "../screens/RegisterStudent";
import RegisterCompany from "../screens/RegisterCompany";
import AdminLogin from '../screens/AdminLogin';


import Jobs from "../screens/companyScreen/Jobs";
import JobForm from '../screens/companyScreen/JobForm';
import AllJobs from "../screens/studentScreen/AllJobs";
import JobDetails from "../screens/studentScreen/JobDetails"
import ApplyForm from "../screens/studentScreen/ApplyForm";
import AdminScreen from "../screens/adminScreen/AdminScreen";


const Stack = createStackNavigator();

function Navigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{
            headerStyle: {
            backgroundColor: '#4834d4',
            },
            headerTintColor: '#fff',
        }}>
                <Stack.Screen name="Welcome" component={MainPage}/>
                <Stack.Screen name="Admin Panel" component={AdminScreen}/>
                <Stack.Screen name="Job Details" component={JobDetails} />
                <Stack.Screen name="StudentLogin" component={StudentLogin} />
                <Stack.Screen name="Apply For Job" component={ApplyForm} />
                <Stack.Screen name="Available Jobs" component={AllJobs} />
                <Stack.Screen name="New Job" component={JobForm}/>
                <Stack.Screen name="All jobs" component={Jobs}/>
                <Stack.Screen name="AdminLogin" component={AdminLogin}/>
                <Stack.Screen name="CompanyLogin" component={CompanyLogin}/>
                <Stack.Screen name="RegisterStudent" component={RegisterStudent}/>
                <Stack.Screen name="RegisterCompany" component={RegisterCompany}/>

                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;