import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveItemDataAsyncStorage = async (collectionKey: string, newData: object): Promise<void> => {
  const savedData = await AsyncStorage.getItem(collectionKey)
  const list = savedData ? [JSON.parse(savedData!)] : []
  list.push(newData)
  await AsyncStorage.setItem(collectionKey, JSON.stringify(list))
}

export const getCollectionAsyncStorage = async (collectionKey: string): Promise<any> => {
  const data = await AsyncStorage.getItem(collectionKey)
  return JSON.parse(data!)
}

export const getItemDataAsyncStorage = async (collectionKey: string, itemId: string): Promise<any> => {
  const data = await AsyncStorage.getItem(collectionKey)
  return JSON.parse(data!).find((item: any) => item.id === itemId)
}

export const deleteCollectionAsyncStorage = async (collectionKey: string): Promise<void> => {
  await AsyncStorage.removeItem(collectionKey)
}