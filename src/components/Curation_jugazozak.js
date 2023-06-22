import React from 'react';
import { View, Text, SafeAreaView, Image, ScrollView  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Curation_jugazozak = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#FEFEFE',
      }}
    >
      <ScrollView>
        <View>
          <Image 
            source={require('../../assets/images/jugazozak1.jpg')}
            style={{
              width: '100%',
              height: 180,
              resizeMode: 'stretch'
            }}
          />
        </View>
        <View
          style={{
            margin: 15,
            backgroundColor: '#FEFEFE'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Icon name="check-square-o" size={24} style={{ color : 'black'}} />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black'
              }}
            >요즘 이슈인 주가조작을 알아보자! </Text>
          </View>
          <View>
            </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}
            >{ '\n' }주가조작이란??</Text>
          </View>
          <View>
              <Text style={{ color: 'black' }}>
                { '\n' }
                시세차익을 목적으로 주가 형성에 인위적으로 개입하는 행위를 말한다. { '\n' }
                자금력을 이용해 주가를 인위적으로 끌어올려 투자자들을 현혹한다거나, 거짓 정보를 흘려 타인을 속이는 등의 불공정 거래를 의미한다. { '\n' }{ '\n' }
                정치테마주와 같이, 실체가 불분명한 테마주와 연관되는 경우도 빈번하다.
                주가조작에 의해 뚜렷한 이유 없이 주가가 급등하는 주식을 작전주라고 한다.
                정부는 주가조작을 막기 위해 정책적으로 노력하고 있지만, 역부족이라고 한다.
                기타 선진국 또한 비슷한 실정이며, 억지력이 없는 것이 사실이다. 따라서 주가조작은 여전히 발생할 가능성이 높다.{ '\n' }{ '\n' }

                <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>첫 번째, 주식 물량 돌리기 수법{ '\n' }</Text>
                최소 세 명이 필요한 주가 주작 방법으로, 한 세력이 대량으로 주식을 장중에 매수, 이 물량을 서로 나누면서 주가를 끌어올린다.{ '\n' }{ '\n' }

                <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>두 번째, 차트 작전 세력{ '\n' }</Text>
                이것은 기존 차트 방식을 역이용하는 작전 세력을 말한다. 그리고, 이 방식은 일반 투자자들이 수많은 주식 관련 서적 
                그리고 인터넷으로 주식 정보를 열심히 공부하고 습득하면서 생긴 새로운 작전이라고 할 수 있다.{ '\n' }{ '\n' }

                <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>세번째, 대주주들의 역발상 수법{ '\n' }</Text>
                이것은 대주주에 대한 일반적인 투자자들의 인식을 역이용한 작전이다. 그리고, 이것은 대주주가 직접 수행하는 작전으로 이를 위해 뉴스 및 공시 시스템을 이용한다.{ '\n' }{ '\n' }

                주가조작은 팀으로 이루어진다.{ '\n' }
                흔히들 '작전'이라고들 한다. 작전에는 한두 명이 아닌 팀으로 이뤄지는 것이 대부분이고, 이 팀원들은 서로의 임무가 주어 진다. 각각의 임무를 가지고 작전을 수행하는 군대 조직과 같다.{ '\n' }{ '\n' }
                작전의 시작은 돈이다. { '\n' }
                돈을 가지고 작전을 계획하는 사람, 작전을 실제로 실행하기 위한 사람과, 실현하기 위한 들러리도 필요하다. 
                자금을 대주는 이른바 전 주 외 증권회사 쪽과 연관된 사람이 많은 것이 사실이다. 그들만큼 주식거래를 잘 아는 사람도 없기 때문이다.
              </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Curation_jugazozak;
