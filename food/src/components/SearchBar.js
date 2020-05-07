import React from "react"
import {StyleSheet , View , Text, TextInput} from "react-native"
import {Feather} from "@expo/vector-icons"

const SearchBar = (props) => {
    return (<View style={styles.BarStyle}>
        <Feather name="search" style={styles.IconStyling}/>

        <TextInput placeholder="Search" 
        placeholderTextColor="#808080" 
        underlineColorAndroid="transparent" 
        style={styles.TextInputStyle}
        onChangeText={(text)=>{
            props.ontextchange(text)
        }}
        onSubmitEditing={()=>{
            props.onsubmit()
        }}/>

    </View>)
}

const styles = StyleSheet.create({
    BarStyle : {
        height : 50,
        backgroundColor : "#e8e8e8",
        marginHorizontal : 20,
        marginTop : 10,
        borderRadius : 5,
        flexDirection : "row"
    },
    IconStyling : {
        fontSize : 28,
        alignSelf : "center",
        marginStart : 5
    },
    TextInputStyle : {
        fontSize : 18,
        marginHorizontal : 10,
        flex : 1,
        paddingStart : 5
    }

})

export default SearchBar