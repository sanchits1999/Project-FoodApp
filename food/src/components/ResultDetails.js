import React from "react"
import {StyleSheet , View , Text , Image} from "react-native"

const ResultDetails = (props) => {
    return (<View>
        <Image style={styles.imageStyle} source={{ uri : props.item.image_url}}/>
        <Text style={styles.nameStyle}>{props.item.name}</Text>
        <Text style={styles.undertextStyle}>{props.item.rating} Stars, {props.item.review_count} Reviews</Text>
    </View>)
}

const styles = StyleSheet.create({
imageStyle : {
    width : 250,
    height : 150,
    marginEnd : 10,
    marginStart : 20
},
nameStyle : {
    fontSize : 16,
    fontWeight : "bold",
    marginTop : 5,
    marginStart : 20
},
undertextStyle : {
    color : "#808080",
    fontSize : 14,
    fontWeight : "bold",
    marginStart : 20
}
})

export default ResultDetails