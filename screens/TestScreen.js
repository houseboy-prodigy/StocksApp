import Container from '../components/Container'
import Header from '../components/Header'
import {Text, View, TextInput,StyleSheet} from 'react-native'
import {useEffect, useState} from 'react'
import ChartScreen from './ChartScreen';
const TestScreen = () => {
    const getDateString = (date) => {
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = date.getFullYear();
        date = mm + '-' + dd;
        return date
    }
    const getDatesArr = () => {
        datesArr = []
        var prevDate = new Date();

        // Use the setDate() method to subtract 1 day from the date
        prevDate.setDate(prevDate.getDate() - 1);
        prevDate1 = getDateString(prevDate)
        prevDate.setDate(prevDate.getDate() - 1);
        prevDate2 = getDateString(prevDate)
        prevDate.setDate(prevDate.getDate() - 1);
        prevDate3 = getDateString(prevDate)
        prevDate.setDate(prevDate.getDate() - 1);
        prevDate4 = getDateString(prevDate)
        prevDate.setDate(prevDate.getDate() - 1);
        prevDate5 = getDateString(prevDate)
        //prevDate.setDate(prevDate.getDate() - 1);
        /*
        prevDate2 = currDate.setDate(currDate.getDate() - 2)
        prevDate3 = currDate.getDate() - 3
        prevDate4 = currDate.getDate() - 4
        prevDate1 = getDateString(prevDate1)
        prevDate2 = getDateString(prevDate2)
        prevDate3 = getDateString(prevDate3)
        prevDate4 = getDateString(prevDate4)
        */
        
        datesArr.push(prevDate1,prevDate2,prevDate3,prevDate4,prevDate5)
        return datesArr
    }
    var today = new Date();
    gottenDate = getDatesArr(today)
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    
   // Create a new Date object for today's date
    var prevDate = new Date();

// Use the setDate() method to subtract 1 day from the date
    prevDate.setDate(prevDate.getDate() - 7);
    var prevDateDay = String(prevDate.getDate()).padStart(2, '0');
    var prevDateMonth = String(prevDate.getMonth() + 1).padStart(2, '0');
    var prevDateYear = prevDate.getFullYear();
    prevDate = prevDateYear + '-' + prevDateMonth + '-' + prevDateDay;

    const [searchInput,SetSearchInput] = useState()
    const [searchResult,SetSearchResult] = useState(null)
    const [stockPrice,setStockPrices] = useState([])
    const [dates,setDates] = useState(gottenDate)
    const [error,setError] = useState()
    searchStock = async () => {
        const stockPricesArr = []
        
        const url = `https://api.polygon.io/v2/aggs/ticker/${searchInput}/range/1/day/${prevDate}/${today}?adjusted=true&sort=asc&limit=120&apiKey=g14DIhw20yIUFfTGwdYPz0UGT8SIwODp`;
        console.log(stockPrice)
        await fetch(url)
          .then(res => res.json())
          .then(responseJson =>
            SetSearchResult(
                {
                  price1: responseJson.results[0].o,
                  price2: responseJson.results[1].o,
                  price3: responseJson.results[2].o,
                  price4: responseJson.results[3].o,
                  price5: responseJson.results[4].o,
                  name: responseJson.ticker
                })
          ).then(stockPricesArr.push(searchResult.price1,searchResult.price2,searchResult.price3,searchResult.price4,searchResult.price5)
          ).then(setStockPrices(stockPricesArr))
          .catch(error => setError(error));
      };
    
    return(
        <Container>
        <Header headingStyle={styles.heading} start = {{x:0.7, y: 0.4}} colors={['transparent','#C30202']} headingStyleL={styles.background} title="Test"/>
        <TextInput
        style={styles.inputbox}
          placeholder="Find Your Stock.."
          placeholderTextColor='white'
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onChangeText={(text) => {SetSearchInput(text)}}
          onSubmitEditing={searchStock}
          value={searchInput}
        />
        <ChartScreen arr={stockPrice} dates={dates}/>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'lightgrey',
    },
    heading: {
        //flex: 0,
        alignItems: 'center',
        margin: 5,
        padding: 100,
        backgroundColor: 'black',
  },
  buttonBox: {
    flex: 1,
    paddingTop: 80,
    flexDirection: 'row',
    width: 150,
    alignItems: 'center',
    justifyContent: 'flex-start',
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 300,
      },
      inputbox:{
        padding: 15,
        backgroundColor: 'black',
        color: 'white',
        fontSize: 15, 
        borderBottomColor: '#7B7B7B', 
        borderColor: 'black',
        borderWidth: 2
      },
button: {
paddingTop: 50,
width: 80,
height: 20,
},
})
export default TestScreen;