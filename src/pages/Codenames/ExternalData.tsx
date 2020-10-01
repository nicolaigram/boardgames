import { motion } from "framer-motion";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function ExternalData({ language, version }: any) {
  const history = useHistory();
  const [text, setText] = useState("");

  const getWords = async (url: string) => {
    try {
      const result = await fetch(url + text);
      const words = await result.json();
      const formattedWords = words.map((word: any) => ({ en: word.word }));
      history.push(
        `/codenames/game/${version}/${language}/_/${btoa(
          JSON.stringify(formattedWords)
        )}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {language === "en" && (
        <>
          <motion.div
            className="option"
            onClick={() => getWords("https://api.datamuse.com/words?rel_rhy=")}
          >
            Words that rhyme with:
          </motion.div>
          <motion.div
            className="option"
            onClick={() => getWords("https://api.datamuse.com/words?rel_trg=")}
          >
            Words associated with:
          </motion.div>
          <input
            style={{ height: "40px" }}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </>
      )}
    </>
  );
}
