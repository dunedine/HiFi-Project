import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import FloatButton from './FloatButton';
import Icon from 'react-native-vector-icons/FontAwesome';

const Article = ({ route }) => {
  const { title, content } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.titleContainer}>
          <Icon name="newspaper-o" size={24} style={styles.icon} />
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>{content}</Text>
        </View>
      </ScrollView>
      <FloatButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9f7',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
    color: 'black',
    marginTop: 6,
  },
  titleWrapper: {
    flex: 1,
    flexShrink: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  contentContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 20
  },
  content: {
    fontSize: 16,
    color: '#555555',
    lineHeight: 24,
  },
});

export default Article;
