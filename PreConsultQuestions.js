import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  TextInput
} from "react-native";

import styles from "./styles";
import { colors } from "./colors";

export default class PreConsultQuestions extends Component {
  constructor(props) {
    
    super(props);
    console.disableYellowBox = true;
    this.state = {
      listData: [
        {
          question: "What conserns or questions do you have for a doctor today?",
          type: 'textInput',
          isQuestion: true
        }
      ],
      relations: [
        { name: "Yes", key: 1 },
        { name: "No", key: 2 },
      ],
      conernsDuration: [
        { day: "Less than one day", key: 1 },
        { day: "One day to one week", key: 2 },
        { day: "One week to one month", key: 3 }, 
        { day: "One month to one year", key: 4 },
        { day: "More than one year", key: 5 },
      ],
      count: 1,
      text: '',
      user: ''
    };
  }

  addObjectToArray = (text) => {
    if (text && text !== "") {
      var list = this.state.listData;
      this.setState({ count: this.state.count + 1 }, () => {
        list.push({
          question: `${text} : ${this.state.count - 1}`,
          type: "textInput",
          isQuestion: false
        });
        list.push({
          question: `This is a question number : ${this.state.count}`,
          type: "form",
          isQuestion: true
        });
        this.setState({ listData: list, text: "" });
      })
    }
  }

  _onClickRelation = (text) => {
    // this.setState({ count: this.state.count + 1 });
    this.addObjectToArray(text);
  }

  renderRelations = () => {
    return this.state.relations.map((item, index) => {
      return <TouchableOpacity key={index} style={styles.optionBox} onPress={() => { this._onClickRelation(item.name) }} >
        <Text style={styles.optionText}>{item.name}</Text>
        <View style={styles.linestyle} />
      </TouchableOpacity >
    })
  }

  _suggestionBasedOnQuestion = () => {
    if (this.state.listData[this.state.listData.length - 1].type === 'textInput') {
      return (
        <View style={styles.bottomView}>
          <TextInput
            style={styles.chatInsertBox}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
          <TouchableOpacity onPress={() => { this._onClickRelation(this.state.text) }} >
            <Image
              resizeMode="contain"
              style={styles.enterButton}
              source={require('./images/send_button.png')}
            />
          </TouchableOpacity>
        </View>
      )
    } else if (this.state.listData[this.state.listData.length - 1].type === 'form') {
      return (
        <View>
        { this.renderRelations() }
      </View>
      )
    } else{
      return (
        <View style={styles.bottomViewNext}>
          <TouchableOpacity style={styles.bottomButtonContainer}>
                  <Text style={styles.buttonText}>
                    NEXT
                  </Text>
                </TouchableOpacity>
        </View>
        
      )
    }
  }


  Questions = () => {
    return (
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          ref={ref => this.flatList = ref}
          onContentSizeChange={() => this.flatList.scrollToEnd({ animated: true })}
          extraData={this.state}
          data={this.state.listData}
          renderItem={({ item, index }) => {
            var chatStyle = styles.chatbox;
            var containerStyle = styles.chatContainer;
            if (!item.isQuestion) {
              chatStyle = [chatStyle, { alignItems: "flex-end",borderRadius:8,height:60,textAlign: 'center' }];
              containerStyle = [containerStyle, { alignItems: "flex-end", marginRight: 10 }];
            }
            
            return (
              <View style={containerStyle} key={index}>
               
                <View style={chatStyle}>
                  <Text style={styles.chatText}>{item.question}</Text>
                </View >
              </View>
            )
          }} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.topView}>
          <TouchableOpacity >
            <Image
              resizeMode="contain"
              style={styles.crossstyle}
              source={require('./images/back_grey.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.middleView}>
          {this.Questions()}
        </View>
        {this._suggestionBasedOnQuestion()}
      </View>
    );
  }
}