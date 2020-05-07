import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from "react-navigation"
import welcome from "./src/screens/welcome"
import RestaurantDetails from "./src/screens/RestaurantDetails"

const navigator = createStackNavigator({
  welcome : welcome,
  RestaurantDetails : RestaurantDetails
},{
  initialRouteName : "welcome",
  defaultNavigationOptions : {
    title : "Bussiness Search",
    headerTitleAlign : "center"
  }
})

export default createAppContainer(navigator)