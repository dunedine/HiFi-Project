import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = {
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden', 
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  image: {
    width: '100%',
    flex: 1,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#f7f9f7',
    height: 50,
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#87d37c',
    paddingVertical: 10,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },

  activeButton: {
    backgroundColor: '#87d37c',
  },

  inactiveButton: {
    backgroundColor: '#CEF6CE',
  },
};

const Property = () => {
  const navigation = useNavigation();
  const [currentCategory, setCurrentCategory] = useState('부동산 현황');
  const curatedImages = {
    '부동산 현황_큐레이션': [
      require('../../assets/images/budong1.jpg'),
      require('../../assets/images/budong2.jpg'),     
    ],
    '전세사기_큐레이션': [
      require('../../assets/images/zeonse1.jpg'),
      require('../../assets/images/zeonse2.jpg'),
    ],
  };

  const [data, setData] = useState([]);
  const [datanow, setDatanow] = useState([]);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://192.168.0.106:5000/api/data', {
          headers: {
                'Content-Type': 'application/json',
          },
          withCredentials: true,
        });
        setData(response.data);
        setDatanow(response.data.budongsan);
      } catch (error) {
        alert('Error');
      }
    };
  
    fetchData();
  }, []);
  
 

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    if (category === '부동산 현황') {
      setDatanow(data.budongsan);
    } else if (category === '전세사기') {
      setDatanow(data.jeonsesagi); //
    }
  };

  const renderArticle = ({ item }) => (
    <View
      style={{
        marginLeft: 15,
        marginRight: 15,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 10,
          marginVertical: 5,
        }}
        onPress={() => navigation.push('Article', { title: item[1], content: item[2] })}
      >
        <View
          style={{
            marginLeft: 5,
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Icon name="angle-right" color='black' size={15} />
        
          <Text
            numberOfLines={1}
            style={{ color: 'black', fontWeight: 'bold', fontSize: 15, marginLeft: 5 }}
          >
            {item[1]}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex:1, backgroundColor: '#f7f9f7' }}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, currentCategory === '부동산 현황' ? styles.activeButton : styles.inactiveButton]}
          onPress={() => handleCategoryChange('부동산 현황')}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>부동산 현황</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, currentCategory === '전세사기' ? styles.activeButton : styles.inactiveButton]}
          onPress={() => handleCategoryChange('전세사기')}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>전세사기</Text>
        </TouchableOpacity>
      </View>
      <View 
        style={{ 
          backgroundColor: "#f7f9f7", 
          flexDirection: 'row',
          alignItems: 'center',
          left: 20,
          right: 20,
          bottom: 5,
        }}
      > 
      <Icon name="lightbulb-o" color='#283C14' size={24} />
        <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#283C14',
              left: 5
            }}
          >
            Curation
        </Text>
      </View>
      
      <View
        style={{
          marginLeft : 20,
          marginRight : 20,
          height: 180,
          justifyContent: 'center',
          alignItems: 'center', 
        }}
      >
        <Swiper
          horizontal={false}
          activeDot={
            <View
              style={{
                backgroundColor: 'white',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
        >
          {curatedImages[`${currentCategory}_큐레이션`].map((image, index) => (
            <TouchableOpacity
              key={index}
              style={styles.slide}
              onPress={() => {
                if (currentCategory === '부동산 현황') {
                  navigation.push('Curation_budong');
                } else if (currentCategory === '전세사기') {
                  navigation.push('Curation_zeonse');
                }
              }}
            >
              <Image resizeMode="stretch" source={image} style={styles.image} />
            </TouchableOpacity>
          ))}
        </Swiper>
      </View>

      <View 
        style={{ 
          backgroundColor: "#f7f9f7", 
          flexDirection: 'row',
          alignItems: 'center',
          left: 20,
          right: 20,
        }}
      >
        <Icon name="newspaper-o" color='#283C14' size={20} /> 
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#283C14',
            left: 5,
          }}
        >
          Article
        </Text>
      </View>
      <FlatList
        data={datanow}
        keyExtractor={(item) => item[0].toString()}
        renderItem={renderArticle}
      />
    </View>
  );
};

export default Property;