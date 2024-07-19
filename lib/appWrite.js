import { Account, Client, Databases } from "react-native-appwrite";
import { config } from "./appWriteConfig";

const client = new Client();
client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const database = new Databases(client);
const createUserAccount = (userId, email, password) =>
  account.create(userId, email, password);
const createUserSession = (email, password) =>
  account.createEmailPasswordSession(email, password);
const getCurrentUser = async () => {
  try {
    const user = await account.getCurrentUser();
    return user;
  } catch (error) {
    console.error(`something went wrong while fetching the user: ${error}`);
    throw error;
  } finally {
    return null;
  }
};
export { createUserAccount, createUserSession, getCurrentUser };
