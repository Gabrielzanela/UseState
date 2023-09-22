import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1f1e25',

      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    input: {
      color: '#000',
      backgroundColor: '#fff',
      borderRadius: 5,
      fontWeight: "200",

      width: '60%',
      margin: 10,
    },

    btn: {
      backgroundColor: "red",
      fontSize: 14,
      width: '60%',

      margin: 10,
      padding: 15,
      marginBottom: 20, 
      borderRadius: 5,

      alignItems: 'center',
    
    },

    btnTxt: {
       color: "#fff",
       fontFamily: "Arial",
       fontWeight: "600",

    },

    tittle: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',

        paddingBottom: 10,
    }
});