import React from 'react';
import { createStackNavigator, } from '@react-navigation/stack';
import Movies from '../screens/MoviesPage'
import SeatsPage from '../screens/SeatsPage';
// import CheckoutPage from '../screens/CheckoutPage';

const Routes = () => {
  const mainStack = createStackNavigator();
  return (
    <mainStack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <mainStack.Screen name="Movies"  component={Movies} options={{
        title: "Movies List",
        headerStyle: {
          backgroundColor: '#FFFAF0',
        },headerTitleStyle: {
          fontWeight:'500',
        }
      }} />
      <mainStack.Screen name="Choose Seats" component={SeatsPage} />
      {/* <mainStack.Screen name="Checkout" component={CheckoutPage} /> */}
    </mainStack.Navigator>
  );
}




export default Routes;
