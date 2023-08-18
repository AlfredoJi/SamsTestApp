import React, { Component } from "react";
import { Button, View, Text, Image, StyleSheet } from "react-native";
import aboutTop from '../../assets/about_sams.jpg';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.aboutLogo}
                source={aboutTop}
            />
            <Text style={styles.headerText}>
                The Sam's Xpress Car Wash Mission
            </Text>
            <Text>
                Our team is committed to creating an exceptional customer experience by exceeding expectations, utilizing innovative technology, and improving the communities we serve.
                Sam’s Xpress® Car Wash is headquartered in Matthews, NC.
                The first location opened on December 3, 2012, in Fort Mill, South Carolina. Since then, we have successfully opened multiple sites and are continuing to grow rapidly.
                At Sam’s Xpress® Car Wash we are building our company on providing amazing customer service and creating a dynamic culture where we instill a sense of fun and energy into 
                everything we do, all while maintaining an incredible focus on our employees. We employ over 20 employees per site with plenty of advancement opportunities. 
                Our team is professionally trained and dedicated to exceeding customer expectations. We promote and expect a courteous and friendly work environment with a positive team 
                attitude and an attention to detail. All employees at Sam’s Xpress® Car Wash are responsible for providing an outstanding experience for our customers and a safe, enjoyable working environment.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    aboutLogo: {
        flex: 1,
        width: '100%',
        height: '40%',
    },
    headerText: {
        flex: 1,
        position: 'absolute',
        top: 100,
        left: 100,
        right: 10,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 20,
    }
});