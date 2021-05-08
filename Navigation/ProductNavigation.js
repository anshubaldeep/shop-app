import { Platform } from 'react-native';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import colors from '../constants/colors';
import ProductsOverviewScreen from '../Screens/Shop/ProductsOverviewScreen';



const ProductNavigator=createStackNavigator({
    productOverview: ProductsOverviewScreen,

},
{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Platform.OS==='android'?colors.primary:''
        },
        headerTintColor:Platform.OS==='android'?'white':colors.primary, 
    }
})

export default createAppContainer(ProductNavigator);