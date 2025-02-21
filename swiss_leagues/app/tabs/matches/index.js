import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDate } from '../../../components/DateContext';
import MatchesListItem from '../../../components/MatchesListItem';
import CustomColors from '../../../components/CustomColors';
const MatchesScreen = () => {
    const { selectedDate } = useDate();
    const [date, setDate] = useState();
    const [url, setUrl] = useState();
    const [pastMatches, setPastMatches] = useState([]);
    const [showMatches, setShowMatches] = useState(false);

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    useEffect(() => {
        const today = new Date()
        let newDate = ""
        let newUrl = ""
        if (selectedDate === "Heute") {
            newDate = formatDate(today);
            newUrl = new URL("https://livescore-api.com/api-client/fixtures/list.json")
        }
        if (selectedDate === "Gestern") {
            const yesterday = new Date(today);
            yesterday.setDate(today.getDate() - 5);
            newDate = formatDate(yesterday);
            newUrl = new URL("https://livescore-api.com/api-client/matches/history.json")
        }
        if(selectedDate === "Morgen") {
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);
            newDate = formatDate(tomorrow);
            newUrl = new URL("https://livescore-api.com/api-client/fixtures/list.json")
        }
        setDate(newDate)
        setUrl(newUrl)
        setShowMatches(false)
    }, [selectedDate]);
    
    useEffect(()=>{
        if(!date && !url) return
        const params = {
        key: "hUe0szQFB8lFsToH",
        secret: "Jhp4jJmQXRaVjOkBIyBb8sQJAco25NKP",
        from: date,
        date: date,
        competition_id: "15"
    }
        const loadPastMatches = async () => {
                try{
                console.log(Object.keys(params).forEach(key => url.searchParams.append(key,params[key])))
                const response = await fetch(url,{
                    method: "GET",
                })
                if(!response.ok){
                    console.log("error")
                }
                const pastMatches = await response.json()
                setPastMatches(pastMatches.data.match||pastMatches.data.fixtures)
                console.log(pastMatches)
                }catch(error){

                }
        }
        loadPastMatches()
    },[date , url])

    return (
        <View style={styles.container}>
            {pastMatches.length === 0 ? (
                <Text style={styles.text}>Keine Spiele für {selectedDate}</Text>
            ): (
                <>
                <TouchableOpacity style={styles.button} onPress={() => setShowMatches(!showMatches)}>
                    <Image source={require("../../../assets/Credit_Suisse_Super_League.png")} style={styles.logo}/>
                    <Text style={styles.buttonText}>Super League - 1. Liga</Text>
                    <MaterialIcons
                        name={showMatches ? 'keyboard-arrow-down' : 'keyboard-arrow-up'}
                        size={24}
                        color="#FFF"
                    />
                    {!showMatches && (
                    <Text style={styles.countMatches}>{pastMatches.length}</Text>
                )}
                </TouchableOpacity>
                {showMatches &&(
                    <FlatList
                        data={pastMatches}
                        renderItem={MatchesListItem}
                    />
            )}
            </>
        )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#121212',
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1e1e1e",
        padding: 15,
        borderRadius: 10,
        marginVertical: 5,
        borderWidth: 1,
    },
    countMatches:{
        color: CustomColors.primary,
        marginLeft: 60
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    text: {
        color: "#FFF"
    }
});

export default MatchesScreen;
