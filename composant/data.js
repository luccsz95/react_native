import { useContext, createContext, useState } from "react";

const stockData = createContext();

export function Boutique(){
    const [data, setdata] = useState('');
    const requetAPI = async()=>{
try{
    const reponse = await fetch('http://192.168.190.1/grandprojet-main/grandprojet/API.php');
    const reponsejson = await reponse.json();
    console.log(reponsejson);

if (json.success){
    setdata(json.data)
}


}catch{
    console.error('Erreur de laffichage', error);
}

    }
requetAPI();
}