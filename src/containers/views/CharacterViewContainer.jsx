import { useState } from "react";
import { View } from "../../components/View";
import { CharacterHeadline } from "../../components/CharacterHeadline";

export const CharacterViewContainer = () => {
  const [character, setCharacter] = useState({});

  return (
    <View>
      <CharacterHeadline {...character} />
    </View>
  );
};
