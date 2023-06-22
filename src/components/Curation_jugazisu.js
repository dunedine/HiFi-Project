import React from 'react';
import { View, Text, SafeAreaView, Image, ScrollView  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Curation_jugazisu = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#FEFEFE',
      }}
    >
      <ScrollView>
        <View>
          <Image 
            source={require('../../assets/images/jugazisu1.jpg')}
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
            > 주가지수 어떻게 봐야할까? </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}
            >{ '\n' }주가지수란??</Text>
          </View>
  
          <View>
              <Text style={{ color: 'black' }}>
                { '\n' }
                주식시장에서는 수많은 주식 종목이 거래됩니다. 여기서 주식종목이란 주식시장에서 거래되는 주식의 고유 명칭입니다.{ '\n' }
                { '\n' }
                예를 들어 ‘삼성전자’, ‘BNK금융지주’ 등이 있습니다. 
                주식 매매는 종목별로 거래되는데, 주식시장 전체를 놓고 보면 거래되는 종목이 너무 많아서 종목별 시세를 아무리 많이 찾아봐도 시장 전반의 시세가 오름세인지 내림세인지 파악하기 어렵습니다. 
                그래서 시장전체의 시세를 한눈에 보기 쉽게 만든 것이 주가 지수입니다.{ '\n' }{ '\n' }
                주가지수를 산출하는 방법은 상장한 종목 전체를 대상으로 만드는 종합주가지수, 
                대표종목만 골라서 만드는 종합주가지수, 업종별로 만드는 종합주가지수, 시가총액 규모 별로 만드는 종합주가지수 등 여러 가지 종합주가지수가 만들어져 쓰이고 있습니다.   
                { '\n' }{ '\n' }
              
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>주요 주가 지수 { '\n' }</Text>{ '\n' }

                <Icon name="caret-right" size={20} style={{ color : 'black'}} />
                <Text style={{ fontStyle : 'italic', fontSize: 20, fontWeight: 'bold' }}>코스피/코스닥{ '\n' }</Text>
                우리나라의 주가지수는 유가증권시장에서 상장종목 전체 주가의 움직임을 지수로 산출한 종합주가수인 코스피와 중소기업이나 벤처기업 주식을 주로 거래하는 코스닥 시장은 코스닥 지수를 대표 지수로 사용합니다.{ '\n' }{ '\n' }
                코스피지수와 코스닥지수는 둘 다 ‘시가(시장가격)총액’ 식으로 산출하고 있습니다. 시가 총액은 발행주식 수에 주식 단가(1주당 시세를) 곱하면 구할 수 있는데요,
                이렇게 구한 시가총액을 전 종목에 걸쳐 모두 더하면 현재 상장종목 전체의 시가총액을 구할 수 있습니다.
                이 금액이 기준시점(1980년1월4일)의 시가총액과 비교해 몇 배나 되는지 계산해 보면 코스피, 코스닥지수 같은 종합주가지수를 구할 수 있습니다.{ '\n' }{ '\n' }
                
                <Icon name="caret-right" size={20} style={{ color : 'black'}} />
                <Text style={{ fontStyle : 'italic', fontSize: 20, fontWeight: 'bold' }}>다우지수, 나스닥지수{ '\n' }</Text>
                다우지수, 나스닥지수는 미국증시에서 만들어 쓰는 대표적 종합주가지수입니다. 미국 증시는 여러 가지가 있지만 그중 가장 대표적인 뉴욕거래소와 나스닥이 있습니다.{ '\n' }{ '\n' }
                다우지수는 뉴욕 증권거래소에 상장된 우량종목이 만들어내는 주가의 추이를, 나스닥지수는 나스닥시장 상장 종목 전체의 주가 추이를 종합해 만듭니다.
                뉴욕 증권거래소는 1792년 출범 이래 세계에서 가장 규모가 큰 증권시장으로 전통적으로 크고 오래된 미국 기업과 외국 기업들이 증권을 상장해 유통시킵니다. { '\n' }
                나스닥시장은 1971년 2월 18일 출범했습니다. 규모나 안정성, 신용도는 뉴욕 증시 상장기업보다 못하지만 장래 고수익을 낼 잠재력이 있는 벤처기업과 첨단 정보기술(IT) 관련 기업들이 많이 상장되어 있습니다.
                { '\n' }{ '\n' }
                
                <Icon name="caret-right" size={20} style={{ color : 'black'}} />
                <Text style={{ fontStyle : 'italic', fontSize: 20, fontWeight: 'bold' }}>닛케이지수, S&P500지수 { '\n' }</Text>
                일본 증시의 대표적 종합주가지수인 ‘닛케이(NIKKEI 日經) 지수’는 다우존스식처럼 주요 종목 225개를 선별하여 만드는 종합주가지수입니다.{ '\n' }{ '\n' }
                일본의 유수 일간신문 니혼케이자이(日經)가 도쿄 증권거래소 상장 종목 중 주요 종목 225개의 주가 평균치로 만드는 지수이기 때문에 ‘닛케이 225’라고도 부릅니다.
                S&P 500지수는 국제적으로 명성이 있는 미국의 민간 신용평가회사인 Standard & Poor’s가 주로 미국의 선도 기업이 발행한 500개 종목을 대상으로 만들어 발표하는 종합주가지입니다. { '\n' }{ '\n' }
                S&P 500지수 역시 나스닥 지수처럼 시가총액식으로 지수를 만드는데, 나스닥 지수와는 방식이 또 다릅니다. 먼저, 지수 작성 대상 종목별로 주가에 상장주식 수를 곱해 시가총액을 구합니다. 
                기업의 시장가치에 따라 가중치를 두는 셈이죠. 이렇게 구한 전체 시가총액 합계를 지수 작성 기준년도인 1941~1943년의 평균 시가총액으로 나눈 다음 기준시점의 지수(10포인트)를 곱해서 종합주가지수를 산출합니다.

              </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
   
  );
};

export default Curation_jugazisu;
