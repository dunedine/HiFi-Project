import { ScrollView, View, StyleSheet, TouchableOpacity, Text, Modal } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const FloatButton = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      
      <Modal 
        visible={modalVisible} 
        transparent={true} 
        animationType="fade"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Icon name="book" color="white" size={20} style={styles.icon} />
              <Text style={styles.title}>Vocabulary</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Icon name="close" color="white" size={20} />
              </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.modalScrollView}>
                <Text style={{ color: 'black', lineHeight: 25,}}>
                  <Text style={{ fontWeight: 'bold', }}>주가조작(株價操作){"\n"}</Text>
                    1. 경제 주가를 인위적으로 끌어올리거나 내리거나 {"\n"}고정하는 일. {"\n"}{"\n"}
                    <Text style={{ fontWeight: 'bold', }}>차익결제거래 (CFD){"\n"}</Text>
                    기초자산을 보유하지 않고 가격 변동분에 대해서만 차액을 결제하는 파생상품 중 하나로, 투자 위험도가 높아 전문투자자에 한해 거래가 허용돼 있다. {"\n"}
                    국내 증권사들의 경우 헤지(위험 분산)를 위해 외국계 증권사와 계약해 CFD를 진행하고 있다.{"\n"}{"\n"}        
                    <Text style={{ fontWeight: 'bold', }}>미수금(未收金){"\n"}</Text>
                    1. 아직 거두어들이지 못한 돈.{"\n"}
                    2. 경영 부기에서, 영업 주목적 이외의 임시적 거래에서 발생하는 금전 채권. 토지 판매 대금의 미수 부분, 유가 증권의 외상 매출금 따위가 이에 해당한다. {"\n"}{"\n"}
                    <Text style={{ fontWeight: 'bold', }}>채권(債券){"\n"}</Text>
                    1. 남에게 빌린 돈의 금액을 적는 장부.
                    2. 경제 국가, 지방 자치 단체, 은행, 회사 따위가 사업에 필요한 자금을 차입하기 위하여 발행하는 유가 증권. 공채, 국채, 사채, 지방채 따위가 있다.{"\n"}{"\n"}
                    <Text style={{ fontWeight: 'bold', }}>채권추심(債權推尋){"\n"}</Text>
                    1.경제 채권자를 대신하여 채무자에게서 빚을 받아 내는 일. {"\n"}{"\n"}
                    <Text style={{ fontWeight: 'bold', }}>가압류(假押留){"\n"}</Text>
                    1. 법률 민사 소송법에서, 법원이 채권자를 위하여 나중에 강제 집행을 할 목적으로 채무자의 재산을 임시로 확보하는 일. 
                      채무자가 강제 집행을 하기 전에 재산을 숨기거나 팔아 버릴 우려가 있을 경우에 한다. {"\n"}{"\n"}
                    <Text style={{ fontWeight: 'bold', }}>예금(預金) {"\n"}</Text>
                    파생어   예금-되다 예금-하다{"\n"}
                    1. 경제 일정한 계약에 의하여 은행이나 우체국 따위에 돈을 맡기는 일. 또는 그 돈. 당좌 예금, 정기 예금, 보통 예금 따위로 나눈다.{"\n"}{"\n"}
                    <Text style={{ fontWeight: 'bold', }}>손실(損失){"\n"}</Text>
                    파생어   손실-되다 손실-하다{"\n"}
                    1. 잃어버리거나 축나서 손해를 봄. 또는 그 손해.{"\n"}{"\n"}
                    <Text style={{ fontWeight: 'bold', }}>동결(凍結){"\n"}</Text>
                    1. 추위나 냉각으로 얼어붙음. 또는 그렇게 함.{"\n"}
                    2. 자산이나 자금 따위의 사용이나 변동이 금지됨. 또는 그렇게 함.{"\n"}{"\n"}
                    <Text style={{ fontWeight: 'bold', }}>자산운용(資産運用){"\n"}</Text>
                    1.경제 투자자의 이익을 위하여 여러 종류의 유가 증권과 자산을 전문적으로 다루는 일.{"\n"}
                </Text>
            </ScrollView>
          </View>
        </View>
      </Modal>

<TouchableOpacity style={styles.floatingButton} onPress={openModal}>
  <Icon name="search" size={24} style={{ color: 'white' }} />
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  floatingButton: {
    backgroundColor: '#87d37c',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    height: '80%',
    width: '90%',
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  modalHeader: {
    backgroundColor: '#87d37c',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 10,
  },
  modalScrollView: {
    flexGrow: 1,
    padding: 17,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default FloatButton;
