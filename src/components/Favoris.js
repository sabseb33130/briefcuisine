const { useState, useEffect } = require("react")

export function Favoris(){

    const  [flavour,setFlavour]= useState([]);

    useEffect(() => {
        const stockage = JSON.parse(localStorage.getItem("flavour"));
        if (flavour) {
          setFlavour(stockage);
        }
      }, []);
}