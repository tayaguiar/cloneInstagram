import { StyleSheet } from "react-native";

export const stylesLogin = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },

  languageText: {
    justifyContent: "center",
    color: "white",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 200,
  },

  input: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "transparent",
    borderRadius: 5,
  },

  loginButton: {
    width: "80%",
    paddingVertical: 10,
    backgroundColor: "#3498db",
    borderRadius: 20,
  },

  buttonText: {
    color: "white",
    height: 22,
    width: 280,
    textAlign: "center",
  },

  forgotPassword: {
    marginTop: 10,
    color: "white",
  },

  instagramImage: {
    width: 65,
    height: 65,
    marginBottom: 70,
  },

  metaLogo: {
    width: 50,
    height: 10,
    resizeMode: "contain",
  },

  createAccountButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderColor: "#3498db",
    borderWidth: 2,
    backgroundColor: "transparent",
    height: 40,
    width: "50%",
  },

  createAccountText: {
    color: "#3498db",
    textAlign: "center",
    fontWeight: "bold",
    height: 40,
    width: 255,
  },

  forgotPasswordContainer: {
    marginBottom: 55,
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default stylesLogin;
