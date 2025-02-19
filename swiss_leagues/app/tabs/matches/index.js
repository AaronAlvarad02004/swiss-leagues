import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDate } from '../../../components/DateContext'; // Context importieren

const MatchesScreen = () => {
    const { selectedDate } = useDate(); // Aktuelles Datum aus dem Context holen
    const [showMatches, setShowMatches] = useState(false);

    // Beispiel-Spiele für "Heute"
    const matchesToday = [
        { id: '1', home: 'Basel', away: 'Zürich', time: '18:30', started: false, minute: null, score: null },
        { id: '2', home: 'Luzern', away: 'St. Gallen', time: '20:00', started: false, minute: null, score: null },
        { id: '3', home: 'YB', away: 'Servette', time: '16:00', started: true, minute: 67, score: '2 - 1' }, // Spiel läuft
    ];

    return (
        <View style={styles.container}>
            {/* Falls "Heute" ausgewählt ist, Super League Button anzeigen */}
            {selectedDate === 'Heute' && (
                <TouchableOpacity style={styles.button} onPress={() => setShowMatches(!showMatches)}>
                    <Text style={styles.buttonText}>Super League - 1. Liga</Text>
                    <MaterialIcons
                        name={showMatches ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                        size={24}
                        color="#FFF"
                    />
                </TouchableOpacity>
            )}

            {/* Falls "Heute" ausgewählt ist, Spiele anzeigen */}
            {selectedDate === 'Heute' && showMatches ? (
                <FlatList
                    data={matchesToday}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.matchCard}>
                            <View style={styles.matchRow}>
                                {/* Falls das Spiel läuft, wird die Minute links angezeigt */}
                                {item.started ? (
                                    <Text style={styles.matchMinute}>{item.minute}'</Text>
                                ) : (
                                    <Text style={styles.placeholder} />
                                )}

                                <Text style={styles.matchText}>{item.home}</Text>

                                {/* Falls Spiel läuft, zeige das Resultat. Sonst die Uhrzeit */}
                                <Text style={styles.matchCenter}>
                                    {item.started ? item.score : item.time}
                                </Text>

                                <Text style={styles.matchText}>{item.away}</Text>
                            </View>
                        </View>
                    )}
                />
            ) : selectedDate !== 'Heute' ? (
                <Text style={styles.noMatchesText}>Keine Matches</Text>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#121212',
    },
    button: {
        backgroundColor: '#1E1E1E',
        padding: 12,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#444',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    matchCard: {
        backgroundColor: '#2A2A2A',
        padding: 10,
        borderRadius: 8,
        marginVertical: 5,
        marginHorizontal: 10,
    },
    matchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    matchMinute: {
        color: '#FF3B30',
        fontSize: 16,
        fontWeight: 'bold',
        width: 40,
        textAlign: 'center',
    },
    placeholder: {
        width: 40, // Platzhalter, damit alles ausgerichtet bleibt
    },
    matchText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'regular',
        flex: 1,
        textAlign: 'center',
    },
    matchCenter: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    noMatchesText: {
        color: '#888',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
});

export default MatchesScreen;
