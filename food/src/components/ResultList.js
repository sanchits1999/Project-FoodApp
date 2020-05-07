import React from "react"
import {View , Text , StyleSheet , FlatList , TouchableOpacity} from "react-native"
import ResultDetails from "../components/ResultDetails"
import {withNavigation} from "react-navigation"

const ResultList = (props) => {

if(props.result.length == 0){
    return null
}

return (<View>
    <Text style={styles.headerStyle}>{props.header}</Text>
    <FlatList
    style={styles.listStyle}
    horizontal={true}
    data={props.result}
    keyExtractor={(r)=>{
        return r.id
    }}
    renderItem={({item})=>{
    return (<TouchableOpacity onPress={()=>{props.navigation.navigate("RestaurantDetails" , {id : item.id})}}>
        <ResultDetails item={item}/>
    </TouchableOpacity>)
    }}
    showsHorizontalScrollIndicator={false}
    />
    </View>)
}

const styles = StyleSheet.create({
headerStyle : {
    fontSize : 20,
    fontWeight : "bold",
    marginStart : 20,
    marginTop : 10,
    marginBottom : 5
},
listStyle : {
}
})

export default withNavigation(ResultList)