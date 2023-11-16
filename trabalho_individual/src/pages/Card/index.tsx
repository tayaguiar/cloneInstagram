import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image, Linking} from "react-native";
import { styles } from "./styles";
import { ScrollView } from 'react-native';


export const Card = () => {
  const handleLinkPress = () => {
    Linking.openURL("https://linktr.ee/Unicaeadpos?fbclid=PAAaYXeVE_PWBKcS8FRzvezlnQPXcnks4uCGgr8veWiKEilmhefPZWfgFQNbM");
  };

  return (
    
    <View style={styles.cardPrincipal}>
      <ScrollView style={{ flex: 1 }}>
      <View style={styles.cardContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui..."
        />
        <View style={styles.iconContainer}>
          <TouchableOpacity>
          <Image
            style={styles.image1}
            source={require('../../../src/assets/redondo.png')}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            style={styles.image1}
            source={require('../../../src/assets/mais.png')}
          />
            <Text>Ícone 2</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            style={styles.image1}
            source={require('../../../src/assets/linhas.png')}
          />
            <Text>Ícone 2</Text>
          </TouchableOpacity>
        </View>
      </View>



      <View style={styles.cardContainer2}>
        <View style={styles.subcardContainer2}>
          < Image
            style={styles.image}
            source={require('../../../src/assets/logo.png')}
          />
        </View>

        <View style={styles.subcardContainer2}>
          <Text style={styles.textSubcardContainer2}>
            90
          </Text>
          <Text style={styles.textSubcardContainer2}>
            Publicaç...
          </Text>
        </View>

        <View style={styles.subcardContainer2}>
          <Text style={styles.textSubcardContainer2}>
            3.283
          </Text>
          <Text style={styles.textSubcardContainer2}>
            Seguidor...
          </Text>
        </View>

        <View style={styles.subcardContainer2}>
          <Text style={styles.textSubcardContainer2}>
            601
          </Text>
          <Text style={styles.textSubcardContainer2}>
            Seguindo
          </Text>
        </View>
      </View>




      <Text style={styles.title}>Pós-Graduação e Graduação EAD</Text>
      <Text style={styles.description}>
        Educação
        {"\n"}👉🏽 Entre em contato conosco e encontre o polo mais perto de você! 🎓
        {"\n"}🌎 + de 200 polos no... mais
        {"\n"} <Text style={styles.textStyle} onPress={handleLinkPress}>linkt.ee/Unicaeadpos</Text>
      </Text>



      <View style={styles.cardContainer3}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.cardContainer3Text1}>Painel profissional</Text>
          <Text style={styles.cardContainer3Text2}>13 contas alcançadas nos últimos 30 dias.</Text>
        </TouchableOpacity>
      </View>



      <View style={styles.cardContainer4}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.cardContainer4Text}
        >
          <Text style={styles.cardContainer4Text1}>Editar perfil</Text>
        </TouchableOpacity>


        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.cardContainer4Text}
        >
          <Text style={styles.cardContainer4Text1}>Compartilha...</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.cardContainer4Text}
        >
          <Text style={styles.cardContainer4Text1}>Contato</Text>
        </TouchableOpacity>
      </View>


        <View style={styles.cardContainer5}>
          <Image
            style={styles.image2}
            source={require('../../../src/assets/educacao.jpeg')}
          />

          <Image
            style={styles.image2}
            source={require('../../../src/assets/docencia.jpeg')}
          />

          <Image
           style={styles.image2}
           source={require('../../../src/assets/certificado.jpeg')}
          />

          <Image
            style={styles.image2}
            source={require('../../../src/assets/filosofia.jpeg')}
          />
        </View>

        <View style={styles.subcardContainer5}>
          <Text style={styles.textSubcardContainer5}>
            Educ. Infantil e
          </Text>
      
          <Text style={styles.textSubcardContainer5}>
            Docência
          </Text>
     
          <Text style={styles.textSubcardContainer5}>
            Certificado
          </Text>
      
          <Text style={styles.textSubcardContainer5}>
            Filos./Socio.
          </Text>
        </View>
      
      
      <View style={styles.cardContainer6}>
        <Image
          style={styles.image3}
          source={require('../../../src/assets/grade.png')}
        />

        <Image
          style={styles.image3}
          source={require('../../../src/assets/video.png')}
        />

        <Image
          style={styles.image3}
          source={require('../../../src/assets/perfil.png')}
        />
      
      </View>
      
    
      <View style={styles.cardContainer7}>
     
        <View style={styles.imageRow}>
          <Image style={styles.image4} source={require('../../../src/assets/image1.jpeg')} />
          <Image style={styles.image4} source={require('../../../src/assets/image2.jpeg') } />
          <Image style={styles.image4} source={require('../../../src/assets/image3.jpeg') } />
        </View>

       
        <View style={styles.imageRow}>
          <Image style={styles.image4} source={require('../../../src/assets/image4.jpeg') } />
          <Image style={styles.image4} source={require('../../../src/assets/image5.jpeg') } />
          <Image style={styles.image4} source={require('../../../src/assets/image6.jpeg') } />
        </View>

       
        <View style={styles.imageRow}>
          <Image style={styles.image4} source={require('../../../src/assets/image7.jpeg') } />
          <Image style={styles.image4} source={require('../../../src/assets/image8.jpeg') } />
          <Image style={styles.image4} source={require('../../../src/assets/image9.jpeg') } />
        </View>
      </View>

      </ScrollView>

      <View style={styles.cardContainer8}>
          <Image
            style={styles.image5}
            source={require('../../../src/assets/casaPont.png')}
          />

          <Image
            style={styles.image5}
            source={require('../../../src/assets/lupa.png')}
          />

          <Image
           style={styles.image5}
           source={require('../../../src/assets/mais.png')}
          />

          <Image
            style={styles.image5}
            source={require('../../../src/assets/videoBranc.png')}
          />

          <Image
            style={styles.image5}
            source={require('../../../src/assets/logo.png')}
          />
        </View>
    
    </View>


  );
};
export default Card;