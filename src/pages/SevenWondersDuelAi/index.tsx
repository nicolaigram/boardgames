import React, { useState } from 'react';

function App() {
  const [heroImg, setHeroImg] = useState<any>(null)
  const [cardImg, setCardImg] = useState<any>(null)

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
      <button onClick={handleClickRandomHero}>Random Hero</button>
      {cardImg && <img src={cardImg} alt="card" />}
      <button onClick={handleClickRandomCard}>Random Card</button>
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
