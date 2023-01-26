import { useEffect, useState } from "react";
import { View } from "../../components/View";
import { CharactersGrid } from "../../components/CharactersGrid";

import { useFetchApi } from "../../hooks/useFetchApi";

export const HomeViewContainer = () => {
  const [characters, setCharacters] = useState([]);
  const { data, startFetch } = useFetchApi("/api/characters");

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
    <View>
      <CharactersGrid characters={characters} />
    </View>
  );
};
