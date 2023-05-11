import { useState } from "react";
import Card from "./Card";

function ListDigimon() {
    const [digimons, setDigimons] = useState([
        {name: "Biyomon", img: "https://digimon.shadowsmith.com/img/biyomon.jpg"},
        {name: "Gabumon", img: "https://digimon.shadowsmith.com/img/gabumon.jpg"},
        {name: "Veemon", img: "https://digimon.shadowsmith.com/img/veemon.jpg"},
    ])

    return (
        <section className="list-digimon">
          <Card img="https://digimon.shadowsmith.com/img/koromon.jpg" name="Koromon" />
          <Card img="https://digimon.shadowsmith.com/img/tsunomon.jpg" name="Tsunomon"/>
          <Card img="https://digimon.shadowsmith.com/img/yokomon.jpg" name="Yokomon"/>

        {digimons.length > 0 && digimons.map((item, index) => (
            <Card key={index} img={item.img} name={item.name}/>
        ))}

        </section>
    );
}

export default ListDigimon;