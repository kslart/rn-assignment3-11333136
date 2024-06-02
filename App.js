import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, FlatList } from 'react-native';

const App = () => {
  const categories = [
    { id: '1', title: 'Exercise', tasks: 12, image: require('./assets/images/exercise.png') },
    { id: '2', title: 'Study', tasks: 12, image: require('./assets/images/study.png') },
    { id: '3', title: 'Code', tasks: 8, image: require('./assets/images/code.png') },
    { id: '4', title: 'Cook', tasks: 5, image: require('./assets/images/cook.png') },
    { id: '5', title: 'Shop', tasks: 10, image: require('./assets/images/shop.png') },
    { id: '6', title: 'Read', tasks: 7, image: require('./assets/images/read.png') },
    { id: '7', title: 'Workout', tasks: 6, image: require('./assets/images/workout.png') },
    { id: '8', title: 'Meditate', tasks: 3, image: require('./assets/images/meditate.png') },
  ];

  const ongoingTasks = [
    { id: '1', title: 'Mobile App Development' },
    { id: '2', title: 'Web Development' },
    { id: '3', title: 'Push Ups' },
    { id: '4', title: 'Reading Book' },
    { id: '5', title: 'Grocery Shopping' },
    { id: '6', title: 'Writing Blog Post' },
    { id: '7', title: 'Workout Session' },
    { id: '8', title: 'Online Course' },
    { id: '9', title: 'Project Meeting' },
    { id: '10', title: 'Yoga' },
    { id: '11', title: 'Cooking Dinner' },
    { id: '12', title: 'Cleaning Room' },
    { id: '13', title: 'Meditation' },
    { id: '14', title: 'Photography' },
    { id: '15', title: 'Gardening' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.taskCount}>14 tasks today</Text>
        </View>
        <Image source={require('./assets/user.png')} style={styles.userIcon} />
      </View>
      <View style={styles.searchContainer}>
        <Image source={require('./assets/vector.png')} style={styles.searchIconLeft} />
        <TextInput style={styles.search} placeholder="Search" />
        <Image source={require('./assets/search.png')} style={styles.searchIconRight} />
      </View>
      <View style={styles.categories}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{item.title}</Text>
              <Text style={styles.categoryTasks}>{item.tasks} Tasks</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          horizontal
        />
      </View>
      <View style={styles.ongoingTasks}>
        <Text style={styles.sectionTitle}>Ongoing Task</Text>
        {ongoingTasks.map(task => (
          <View key={task.id} style={styles.taskItem}>
            <Text style={styles.taskText}>{task.title}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F3EB',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 52,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 354,
    height: 52,
  },
  headerLeft: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  taskCount: {
    fontSize: 16,
    color: '#888',
  },
  userIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 14,
    width: 353,
    height: 49,
    marginVertical: 20,
  },
  searchIconLeft: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  searchIconRight: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  search: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 10,
  },
  categories: {
    marginVertical: 20,
    width: 396,
    height: 192,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  categoryImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryTasks: {
    fontSize: 14,
    color: '#888',
  },
  ongoingTasks: {
    marginVertical: 20,
  },
  taskItem: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    width: 354,
    height: 128,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  taskText: {
    fontSize: 16,
  },
});

export default App;





