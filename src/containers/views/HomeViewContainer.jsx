import { useEffect, useState } from "react";
import { View } from "../../components/View";
import { CharactersGrid } from "../../components/CharactersGrid";
import { Drawer } from "../../components/Drawer";
import { Accordion } from "../../components/Accordion";
// import { Pagination } from "../../components/Pagination";
import { Slider } from "../../components/Slider";

import { useFetchApi } from "../../hooks/useFetchApi";

export const HomeViewContainer = () => {
  const [characters, setCharacters] = useState([]);
  const { data, startFetch } = useFetchApi("/api/characters");
  const [show, setShow] = useState(false)
  const [items, setItems] = useState([
    {
      id: 0,
      title: "item 1",
      open: false,
      content: <div>Conteudo 1</div>
    },
    {
      id: 1,
      title: "item 2",
      open: false,
      content: <div>Conteudo 2</div>
    },
    {
      id: 2,
      title: "item 3",
      open: false,
      content: <div>Conteudo 3</div>
    },
  ])

  const onAccordionToggle = (id) => {
    setItems((prev) => {
      return prev.map((item) => {
        return {
          ...item,
          open: item.id === id ? !item.open : false
        }
        // if (item.id === id) {
        //   return {
        //     ...item,
        //     open: !item.open
        //   }
        // }
        // return item;
      })
    })
  }

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
        {/* <Pagination /> */}
        {/* <Slider /> */}
        <Accordion items={items} onToggle={onAccordionToggle} />
        <button onClick={onClick}>toggle Drawer</button>
        <CharactersGrid characters={characters} />
      </View>
    </>
  );
};
