import { useEffect, useState } from "react";
import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
} from "react-native-appwrite";
import { config } from "./appWriteConfig";
console.log("app write file loaded");
const client = new Client();
client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const database = new Databases(client);
const avatars = new Avatars(client);
const createUserAccount = (userId, email, password) =>
  account.create(userId, email, password);
const createUserSession = (email, password) =>
  account.createEmailPasswordSession(email, password);
const getCurrentUser = async () => {
  try {
    const account = await account.get();
    const user = await database.listDocuments(
      config.databaseId,
      config.usersCollection,
      [Query.equal("accountId", account.$id)]
    )[0];
    return user;
  } catch (error) {
    console.error(`something went wrong while fetching the user: ${error}`);
    throw error;
  } finally {
    return null;
  }
};
const createUserInDatabase = async (accountId, email, username) => {
  const avatarUrl = avatars.getInitials(username);
  const user = await database.createDocument(
    config.databaseId,
    config.usersCollection,
    ID.unique(),
    {
      accountId: accountId,
      avatar: avatarUrl,
      email: email,
      username: username,
    }
  );
  return user;
};
const getPosts = async () => {
  const videos = await database.listDocuments(
    config.databaseId,
    config.videoCollection
  );
  return videos;
};
const useAppWrite = (fetcherFn) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const getData = async (fetcherFn) => {
    setIsLoading(true);
    try {
      const data = await fetcherFn();
      setData(data.documents);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData(fetcherFn);
  }, []);
  return { data, isLoading };
};
export {
  createUserAccount,
  createUserInDatabase,
  createUserSession,
  getCurrentUser,
  getPosts,
  useAppWrite,
};
