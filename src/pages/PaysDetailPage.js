import React, {useEffect} from 'react';
import Titre from "../composants/Titre";
import PaysPage from "./PaysPage";
import axios from "axios";

const PaysDetailPage = props => {

    useEffect(() => {
        axios
            .get("https://restcountries.eu/rest/v2/name/{name}")
    },[]);

    console.log(props)

    const nomPays = props.match.params.nom

    return (
        <>
        <Titre valeur="Infos Pays"/>
        <Titre valeur={nomPays}/>
        </>
    )
}

export default PaysDetailPage