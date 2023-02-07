import { useEffect, useState } from "react";
import { View } from "../../components/View";
import { CharactersGrid } from "../../components/CharactersGrid";
import { Drawer } from "../../components/Drawer";

import { useFetchApi } from "../../hooks/useFetchApi";

export const HomeViewContainer = () => {
  const [characters, setCharacters] = useState([]);
  const { data, startFetch } = useFetchApi("/api/characters");
  const [show, setShow] = useState(false)

  const onClick = () => {
    setShow(!show)
  }

  useEffect(() => {
    startFetch();
  }, []);

  useEffect(() => {
    if (data?.data?.results) {
      setCharacters(data.data.results);
    }
  }, [data]);

  useEffect(() => {
    console.log(characters);
  }, [characters]);
  return (
    <>
      <Drawer show={show} onClick={onClick} />
      <View>
        <button onClick={onClick}>toggle Drawer</button>
        <CharactersGrid characters={characters} />
      </View>
    </>
  );
};
