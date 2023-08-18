import React from "react";
import { Button, View, Text, StyleSheet, ScrollView, FlatList } from "react-native";

export default function ProfileScreen() {
    fakeData = [
        { title: 'vehicle', data: ['Ford','Toyota','KIA'] },
        { title: 'membership', data: [ 'Top', 'Xpress', 'Premium'] },
        { title: 'status', data: [ 'Active', 'Terminated', 'Suspended'] },
    ]




    return (
        <ScrollView contentContainerStyle={styles.pContainer}>
            <Text style={styles.memberName}>Member Name Here</Text>
            <Text>Vehicle</Text>
            <Text>Membership</Text>
            <Text>Status</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    pContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    memberName: {
        fontSize: 25,
    }
});