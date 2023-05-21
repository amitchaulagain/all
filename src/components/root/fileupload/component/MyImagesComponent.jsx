import React, {Component, useState} from 'react';
import FileService from '../services/FileService';
import axios from "../../../../api/customAxiosConfig/CustomAxiosConfig";
import {useNavigate} from "react-router-dom";


class MyImagesComponent extends Component {


    constructor(props) {
        //const navigate = useNavigate();
        super(props);
        this.state = {
            imageList: [],
            images: [],
            hero: "hello",


        }
        this.state = {
            isLoading: true,
            pokemons: []
        };

    }


    componentDidMount() {


        //console.log(res.data)
        // this.getSingleImage();
        this.getMultipleImages();


    }

    getSingleImage(url) {

       /* navigate(`/image/`+url,
            { state: {
                    url: url
                }
            });*/

    }


    /*  get multiple images*/
    getMultipleImages() {
        let allPokemons = []

        FileService.getAllImages("http://localhost:8080/file").then(res => {


                //console.log(res.data)
                res.data.map(x => axios.get(x.fileDownloadUri, {
                    responseType: "arraybuffer"
                }).then((y) => {


                    // console.log(y.data)

                    const base64 = btoa(
                        new Uint8Array(y.data).reduce(
                            (y, byte) => y + String.fromCharCode(byte),
                            '')
                    );
                    let pokemon = {
                        id: x.id,
                        uploaderName: x.uploaderName,
                        data64: base64,
                        fileDownloadUri:x.fileDownloadUri

                    }
                    allPokemons.push(pokemon)


                    // console.log(base64 + "------")

                    console.log(this.pokemons)

                    console.log("Hurray! We have Pokemon data, let's update our state");
                    console.log("Calling setPokemon...");
                    this.setState({pokemons: allPokemons});
                    console.log("Calling setLoading...");
                    this.setState({isLoading: false});


                }));


            }
        );


    }

    render() {
        const {isLoading, pokemons} = this.state;

        console.debug(
            //`isLoading is ${isLoading} and pokemon is ${pokemon && pokemon.name}`
        );

        if (isLoading) {
            console.debug("renders: Loading...");
            return <div className="App">Loading...</div>;
        }

        console.debug("Finally!! A wild Pokémon appears :)");
        return (


            /*dfddffd*/


            <div>
                <h2 className='mt-3 text-center mb-5'>My Images</h2>
                <div className='row justify-content-center'>
                    {
                        pokemons.map(
                            pok => <div key={pok.id} className='px-0 m-2 border bg-light col-3'>
                                <div className='hovereffect'>
                                    <img width="200px" height="200px" src={`data:image/jpeg;base64,${pok.data64}`}/>                                    <div className='overlay'>
                                        <a className='info text-primary bg-light border border-dark'
                                           onClick={ () => this.getSingleImage(pok.fileDownloadUri)}
                                           rel='noopener noreferrer'>Dowload</a>
                                        <br/>

                                        <br/>
                                        <a className='info text-danger bg-light border border-dark'
                                           href='/'>Uploader: {pok.uploaderName}</a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>


        )


    }
}

export default MyImagesComponent;
