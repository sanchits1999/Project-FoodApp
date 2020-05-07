import React, { useState , useEffect} from "react"
import {StyleSheet , View , Text , Button , ScrollView} from "react-native"
import yelp from "../api/yelp"
import SearchBar  from "../components/SearchBar"
import ResultList from "../components/ResultList"


const welcome = (props) => {

    const [searchtext,setsearchtext] = useState("")
    const [results,setresults] = useState([])

    const searchApi = (searchitem) => {
        yelp.get("/search",{
            params : {
                limit : 50,
                term : searchitem,
                location : "san jose"
            }
    }).then((result)=>{
            setresults(result.data.businesses)
        }).catch((e)=>{
            console.log(e)
        })
    }

    //only runs when the app renders for the first time
    useEffect(() => {
        searchApi("lunch")
    },[ ])

    const filterResultByPrice = (price) => {
        return results.filter((result) => {
            return price === result.price
        })
    }

    return (<View style={styles.ParentView}>

        <SearchBar ontextchange={(text) => {
            setsearchtext(text)
        }} onsubmit={()=>{
            searchApi(searchtext)
        }}/>

    <ScrollView>   

    <ResultList result={filterResultByPrice("$")} header="Cost Effective" />
    <ResultList result={filterResultByPrice("$$")} header="Bit Pricier" />
    <ResultList result={filterResultByPrice("$$$")} header="Big Spender!" />  

    </ScrollView>                                   

    </View>)
}

const styles = StyleSheet.create({

    ParentView : {
        backgroundColor : "#ffffff",
        flex : 1
    }

})

export default welcome