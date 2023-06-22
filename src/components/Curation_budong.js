import React from 'react';
import { View, Text, SafeAreaView, Image, ScrollView  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Curation_budong = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#FEFEFE',
      }}
    >
      <ScrollView>
        <View>
          <Image 
            source={require('../../assets/images/budong1.jpg')}
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
            > 어려운 부동산 용어 쉽게 정리하자!!</Text>
          </View>
  
          <View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'black',
                }}
              >{ '\n' }01. 부동산 기초 상식</Text>
            </View>
            <Text style={{ color: 'black' }}>
              { '\n' }
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>등기부 등본{ '\n' }</Text>
              소유권과 권리 관계 등이 기재된 장부이며, 부동산 계약 전에 꼭 확인해야 합니다. 등기부 등본 발급은 등기소 또는 대법원 인터넷등기소에서 열람 및 발행 가능합니다. { '\n' }{ '\n' }
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>매도인{ '\n' }</Text>
              부동산매매계약에서 목적물을 파는 자, 집을 파는 사람입니다. { '\n' }{ '\n' }
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>매수인{ '\n' }</Text>
              부동산매매계약에서 목적물을 사는 자, 집을 사는 사람입니다.{ '\n' }{ '\n' }
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>임대인{ '\n' }</Text>
              전세나 월세의 경우에서 집을 빌려주는 사람입니다.{ '\n' }{ '\n' }
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>임차인{ '\n' }</Text>
              전세나 월세의 경우에서 집을 빌려 쓰는 사람입니다.{ '\n' }{ '\n' }
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>저당권{ '\n' }</Text>
              재산을 담보로 ‘물건에 대한 권리(담보물권)’로 물건에만 설정 가능한 권리.{ '\n' }{ '\n' }
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>근저당권{ '\n' }</Text>
              채권최고액을 이용해 담보물권을 설정하는 방법. { '\n' }
              실제 대출받은 금액보다 더 많은 금액을 설정해 채무불이행이나 연체 시, 발생하는 손실을 대비하려고 하는 것입니다. 실제 대출받은 금액의 120%~130% 정도 됩니다.{ '\n' }{ '\n' }
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>확정일자{ '\n' }</Text>
              보증금 보호를 위해 설정해 놓아야 할 일자입니다. 입주할 곳 담당 주민센터를 방문해 전입신고를 한 후, 임대차계약서에 확정일자를 받으면 됩니다.{ '\n' }{ '\n' }
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>전세권설정등기{ '\n' }</Text>
              보증금을 보호하는 방법의 일환으로, 등기소에서 소유주 부동산의 등기부에 임대차에 대한 권리를 설정하는 것으로,
              등기부에 전세권 설정을 할 경우 제3자가 해당 물권의 등기부 등본을 발급했을 때 전세권자의 전세금을 확인할 수 있습니다.
              전세권 설정 등기는 집주인의 동의가 필요하고, 절차나 비용 또한 확정일자를 받는 것에 비해 높은 편이어서 전세의 경우 통상적으로 확정일자를 받습니다.
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}
            >{ '\n' }02. 동향 파악을 위한 단어 </Text>
          </View>
          <Text style={{ color: 'black' }}>
              { '\n' }
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>PF(Project Financing){ '\n' }</Text>
              부동산 PF에선 금융회사가 부동산 개발 사업에 필요한 자금을 끌어와 시행사에 대출해주고, 대신 이자를 챙깁니다.{ '\n' }{ '\n' }
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>갭투자{ '\n' }</Text>
              부동산 매매가와 임대 보증금간 가격 차액만을 투자하여 부동산 매매 시세차익을 얻는 투자 방법입니다. 흔히 전세끼고 집사기 방법으로 알려지고 있습니다. 
              갭투자는 임대 보증금 중 전세 유형의 임대 보증금이 비교적 큽니다.
              { '\n' }{ '\n' }
              예시) 매매가 1억, 전세가 9천인 아파트를 매도자 입장에서는 1억 받더라도 9천만원을 세입자에게 주어야 합니다. 
              부동산 매도자는 부동산 갭투자 신규 매입자에게 천만원만을 받고 전세보증금 지급 의무를 포함해 아파트를 함께 양도했다고 하면 아파트 매매가 끝나고, 
              신규 아파트 매입자는 표면적으로 갭투자로 아파트 매입에 소요된 금액은 천만원이 됩니다.
              갭투자자는 향후 갭투자를 통해 매입한 아파트 가격이 상승할 경우 다시 갭투자를 통해 매입한 아파트를 매도하고 이를 통해 시세차익을 얻게 됩니다. 당연히 갭투자자는 전세계약이 종료되면 전 세입자에게 전세보증금 9천만원을 제공해야 합니다.
              { '\n' }{ '\n' }
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>실거래가격지수{ '\n' }</Text>
              실제 거래되어 신고된 아파트의 거래가격 변동률을 지수화한 것을 말합니다. 일정 지역에서 거래된 아파트의 가격변화를 기준 시점(2006년 1월)을 100으로 한 상대 값으로 표시하게 됩니다.{ '\n' }
              단, 실제 거래계약이 이뤄진 달 기준으로 지수를 산정하기 때문에 일정기간 시차가 발생한다는 게 국토부의 설명입니다. { '\n' }{ '\n' }
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>낙폭과대{ '\n' }</Text>
              주식의 가치가 합리적인 이유 없이 단기간에 급격히 하락한 상태.{ '\n' }{ '\n' }
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>하방경직{ '\n' }</Text>
              하방경직성이라 하면 아래로 혹은 밑으로 내려가려는데 더 이상 내려가지 않는 성질을 말합니다. 경제 분야에서는 주로 임금 혹은 주가의 하방경직성이라는 말에 주로 사용합니다. { '\n' }
              즉, 임금은 한 번 오르면 오른 상태에서 잘 내려가지 않으므로, 경직성이라는 말이 적절합니다. 
              주가도 일정 부분 빠지면 더 이상 잘 내려가지 않는 시점이 오는데, 이렇게 더 이상 하락하지 않는 상태가 되면 하방경직성을 확보했다고 합니다. { '\n' }{ '\n' }
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>매매수급지수{ '\n' }</Text>
              회원 중개업소 설문과 인터넷 매물 건수 등을 분석해 수요와 공급 비중을 지수화한 것입니다. 
              0에 가까울수록 공급이 수요보다 많고, 200에 가까울수록 수요가 공급보다 많고, 100에 가까우면 수요와 공급의 비중이 비슷하다는 것을 뜻합니다.{ '\n' }{ '\n' }
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>자금조달지수(COFIX, Cost of Funds Index){ '\n' }</Text>
              정보제공은행들의 자금조달금리를 가중평균하여 산출한 자금조달비용지수를 의미합니다.{ '\n' }{ '\n' }
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>자산유동화기업어음{ '\n' }</Text>
              자산유동화회사(SPC)가 기업이나 은행의 매출채권(미수금 등 기업의 수익창출활동 중 발행한 채권), 회사채(기업이 사설투자, 운영 등에 필요한 자금 조달을 위해 발행하는 채권), 
              부동산 등의 자산을 담보로 발행하는 기업어음(CP)입니다.{ '\n' }
              어음은 채권자와 채무자가 일정한 날짜에 돈을 주고받기로 약속한 내용을 명시한 서류로 일종의 차용증이라고 생각하면 쉽고,
              자산유동화회사(SPC)는 부동산 등의 비유동자산을 현금과 같은 유동자산으로 바꾸는 일을 전문적으로 하는 회사입니다.
              { '\n' }{ '\n' }
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>레버리지{ '\n' }</Text>
              레버리지란 ‘지렛대’라는 뜻으로 금융에서는 자본금을 지렛대로 삼아 더 많은 외부 자금을 차입하는 것으로,
              레버리지 비율이 높을수록 자기자본대비 부채비율이 높다는 것을 의미합니다.{ '\n' }
              적절한 레버리지는 투자의 효율성을 높이기도 하고 경영의 측면에서는 기업 운영의 효율성을 높이는 긍정적이 효과를 가지는 반면, 
              투자가 실패로 돌아갈 경우에는 투자 손실을 확대시키는 요인으로 작용하기도 하는 등 부작용을 가집니다. 디레버리지는 레버리지와 반대로 부채비율을 줄여나가는 것을 말합니다.

            </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
   
  );
};

export default Curation_budong;
