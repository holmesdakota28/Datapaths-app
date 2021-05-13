import React from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions, Image} from 'react-native';
import Constants from 'expo-constants';
import CollapsibleView from "@eliav2/react-native-collapsible-view";

import ToggleButton from './components/ToggleButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {

  return(
    <View style = {styles.container}>
      <ScrollView style = {styles.scrollViewStyle} vertical = {true} >
        <Text style = {styles.titleSwag}> Datapath Design Tutorial </Text>
          <CollapsibleView
              title={<Text style={styles.heading}>General Overview</Text>}
              style={ styles.borderSwag }
              arrowStyling={ { size: 36, rounded: true, thickness: 8, color: "dodgerblue" }} >
                <Text style={styles.info}>
                  The primary intention of this tutorial is to educate you on how the
                  processor of your standard computer, phone, or tablet works.{'\n'}
                  {'\n'}
                  We will be evaluating datapath diagrams for several instructions that
                  the processor interprets, which will give you a basic understanding of
                  how to conceptualize the instructions at a micro-architectural level.
                  {'\n'}{'\n'}
                  Let's begin by trying to understand the responsibilities of the CPU (Central Processing Unit)
                  . At a basic level, the CPU’s primary job is to execute the instructions of a program. These 
                  programs can be anything from the operating system, your internet browser, or a videogame. 
                  {'\n'}{'\n'}
                  -The CPU consists of two primary sections, the datapath and the control.
                  {'\n'}{'\n'}
                  -Datapath is the set of hardware components that combine to execute an instruction.
                  {'\n'}{'\n'}
                  -Control is the set of signals that tell the datapath what to do.
                </Text>
          </CollapsibleView>


          <CollapsibleView  
              title={<Text style={styles.heading}>Datapath Preview</Text>}
              style={ styles.borderSwag }
              arrowStyling={ { size: 36, rounded: true, thickness: 8, color: "dodgerblue" } }>
            <Image style={styles.image} source={require('./assets/DataPathEx.png')}/>
          </CollapsibleView>


          <CollapsibleView  
              title={<Text style={styles.heading}>Datapath Elements</Text>}
              style={ styles.borderSwag }
              arrowStyling={ { size: 36, rounded: true, thickness: 8, color: "dodgerblue" } }>
                
            <CollapsibleView 
              title={<Text style={styles.subHeading}>ALU</Text>}
              style={ styles.subBorderSwag }
              arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                <Text style ={styles.info}>
                  -The ALU is the brain for logic operations within the CPU. It takes in two operands, and 
                  performs addition, subtraction, multiplication, or division depending on the given instruction.
                  {'\n'}{'\n'}
                  -The adder is a special type of ALU that only performs addition. This element is used when it is 
                  guaranteed this is the only logic operation needed.
                </Text>
            </CollapsibleView>

            <CollapsibleView title={<Text style={styles.subHeading}>Multiplexer</Text>}
              style={ styles.subBorderSwag }
              arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                <Text style = {styles.info}>
                  ........
                </Text>
            </CollapsibleView>

            <CollapsibleView title={<Text style={styles.subHeading}>Register File</Text>}
              style={ styles.subBorderSwag }
              arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                <Text style = {styles.info}>
                  ........
                </Text>
            </CollapsibleView>

            <CollapsibleView title={<Text style={styles.subHeading}>Instruction Memory</Text>}
              style={ styles.subBorderSwag }
              arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                <Text style = {styles.info}>
                  ........
                </Text>
            </CollapsibleView>

            <CollapsibleView title={<Text style={styles.subHeading}>Data Memory</Text>}
              style={ styles.subBorderSwag }
              arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                <Text style = {styles.info}>
                  ........
                </Text>
            </CollapsibleView>

            <CollapsibleView title={<Text style={styles.subHeading}>Logic Gates</Text>}
              style={ styles.subBorderSwag }
              arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                <Text style = {styles.info}>
                  ........
                </Text>
            </CollapsibleView>
          </CollapsibleView>


          <CollapsibleView  
              title={<Text style={styles.heading}>Execution Stages</Text>}
              style={ styles.borderSwag }
              arrowStyling={ { size: 36, rounded: true, thickness: 8, color: "dodgerblue" } }>
                
            <CollapsibleView 
              title={<Text style={styles.subHeading}>Fetch</Text>}
              style={ styles.subBorderSwag }
              arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                <Text styles = {styles.info}>
                  ........
                </Text>
            </CollapsibleView>

            <CollapsibleView 
              title={<Text style={styles.subHeading}>Decode</Text>}
              style={ styles.subBorderSwag }
              arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                <Text styles = {styles.info}>
                  .....
                </Text>
            </CollapsibleView>

            <CollapsibleView 
              title={<Text style={styles.subHeading}>Execute</Text>}
              style={ styles.subBorderSwag }
              arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                <Text styles = {styles.info}>
                  .......
                </Text>
            </CollapsibleView>
          </CollapsibleView> 


          <CollapsibleView  
              title={<Text style={styles.heading}>Control Signals Overview</Text>}
              style={ styles.borderSwag }
              arrowStyling={ { size: 36, rounded: true, thickness: 8, color: "dodgerblue" } }>
                <CollapsibleView 
                  title={<Text style={styles.subHeading}>Regdst</Text>}
                  style={ styles.subBorderSwag }
                  arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                    <Text style = {styles.info}>
                      ........
                    </Text>
                </CollapsibleView>
                <CollapsibleView 
                  title={<Text style={styles.subHeading}>RegWrite</Text>}
                  style={ styles.subBorderSwag }
                  arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                    <Text style = {styles.info}>
                      ........
                    </Text>
                </CollapsibleView>
                <CollapsibleView 
                  title={<Text style={styles.subHeading}>ALUSrc</Text>}
                  style={ styles.subBorderSwag }
                  arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                    <Text style = {styles.info}>
                      ........
                    </Text>
                </CollapsibleView>
                <CollapsibleView 
                  title={<Text style={styles.subHeading}>MemWrite</Text>}
                  style={ styles.subBorderSwag }
                  arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                    <Text style = {styles.info}>
                      ........
                    </Text>
                </CollapsibleView>
                <CollapsibleView 
                  title={<Text style={styles.subHeading}>MemtoReg</Text>}
                  style={ styles.subBorderSwag }
                  arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                    <Text style = {styles.info}>
                      ........
                    </Text>
                </CollapsibleView>
                <CollapsibleView 
                  title={<Text style={styles.subHeading}>MemRead</Text>}
                  style={ styles.subBorderSwag }
                  arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                    <Text style = {styles.info}>
                      ........
                    </Text>
                </CollapsibleView>
                <CollapsibleView 
                  title={<Text style={styles.subHeading}>PC Src</Text>}
                  style={ styles.subBorderSwag }
                  arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                    <Text style = {styles.info}>
                      ........
                    </Text>
                </CollapsibleView>
          </CollapsibleView>


          <CollapsibleView  
              title={<Text style={styles.heading}>Instructions</Text>}
              style={ styles.borderSwag }
              arrowStyling={ { size: 36, rounded: true, thickness: 8, color: "dodgerblue" } }>

              <CollapsibleView title={<Text style={styles.subHeading}>ALU</Text>}
                style={ styles.subBorderSwag }
                arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                  <CollapsibleView title={<Text style={styles.subHeadingContent}>Execution</Text>}
                    style={ styles.subBorderContent }
                    arrowStyling={ { size: 12, rounded: true, thickness: 3, color: "#007513" } }>
                      <Text styles = {styles.info}>
                        ........
                      </Text>
                  </CollapsibleView>

                  <CollapsibleView title={<Text style={styles.subHeadingContent}>Control Signals</Text>}
                    style={ styles.subBorderContent }
                    arrowStyling={ { size: 12, rounded: true, thickness: 3, color: "#007513" } }>
                      <Text styles = {styles.info}>
                        ........
                      </Text>
                  </CollapsibleView>
              </CollapsibleView>

              <CollapsibleView title={<Text style={styles.subHeading}>Load</Text>}
                style={ styles.subBorderSwag }
                arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                    <CollapsibleView title={<Text style={styles.subHeadingContent}>Execution</Text>}
                      style={ styles.subBorderContent }
                      arrowStyling={ { size: 12, rounded: true, thickness: 3, color: "#007513" } }>
                        <Text styles = {styles.info}>
                          .......
                        </Text>
                    </CollapsibleView>

                    <CollapsibleView title={<Text style={styles.subHeadingContent}>Control Signals</Text>}
                      style={ styles.subBorderContent }
                      arrowStyling={ { size: 12, rounded: true, thickness: 3, color: "#007513" } }>
                        <Text styles = {styles.info}>
                          ........
                        </Text>
                    </CollapsibleView>
              </CollapsibleView>

              <CollapsibleView title={<Text style={styles.subHeading}>Store</Text>}
                style={ styles.subBorderSwag }
                arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                      <CollapsibleView title={<Text style={styles.subHeadingContent}>Execution</Text>}
                        style={ styles.subBorderContent }
                        arrowStyling={ { size: 12, rounded: true, thickness: 3, color: "#007513" } }>
                          <Text styles = {styles.info}>
                            .......
                          </Text>
                      </CollapsibleView>

                      <CollapsibleView title={<Text style={styles.subHeadingContent}>Control Signals</Text>}
                        style={ styles.subBorderContent }
                        arrowStyling={ { size: 12, rounded: true, thickness: 3, color: "#007513" } }>
                          <Text styles = {styles.info}>
                            ........
                          </Text>
                      </CollapsibleView>
              </CollapsibleView>

              <CollapsibleView title={<Text style={styles.subHeading}>Branch</Text>}
                style={ styles.subBorderSwag }
                arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                       <CollapsibleView title={<Text style={styles.subHeadingContent}>Execution</Text>}
                          style={ styles.subBorderContent }
                          arrowStyling={ { size: 12, rounded: true, thickness: 3, color: "#007513" } }>
                            <Text styles = {styles.info}>
                              .......
                            </Text>
                        </CollapsibleView>

                        <CollapsibleView title={<Text style={styles.subHeadingContent}>Control Signals</Text>}
                          style={ styles.subBorderContent }
                          arrowStyling={ { size: 12, rounded: true, thickness: 3, color: "#007513" } }>
                            <Text styles = {styles.info}>
                              ........
                            </Text>
                        </CollapsibleView>
              </CollapsibleView>

          
          </CollapsibleView>

  




        <Text> </Text>
        <Text style={styles.footer}>
          Created by Matt Faulk and Dakota Holmes
        </Text>
        <Text> </Text>
      </ScrollView> 
    </View>

  );
}

const styles = StyleSheet.create({
  scrollViewStyle: {
   height: "100%",
   width: "100%",
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#99d19e',
    padding: 5,
    justifyContent: 'center',
  },
  borderSwag: { 
    borderWidth: 7, 
    backgroundColor: "#d4d4d4"
  },
  subBorderSwag: { 
    borderWidth: 4, 
    backgroundColor: "#bfbdbd" 
  },

  subBorderContent: { 
    borderWidth: 2,
    backgroundColor: "#f5f5f5"
  },
  
  subcontainer: {
    flex: 1,

    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },
  scrollnotif: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: windowHeight - 570,
  },

  titleSwag: {
    fontSize: 45,
    marginTop: 75,
    marginBottom: 20,
    textAlign: 'center',
    color: "black",
  },

  heading: { 
    color: "black", 
    fontSize: 26, },

  subHeading: {
    color: "black", 
    fontSize: 19, },

  subHeadingContent: { 
    color: "black",
    fontSize: 15,
  },

  info: {
    margin: 24,
    fontSize: 18,
  },
  image: {
    margin: 0,
    flex: 1,
    width: windowWidth - 10,
    height: windowHeight - 600,
    resizeMode: 'contain',
  },
  footer: { 
      textAlign: "center"
  },

});