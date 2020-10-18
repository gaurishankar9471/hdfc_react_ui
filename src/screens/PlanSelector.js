import React, { Component } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import {
  Text,
  IconButton,
  TextInput,
  Button,
  Card,
  Title,
  Paragraph
} from "react-native-paper";
import Header from "../components/Header";

const qtyList = [
  { id: "1", value: "Family First" },
  { id: "2", value: "Family Floater" },
  { id: "3", value: "Individual" }
];

export default class PlanSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: "3"
    };
  }
  onPressHandler(id) {
    this.setState({ selectedItem: id });
    console.log("cc");
  }

  render() {
    return (
      <View style={styles.container}>
        <Header titleText="HDFC Health Insurance" />
        <IconButton
          icon="chevron-left"
          size={25}
          color="black"
          onPress={() => console.log("cc")}
          style={styles.iconButton}
        />

        <FlatList
          extraData={this.state.selectedItem} //Must implemented
          horizontal={false}
          data={qtyList}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.onPressHandler(item.id)}>
              <Card
                style={{
                  color: "#ffffff",
                  borderColor:
                    this.state.selectedItem === item.id ? "#A64287" : "#ffffff",
                  borderWidth: 1,
                  margin: 10
                }}
              >
                <View
                  style={{
                    margin: 25,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color:
                        this.state.selectedItem === item.id
                          ? "#A64287"
                          : "#000000",
                      alignItems: "flex-start"
                    }}
                  >
                    {item.value}
                  </Text>
                  <IconButton
                    icon={
                      this.state.selectedItem === item.id
                        ? "check-circle"
                        : "circle"
                    }
                    color={
                      this.state.selectedItem === item.id
                        ? "#A64287"
                        : "#E1E1E1"
                    }
                    style={{ position: "absolute", right: 0 }}
                  ></IconButton>
                </View>
              </Card>
            </TouchableOpacity>
          )}
        />
        <Text
          style={{
            position: "absolute",
            top: 400,
            margin: 20,
            color: "#767676",
            alignItems: "center",
            alignSelf: "center"
          }}
        >
          The Health Premia indivudual Plans is designed to protect you through
          a comprehensive blanket cover for your medical expenses.
        </Text>

        <View style={styles.b}>
          <IconButton
            icon="face-agent"
            size={25}
            color="#A64287"
            onPress={() => console.log("cc")}
          />
          <Text style={{ color: "#A64287" }}>SPEAK TO OUR ADVISOR</Text>
        </View>
        <Button color="#ffffff" style={styles.buttonContinue}>
          Continue
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  iconButton: {
    position: "absolute",
    left: 0,
    top: 40,
    margin: 10
  },
  b: {
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    alignSelf: "center",
    bottom: 90
  },
  buttonContinue: {
    color: "#ffffff",
    margin: 20,
    backgroundColor: "#A64287",
    padding: 5,
    position: "absolute",
    bottom: 20,
    left: 10,
    right: 10
  }
});
