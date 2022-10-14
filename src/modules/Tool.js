import React from "react";
import { Text, View, StyleSheet } from "react-native";

/*  Without destructuring
const Tool = (props) => {

    const name = props.name;
    const issue = props.issue;

return (

    <View>
        <Text>My name is {name}</Text>
        <Text>I'm struggeling with {issue}</Text>
    </View>
)};*/

/* with destructuring
const Tool = ({name, issue}) => (

    <View>
        <Text>My name is {name}</Text>
        <Text>I'm struggeling with {issue}</Text>
    </View>
); */

// default props with destructuring
const Tool = ({name, issue}) => {

    Tool.defaultProps = {
        name : 'enter your name',
        issue: 'enter your issue'
    }

    return(
    <View style={styles.margin}>
        <Text style={styles.spacing}>My name is {name}</Text>
        <Text style={styles.spacing}>I'm struggeling with {issue}</Text>
    </View>

)}; 

const styles = StyleSheet.create({
    margin: {
        margin: 20
    },
    spacing:{
        color: '#00FF90'
      }
})

export default Tool;
