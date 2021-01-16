import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import SearchSuggestions from '../screens/SearchSuggestions';





export const AppStackNavigator = createStackNavigator({
  Suggestions: {
    screen: SearchSuggestions,
    navigationOptions: {
      headerShown: false
    }
  },
  /* RecieverDetails : {
     screen : RecieverDetailsScreen,
     navigationOptions:{
       headerShown : false
     }
   }*/
},
  {
    initialRouteName: 'Suggestions'
  }
);
