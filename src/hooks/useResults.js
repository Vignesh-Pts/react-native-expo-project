import { useState, useEffect } from 'react';

export default () => {
    const [results, setResults] = useState([]);



    const searchResults = () => {
        // mocking as response from the backend...
        setResults([
            {
                type: 'kollywood',
                image: require('../../assets/Images/Tamil_Movies_1.jpg'),
                duration: '2h 33min',
                IMDb: 7,
                id: "1"
            },
            {
                type: 'kollywood',
                image: require('../../assets/Images/Tamil_Movies_2.jpg'),
                duration: '2h 10min',
                IMDb: 6,
                id: "2"
            },
            {
                type: 'kollywood',
                image: require('../../assets/Images/Tamil_Movies_3.jpg'),
                duration: '3h 30min',
                IMDb: 5,
                id: "3"
            },
            {
                type: 'kollywood',
                image: require('../../assets/Images/Tamil_Movies_4.jpg'),
                duration: '2h 13min',
                IMDb: 8,
                id: "4"
            },
            {
                type: 'kollywood',
                image: require('../../assets/Images/Tamil_Movies_5.jpg'),
                duration: '2h 33min',
                IMDb: 7,
                id: "5"
            },
            {
                type: 'bollywood',
                image: require('../../assets/Images/Hindi_Movies_1.jpg'),
                duration: '2h 33min',
                IMDb: 7,
                id: "6"
            },
            {
                type: 'bollywood',
                image: require('../../assets/Images/Hindi_Movies_2.jpg'),
                duration: '2h 02min',
                IMDb: 7,
                id: "7"
            },
            {
                type: 'bollywood',
                image: require('../../assets/Images/Hindi_Movies_3.jpg'),
                duration: '1h 53min',
                IMDb: 6,
                id: "8"
            },
            {
                type: 'bollywood',
                image: require('../../assets/Images/Hindi_Movies_4.jpg'),
                duration: '2h 15min',
                IMDb: 8,
                id: "9"
            },
            {
                type: 'bollywood',
                image: require('../../assets/Images/Hindi_Movies_5.jpg'),
                duration: '2h 17min',
                IMDb: 7,
                id: "10"
            },
            {
                type: 'tollywood',
                image: require('../../assets/Images/Telugu_Movies_1.jpg'),
                duration: '2h 33min',
                IMDb: 7,
                id: "11"
            },
            {
                type: 'tollywood',
                image: require('../../assets/Images/Telugu_Movies_2.jpg'),
                duration: '2h 52min',
                IMDb: 8,
                id: "12"
            },
            {
                type: 'tollywood',
                image: require('../../assets/Images/Telugu_Movies_3.jpg'),
                duration: '2h',
                IMDb: 4,
                id: "13"
            },
            {
                type: 'tollywood',
                image: require('../../assets/Images/Telugu_Movies_4.jpg'),
                duration: '2h 07min',
                IMDb: 8,
                id: "14"
            },
            {
                type: 'tollywood',
                image: require('../../assets/Images/Telugu_Movies_5.jpg'),
                duration: '2h 22min',
                IMDb: 6,
                id: "15"
            }
        ])
    };

    useEffect(() => {
        searchResults();
    }, []);

    return [results, searchResults];
}