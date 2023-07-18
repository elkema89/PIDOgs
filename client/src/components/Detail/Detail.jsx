import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL = 'https://api.thedogapi.com/v1/breeds';


const Detail = () => {
    const { id } = useParams();
    const [dog, setDog] = useState({});
    
    useEffect(() => {
        axios(`${URL}/${id}`)
        .then(response => response.data)
        .then(( data ) => {
            if(data.id){
                setDog(data);
            }else{
                window.alert('No hay perros con ese id');
            }
        });
        return setDog({});
    }, [id]);

    return(
        <div>
            {dog.id ? (
                <div>
                    <h1>{dog.name}</h1>
                    <img src={dog.image} alt={dog.name} />
                    <p>{dog.height.metric}</p>
                    <p>{dog.weight.metric}</p>
                    <p>{dog.temperament}</p>
                    <p>{dog.life_span}</p>
                </div>
            ) : (
                <h2>Cargando...</h2>
            )}
        </div>
    );
};

export default Detail;