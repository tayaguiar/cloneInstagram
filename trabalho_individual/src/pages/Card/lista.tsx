import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const NomesScreen = () => {
  const [nomes, setNomes] = useState(['faculdade_unica_ipatinga', 'viva_desconto', 'facuminas.oficial', 'ucamposgraduacao']);
  const [listaVisivel, setListaVisivel] = useState(false);
  const [nomesSelecionados, setNomesSelecionados] = useState([]);

  const toggleLista = () => {
    setListaVisivel(!listaVisivel);
  };

  const handleNomePress = (nome) => {
    // Adicione lógica para manipular a seleção/deseleção do nome aqui
    // Por exemplo, adicione/remova o nome do array de nomesSelecionados
    setNomesSelecionados((prevState) =>
      prevState.includes(nome)
        ? prevState.filter((item) => item !== nome)
        : [...prevState, nome]
    );
  };

  return (
    <View>
      {nomes.map((nome) => (
        <TouchableOpacity key={nome} onPress={() => handleNomePress(nome)}>
          <Text>{nome}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity onPress={toggleLista}>
        <Text>Mostrar Lista</Text>
      </TouchableOpacity>

      {listaVisivel && (
        <FlatList
          data={nomesSelecionados}
          renderItem={({ item }) => (
            <View>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      )}
    </View>
  );
};

export default NomesScreen;
