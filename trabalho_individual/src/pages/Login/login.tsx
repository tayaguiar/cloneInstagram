import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { stylesLogin } from "./stylesLogin";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleForgotPassword = () => {
    console.log("Esqueceu a senha?");
  };

  const handleCreateAccount = () => {
    console.log("Criar Nova Conta");
  };

  return (
    <ImageBackground
      style={stylesLogin.backgroundImage}
      source={require("../../../src/assets/fundo-image.jpg")}
    >
      <View style={stylesLogin.container}>
        <Text style={stylesLogin.languageText}>Português (Brasil)</Text>
      </View>

      <View style={stylesLogin.container}>
        <Image
          style={stylesLogin.instagramImage}
          source={require("../../../src/assets/instagram.png")}
        />

        <TextInput
          style={[stylesLogin.input, { color: "white" }]} // Adicione a cor branca aqui
          placeholder="Nome de usuário, email ou número de celular"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <TextInput
          style={stylesLogin.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <TouchableOpacity style={stylesLogin.loginButton} onPress={handleLogin}>
          <Text style={stylesLogin.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={stylesLogin.forgotPasswordContainer}>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={stylesLogin.forgotPassword}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <View style={stylesLogin.forgotPasswordContainer} />

        <TouchableOpacity
          style={stylesLogin.createAccountButton}
          onPress={handleCreateAccount}
        >
          <Text style={stylesLogin.createAccountText}>Criar Nova Conta</Text>
        </TouchableOpacity>

        <Image
          style={{
            width: 100,
            height: 103,
            resizeMode: "contain",
          }}
          source={require("../../../src/assets/meta.png")}
        />
      </View>
    </ImageBackground>
  );
};

export default Login;
