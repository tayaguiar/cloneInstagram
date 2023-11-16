import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

  cardPrincipal:{
    width:"100%",
    height:"100%",
    backgroundColor: "#000000",
  },

  cardContainer: {  
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 4, 
    width:"100%",
    height:"8%",
    paddingTop:25, 
  },

  input: {
    height: 40, //certo
    width: "62%",
    paddingLeft:15, 
  },

  iconContainer: {
    flexDirection: "row",
    width: "100%",
  },

  textMais:{
    color: "#808080",
  },

  image1:{
    width: 30, 
    height: 30,
  },

  cardContainer2:{
    flexDirection: "row",
    justifyContent: "space-around",       
  },

  subcardContainer2: {
    marginBottom: 1,  
    width: "30%", 
    height: 78,  // certo (não mexer
  },

  textSubcardContainer2:{
    fontSize: 14,
    marginBottom: 4,
    textAlign: 'center',
    fontWeight: "bold",
    color: "#e4e4e4",
    
  },

  title:{
    marginBottom: 4,
    fontWeight: "bold",
    color: "#e4e4e4",
    paddingLeft:10,
  },

  description:{
    color: "#e4e4e4",
    paddingLeft:10,
    paddingEnd:10,
  },

  cardContainer3: {
    backgroundColor: "#262626",
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    marginTop:10,
    width: "95%",
    alignSelf: "center",
  },

  cardContainer3Text1: {
    color: "#e4e4e4",
    fontWeight: "bold",
    fontSize: 15,
  },

  cardContainer3Text2: {
    color: "#707070",
  },

  cardContainer4: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10, // Ajuste o valor para reduzir o espaço
    paddingBottom: 10,
    
  },

  cardContainer4Text: {
    height: 36,
    width: "32%",
    padding: 8,
    backgroundColor: "#262626",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  cardContainer4Text1: {
    color: "#e4e4e4",
    textAlign: 'center', // Centralizar o texto
    fontWeight: "bold",
  },

  cardContainer5:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 9,
    width: "20%", //certo (não mexer)
    height: 85,  
    marginHorizontal: 11,
  },

  subcardContainer5: {
    flexDirection: "row",
    
  },

  textSubcardContainer5: {
    flex: 1,  // Ocupa todo o espaço vertical disponível
    fontSize: 10,
    marginBottom: 4,
    textAlign: 'center',
    fontWeight: "bold",  
    color: "#e4e4e4",
    padding:5,
  
    
  },

  textStyle:{
  color: 'cfd9e1', 
  textDecorationLine: 'underline',
},         

  image: {
    width: "80%",
    height: "100%",
    borderRadius: 50,
    overflow: "hidden",
    
  },
  
  cardContainer6:{
    flexDirection: "row",
    justifyContent: "space-between", 
    padding: 10,
    width: "25%", 
    height: 58,  
    marginHorizontal: 10,
  },

  image2: {
    width: "130%",
    height: "98%",
    borderRadius: 50,
    overflow: "hidden",
    alignItems: "center", 
    marginRight: 15,       
    
  },

  image3:{
    width: 35, 
    height: 35,
    marginLeft: 25,
    alignItems: 'center', 
    justifyContent: 'center',
    marginHorizontal: 50,
  },

  cardContainer7:{
    flexDirection: 'column', // Linhas dispostas verticalmente
    justifyContent: 'center', // Centraliza as linhas no eixo transversal
    alignItems: 'center', // Centraliza as linhas no eixo principal

  },

  image4:{
    width: 100, 
    height: 100,
    marginLeft: 2,
    marginBottom:1,
   
  },
  cardContainer8: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000', 
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: "space-between", 
    padding: 10, 
    height: 88,  
    marginHorizontal: 10,
    
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  image5: {
    width: 30,
    height: 33,
    marginTop:28,
  },

 
});

export default styles;
