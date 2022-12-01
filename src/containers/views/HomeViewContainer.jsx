import { useState } from "react";
import { View } from "../../components/View";
import { CharacterGrid } from "../../components/CharactedGrid";

export const HomeViewContainer = () => {
  const [characters, setCharacters] = useState([]);

  return (
    <View>
      <CharacterGrid characters={characters} />
    </View>
  );
};