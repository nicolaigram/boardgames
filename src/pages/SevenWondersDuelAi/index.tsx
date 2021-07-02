import React, { useEffect, useState } from 'react';

function App() {
  const [heroImg, setHeroImg] = useState<any>(null)
  const [cardImg, setCardImg] = useState<any>(null)

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
    return () => window.removeEventListener("keydown", keyDownHandler)
  },[])

  const keyDownHandler = (e: any) => {
    const rKey = 82;
    const spaceKey = 32;
    console.log(e.keyCode)
    if (e.keyCode === spaceKey) handleClickRandomCard()
    if (e.keyCode === rKey) handleClickRandomHero()
  }

  const handleClickRandomHero = () => {
    const randomHeroImg = getRandomHero()
    setHeroImg(randomHeroImg)
  }

  const handleClickRandomCard = () => {
    const randomCardImg = getRandomCard()
    setCardImg(randomCardImg)
  }

  return (
    <div className="App" style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "15%",
      margin: "0 auto"
    }}>
      {heroImg && <img src={heroImg} alt="hero" />}
      <button onClick={handleClickRandomHero}>Random Hero (R)</button>
      {cardImg && <img src={cardImg} alt="card" />}
      <button onClick={handleClickRandomCard}>Random Card (Space)</button>
    </div>
  );
}

const getRandomHero = () => {
  const numberOfHeroes = 5
  const randomIndex = Math.floor(Math.random() * numberOfHeroes + 1)
  return `${process.env.PUBLIC_URL}/7wonders/heroes/${randomIndex}.png`
}

const getRandomCard = () => {
  const numberOfCards = 12
  const randomIndex = Math.floor(Math.random() * numberOfCards + 1)
  return `${process.env.PUBLIC_URL}/7wonders/cards/${randomIndex}.jpg`
}

function importAll(r: any) {
  return r.keys().map(r);
}


export default App;
