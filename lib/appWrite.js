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
export { createUserAccount, createUserSession };
