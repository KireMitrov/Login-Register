import React, { useContext, useEffect, useState } from "react";
import "./home.css"
import axios from 'axios'
import { AuthContext } from "../../context/authContext";

function Home() {

    const { setShowLogin } = useContext(AuthContext);
    const [lolCharacters, setLolCharacters] = useState([]);
    const url = 'http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json';

    useEffect(() => {
        const fetchCharacters = async () => {
            const res = await axios.get(url);
            const data = Object.values(res.data.data);
            setLolCharacters(data);
        };
        fetchCharacters();
    }, []);

    return (
        <div className="main">
            <header>
                <div className="header-row"><img className="logo" src="/lol-logo.png" alt="Lol-logo" /></div>
                <div className="header-row">
                    <h1 className="heading">League Of Legends</h1>
                </div>
                <div className="header-row"><button className="login-register-btn" onClick={() => setShowLogin(true)}>Sign in/Register</button></div>
            </header>
            <input
                type="search"
                name="search"
                id="search"
                placeholder="Search your favorite character..."
            />
            <button id="btn-search">Search</button><br /><br />
            <label htmlFor="select">Select by tag</label>
            <select name="tag" id="tag"></select>
            <label htmlFor="attack">Select by attack</label>
            <select name="attack" id="attack">
                <option value="All">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>

            <label htmlFor="defense">Select by defense</label>
            <select name="defense" id="defense">
                <option value="All">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
            <label htmlFor="magic">Select by magic</label>
            <select name="magic" id="magic">
                <option value="All">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
            <label htmlFor="difficulty">Select by difficulty</label>
            <select name="difficulty" id="difficulty">
                <option value="All">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
            <div id="container">
                {lolCharacters.map((character) => (
                    <div className="card-container">
                        <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${character.id}_0.jpg`} alt="${character.name}" />
                        <div class="character-name" >{character.id}</div>
                        <div class="character-tag">{character.tags}</div>
                        <div> {character.blurb}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home