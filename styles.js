import { StyleSheet, Platform ,Dimensions} from "react-native";
import { colors } from "./colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({

topView: {
    flex: 1.0,
    justifyContent: "center",
},

middleView:{
    flex: 8.0,
    justifyContent: "flex-start",
    backgroundColor:colors.sliver,
},

bottomView: {
    flex: 1.0,
    flexDirection:"row",
    marginBottom:10,  
},

bottomViewNext:{
    flex:1.0,
    backgroundColor:colors.sliver,
},

enterButton:{
    width: 60,
    height: 60,
    marginLeft: 10,
    marginTop:7
},

wrapper: {
    flex: 1
},

buttonText:{
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "PruSansNormal-Demi" : "pruSansBold",
    fontWeight: '600',
    color: colors.whites,
    textAlign: 'center'
},

bottomButtonContainer:{
    width: '90%',
    height: 45,
    backgroundColor: colors.red,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop:10,
    marginLeft:20,  
},

chatText:{
    fontSize: 15,
    fontFamily: Platform.OS === "ios" ? "PruSansNormal-Demi" : "pruSansBold",
    color: colors.deepGrey,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    marginBottom:10
},

optionText:{
    fontSize: 15,
    fontFamily: Platform.OS === "ios" ? "PruSansNormal-Demi" : "pruSansBold",
    color: colors.deepGrey,
    fontWeight: 'bold',
    marginTop:10,
    marginLeft:20
},

crossstyle: {
    width: 22,
    height: 22,
    marginLeft: 10,
},

chatContainer:{
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    alignItems: "flex-start"
},
chatbox:{
    maxWidth: 280,
    borderColor: colors.whites,
    justifyContent: "center",
    backgroundColor:colors.whites,
    alignItems: "flex-start",
    marginLeft:20,  
},

optionBox:{
    backgroundColor:colors.whites,
},

linestyle:{
    marginTop:20,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    marginLeft:10,
    marginRight:10
},

chatInsertBox:{
    width:320,
    height: 60,
    borderRadius:10, 
    borderColor: colors.black, 
    borderWidth: 1,
    marginLeft:10,
    marginTop:7,
},

});

export default styles;