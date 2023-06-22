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
            source={require('../../assets/images/zeonse1.jpg')}
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
            > 지속적인 전세사기, 낱낱이 파헤쳐보자! </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}
            >{ '\n' }전세란??</Text>
          </View>
    
          <View>
            <Text style={{ color:'black' }}>
            <Text>전세란 제도는 전 세계에서 한국에만 있는 독특한 주택임대차 제도입니다.{ '\n' }</Text>
              
              <Text>임차인이 주택가격의 일부를 보증금으로 맡기고 임대인의 주택을 빌려 거주한 뒤 계약금액을 돌려받는 주택임대차 유형으로, 
              월세를 내지 않는다는 점에서 월세와 차별화됩니다.{ '\n' }</Text>
              <Text>전세 제도는 주택금융시장이 활성화되기 이전에 집주인은 부족한 주택구입자금을 전세자금을 이용하여 무이자로 융통하고, 세입자는 주택가격보다 낮은 가격에 주택을 임차하여 금전적인 부담을 덜 수 있는 장점이 집주인과 세입자의 이해관계가 맞아 떨어지면서 나타났습니다.
              과거 우리나라의 상황은 전세가 확산될 수밖에 없었습니다. 
              { '\n' }{ '\n' }
              도시지역의 주택부족이 심각하였고, 주택가격이 지속적으로 상승하였기 때문에 집주인은 주택가격 상승으로 인한 시세차익을 전세 세입자는 보다 낮을 가격으로 주택을 임차할 수 있었습니다.
              하지만 현재는 주택공급량이 많아지고 부동산 경기 침체로 인해 주택가격 상승이 둔화되면 집주인은 전세금에 대한 이자수익에 의존해야 합니다. 
              { '\n' }{ '\n' }
              이러한 경우 현재와 같은 낮은 자금으로 주택을 임대하는 것은 수지 타산이 맞지 않게 됩니다. 주택가격이 많이 하락하면 주택가격보다 전세가격이 높아지는 역전세현상이 일어나기도 합니다.
              이러한 전세제도의 틈을 악용하여 전세사기가 기승을 부리고 있습니다.
            </Text>
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}
            >{ '\n' }전세사기의 유형</Text>
          </View>
          <View>
          <Text style={{ color:'black' }}>
            <Text>전세사기의 유형은 대표적으로 깡통전세, 대리인의 이중계약, 신탁사를 이용한 사기, 여러 임차인과 계약하는 방법  4가지가 있습니다.</Text>
              { '\n' }
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>{ '\n' }깡통전세 (갭투자)</Text>{ '\n' }
              <Text>깡통전세는 전세가격이 매매가격에 육박하는 매물을 말합니다. 
                깡통전세가 생기는 가장 큰 이유로 ‘갭투자’가 꼽힙니다. 
              소액의 자금을 이용해서, 많게는 수백 채의 주택을 매입한 다음, 임대차를 놓은 다음 계속 보증금을 돌려 막는 수법입니다.{ '\n' }{ '\n' }
              보증금을 반환해 줄 때마다 새로운 임차인을 받아들여 임대차 보증금을 반환하게 마련인데, 
              어느 순간 순환이 안 되면 전부 깡통전세로 전락해 피해를 발생시키는 유형입니다.{ '\n' }{ '\n' }
              최근 서울 중랑구에서 발생한 대규모 전세사기 의혹 사건 역시 갭투자에서 비롯된 깡통전세 사기에 해당합니다. 갭투자로 빌라 400채를 소유한 30대가 종합부동산세를 미납하면서 모든 주택을 압류당한 사건으로, 세입자들은 전세보증금을 돌려받지 못할 위기에 처했습니다.
              { '\n' }{ '\n' }
              새로운 세입자로부터 전세보증금을 받아 기존 세입자에게 돌려주는 ‘한국식 전세 임대차’ 구조에서 '깡통전세'가 될 가능성은 적지 않습니다. 특히 한국은행의 기준금리 인상 기조가 이어질 것으로 전망되면서, '깡통전세'가 늘어나고 관련 피해도 잇따르는 실정이죠. 가령 전세금 반환 소송에서 이기더라도, 임대인이 돈을 줄 여력이 없으면 보증금을 돌려받기 어렵기 때문입니다.
              </Text>{ '\n' }
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>{ '\n' }대리인의 이중계약 (갭투자)</Text>{ '\n' }
              <Text>
              대리인이 임차인과 전·월세 계약을 이중으로 맺은 뒤, 보증금을 가로채는 수법입니다. 집주인에게 월세 계약 체결을 위임받고, 임차인과는 전세계약을 맺어 보증금을 꿀꺽하는 것이죠. 
              2019년 경기 안산시에서 중개보조원으로 일하던 자매가 이런 수법을 이용, 120여 명으로부터 65억 원을 챙긴 사건이 대표적입니다.
              이 외에 대리인이 아닌 월세 세입자가 집주인 행세를 하며, 다른 임차인과 전세 계약을 체결한 사례도 이에 해당합니다.{ '\n' }
              </Text>
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>{ '\n' }신탁사를 이용한 사기</Text>{ '\n' }
              <Text>전세난이 심화하면서 신탁 등기된 매물을 '저렴한 매물'로 가장해 경제사정이 넉넉지 않은 임차인을 끌어들이는 경우를 말합니다. 
              소유권이 신탁회사에 넘어간 집을 위탁자(임대인)가 멋대로 임대차 계약을 맺고 보증금을 챙기는 사기 유형입니다.{ '\n' }{ '\n' }
              소유권이 수탁자에게 넘어간 신탁물건은 통상 특약사항으로 위탁자의 대리 임대차계약 시 수탁자의 동의를 받아야 합니다. 위탁자가 임대차계약을 맺으려면 신탁회사의 동의를 받고 신탁관계가 기재된 신탁원부 등을 임차인에게 안내하는 게 일반적인데요 만약 수탁자 동의 없는 계약을 체결하면 임차인은 '불법점유자'로 간주돼, 집을 비워야 하고 최악의 경우 보증금을 몽땅 날리게 될 가능성이 높습니다.
              신탁 사실을 확인할 수 있는 신탁원부 발급이 번거롭고, 권리 관계 파악이 까다로운 점을 악용하는 수법입니다.{ '\n' }{ '\n' }
              신탁관계에 대한 설명의무가 있는 중개인이 해당 사실을 제대로 고지하지 않아 거래 위험을 인지하지 못하는 피해자들도 적지 않습니다. 공인중개사법에 따르면 공인중개사는 대상물을 성실하고 정확하게 설명해야 하지만 일부 중개인들은 문제 소지를 구체적으로 파악하지 않고 임차인에게 거래를 종용해 사태를 키우기도 합니다.
              </Text>{ '\n' }
              <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>{ '\n' }여러 임차인과 계약</Text>{ '\n' }
              <Text>
              불가피한 사정으로 보증금을 돌려주지 못하는 집주인도 있겠지만, 처음부터 세입자의 보증금을 노린 ‘나쁜 임대인’도 분명 존재합니다. ‘나쁜 임대인’의 대표적인 유형으로, 집 한 채를 여러 임차인과 계약하는 수법이 있습니다.
              계약 전에는 타인의 임대차 사실을 알기 어려운 맹점을 노린 것이죠. 
              { '\n' }{ '\n' }
              임차인의 존재를 확인할 수 있는 방법으로 주민등록 전입세대 열람이 있지만, 임대차 계약을 맺은 이후에 신청 가능하기 때문에 계약 전에는 서류상으로 확인할 방도가 없다는 점을 노리는 수법입니다.
              중개인 없이 임대인과 직거래하는 경우, 이러한 위험에 노출될 우려가 크다는 것이 부동산업계 관계자들의 설명입니다.
              </Text>
            </Text>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}
            >{ '\n' }전세사기의 예방법(계약 전)</Text>
          </View>
          <View>
          <Text style={{ color:'black' }}>
            <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>{ '\n' }주택상태 확인하기!</Text>{ '\n' }
            <Text>
              계약 전 현장에 직접 방문하여 주택상태를 확인하는 것이 좋습니다. 
              무허가, 불법주택은 아닌지 주택의 상태는 어떤지 직접 확인하고 사진이나 동영상 등의 기록을 남겨두는 것이 좋습니다.
            </Text>{ '\n' }
            <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>{ '\n' }매매가 대비 전셋가 비율 확인하기</Text>{ '\n' }
            <Text>
            흔히 말하는 깡통전세를 피하기 위해서는 매매가 대비 전셋가 비율을 확인하셔야 합니다. 
            국토교통부에서 제공하는 실거래가 공개시스템을 활용하여 매매가 대비 전셋가가 어느정도 인지 확인하서야 합니다. 
            참고로 말하자면 매매가 대비 전셋가 비율이 80%이상이면 위험하다고 말합니다.
            </Text>{ '\n' }
            <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>{ '\n' }선순위 권리관계 확인하기</Text>{ '\n' }
            <Text>
            즉, 계약하기전 등기부 등본을 떼서 해당 주택에 대해 담보대출 같은 것이 없는지 있다면 어느정도 인지 꼭 확인하셔야 합니다. 
            계약 후 1-2일 후에도 다시 한번 확인하여 추가로 실행한 대출이 있는지 확인하는 것이 좋습니다.
            </Text>{ '\n' }
            <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>{ '\n' }임대인의 국세/지방세 체납증명서 확인하기!</Text>{ '\n' }
            <Text>
            임대인이 상습적으로 세금을 체납하는 경우 조세채권의 우선원칙에 따라 국세보다 임차인의 보증금 반환채권이 후순위로 밀리게 되어 전세보증금을 돌려받지 못할 수 있습니다. 
            </Text>
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}
            >{ '\n' }전세사기의 예방법(계약 중)</Text>
          </View>
          <View>
          <Text style={{ color:'black' }}>
          <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>{ '\n' }임대인의 신분 일치여부 확인!</Text>{ '\n' }
          <Text>
            계약 체결 시 꼭 임대인과 직접 만나서 하셔야 합니다. 등기부등본 및 신분증을 통해 집주인이 맞는지 확인하고, 부득이하게 대리인이 오는 경우 위임장과 임감증명서 등을 꼭 체크하셔야 합니다. 
            마지막으로 전세보증금 입금 시 임대인(대리인) 명의 계좌인지 확인하셔야 합니다.
          </Text>{ '\n' }
          <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>{ '\n' }공인중개사가 정상적인 곳인지 확인하기</Text>{ '\n' }
          <Text>
            국가공간정보포털 또는 한국공인중개사협회 홈페이지에 방문하여 중개업소 정상영업여부를 체크합니다. 
            간혹 중개수수료를 아끼기 위해 직거래를 하시는 분들이 있는데 매우 위험한 행위로 공인중개사를 통하여 계약하셔야 합니다.
          </Text>{ '\n' }
          <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>{ '\n' }주택임대차 표준계약서로 작성했는지 확인하기</Text>{ '\n' }
          <Text>
            표준계약서에 임대인의 미납세금 여부 및 확정일자 부여현황 등을 확인할 수 있어 추후 관련 분쟁을 예방할 수 있다.
          </Text>
          </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}
            >{ '\n' }전세사기의 예방법(계약 후)</Text>
          </View>
          <View>
          <Text style={{ color:'black' }}>
            <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>{ '\n' }계약체결 후 임대차 신고 여부</Text>{ '\n' }
            <Text>
              계약 체결 후 30일 이내에 계약내용을 신고해야 합니다. 
              임대차 신고 시 계약서를 첨부하면 확정일자가 자동부여되기 때문에 전세보증금 보호에 유리하기 때문에 계약 후 임대차 신고는 필수입니다.
            </Text>{ '\n' }
            <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>{ '\n' }잔금 지급 시 기존 계약과 다른 변동사항이 있는지 확인</Text>{ '\n' }
            <Text>
              계약 체결 이후 등기부등본 상 근저당권 설정 등의 변동사항이 없는지 확인 하셔야 합니다. 
              추가적으로 잔금지급 전 이사 갈 집이 비어 있는지 기존 세입자가 이사 갈 준비가 되어 있는지확인 후에 잔금을 지불하셔야 합니다.
            </Text>{ '\n' }
            <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>{ '\n' }이사 당일 전입신고하기</Text>{ '\n' }
            <Text>
              대항력은 전입신고 다음 날에 발생하므로 이사 당일 꼭 전입신고를 하는 것이 좋습니다.
              ※대항력 : ‘주택을 사용할 권리’, ‘보증금을 돌려받을 권리’ 를 뜻합니다. 
              전세계약 후 주민센터 가서 전입신고를 하시면 다음날 00시부터 효력이 발생합니다
            </Text>{ '\n' }
            <Text style={{ fontStyle : 'italic', fontSize: 15, fontWeight: 'bold' }}>{ '\n' }전세보증금 반환보증 가입 여부</Text>{ '\n' }
            <Text>
            보증금 반환 관련 사고 발생 시 반환을 대신 책임질 수 있는 안전한 보증기관의 보증상품에 가입하는 것이 좋습니다. 
            비용이 발생하더라도 확실하게 전세금을 지킬 수 있는 방법입니다.
            ※보증기관: 주택도시보증공사(HUG), 한국주택금융공사(HF), SGI서울보증 등
            </Text>
            </Text>
          </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
   
  );
};

export default Curation_jugazozak;
