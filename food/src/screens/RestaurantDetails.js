import React , {useState , useEffect} from "react"
import {StyleSheet , View , Image , Text , FlatList} from "react-native"
import yelp from "../api/yelp"

const RestaurantDetails = (props) => {
    const id = props.navigation.getParam("id")
    const [result,setResult] = useState([])

    const getResult = (id) => {
        yelp.get(`/${id}`).then((response) => {
            setResult(...result,response.data)
        }).catch((e)=>{

        })
    }

    useEffect(()=>{
        getResult(id)

    },[])

    if(result===[]){
        return null
    }


    return (<View>
        <Text style={styles.head}>{result.name}</Text>
        <FlatList
        data={result.photos}
        renderItem={({item}) => {
            return <Image style={styles.image} source={{uri : item}}/>
        }}
        keyExtractor={(item)=>{
            return item
        }}
        />
    </View>)
}

const styles = StyleSheet.create({
head : {
    fontSize : 30,
    fontWeight : "bold",
    margin : 20,
    alignSelf : "center"
},    
image : {
    height : 150,
    width : 200,
    margin : 20,
    alignSelf : "center"
}
})

export default RestaurantDetails