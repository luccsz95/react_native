import {useContext, createContext, useState} from 'react';

const sqlStock = createContext();

export function GetTableDB() {
    const [data, setData] = useState('');
    const requestApi = async () => {
        try {
            const response = await fetch('http://172.16.18.124/BTS-project/newE-project/api.php');
            const json = await response.json();
            console.log(json);
            
            if(json.success) {
                setData(json.data);
            }
            
        } catch (error) {
            console.error('Erreur lors de l\'affichage', error);
        }
        
        requestApi();
    }
}
