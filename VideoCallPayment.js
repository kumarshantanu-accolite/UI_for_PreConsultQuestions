import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  CheckBox
} from "react-native";
import styles from "./styles";
export default class VideoCallPayment extends Component {
  render() {
    return (
      <View style={styles.VideoCallPayment}>
       
            <View style={styles.VideoCallPaymenttopView}>
              <TouchableOpacity >
                <Image
                  resizeMode="contain"
                  style={styles.VideoCallPaymentbacktyle}
                  source={require('./images/back_grey.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.VideoCallPaymentabovemiddleView}>
              <Text style={styles.VideoCallPaymentnameText}> Online Consultation</Text>
              <Text style={styles.VideoCallPaymentnameTexts}> Consultation fee</Text>
            </View>
                
            <View style={styles.VideoCallPaymentmiddleView}>
                <TouchableOpacity style={styles.VideoCallPaymentpriceContainer} disabled={true} >
                <Image
                    resizeMode="cover"
                    source={require('./images/VideoChatIcon.png')}
                    />
                <Text style={styles.VideoCallPaymentprice}>Pricing:</Text>
                <Text style={styles.VideoCallPaymentpriceButton}>$26</Text>
                <Text style={styles.VideoCallPaymentvideoText}>For Video Call</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.VideoCallPaymentupperbottomview}>
              <View style={styles.VideoCallPaymentupperbottomviewText}>
                <CheckBox style={styles.VideoCallPaymentupperbottomviewCheckbox}/>
                <Text style={styles.VideoCallPaymenttermtext}>I accept the </Text>
                <TouchableOpacity>
                  <Text style={styles.VideoCallPaymenttermsAndConditionLink}>Terms and Conditions</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.VideoCallPaymentbottomView}>
            <View style={styles.VideoCallPaymentbottombuttonStyle}>
            <TouchableOpacity style={styles.VideoCallPaymentlowersbottomButtonContainer}>
                <Text style={styles.VideoCallPaymentupdatebottombuttonText}>BACK</Text>
              </TouchableOpacity>
              <View style = {styles.VideoCallPaymentspaceingbottom}/>
            <TouchableOpacity style={styles.VideoCallPaymentlowerbottomButtonContainer} >
                <Text style={styles.VideoCallPaymentbottombuttonText}>CONTINUE</Text>
              </TouchableOpacity>
              </View>

            </View>

          </View>
    );
  }
}