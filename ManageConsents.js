import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native';
import styles from "./styles";
export default class ManageConsents extends Component {
  render() {
    return (
      <View style={styles.wrapper}>

        <View style={styles.manageConsentsTopView}>
          <TouchableOpacity >
            <Image
              resizeMode="contain"
              style={styles.crossstyle}
              source={require('./images/back_grey.png')}
            />
          </TouchableOpacity>
          <Text style={styles.manageConsentsTopText}>Manage Consents</Text>
        </View>

        <View style={styles.manageConsentsMiddleView}>
          <Text style={styles.manageConsentsMiddleTextWrap}>
            <Text style={styles.manageConsentsMiddleText}>Manage the data you are willing to share and other terms
           and conditions you want to review. </Text>
            <Text style={styles.manageConsentsMiddleTextBold}>Please note, some features
             of the app requires access to certain information. Revoking
          consents might affect your experience with the app.</Text>
          </Text>
        </View>

        <View style={styles.manageConsentsBottomView}>
          <View style={styles.manageConsentsAcceptBox}>

          </View>
        </View>
      </View>

    );
  }
}
