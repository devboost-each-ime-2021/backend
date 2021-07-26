import { MongoClient, Db } from 'mongodb';

export class DBConnection {
  private static Client: MongoClient;

  public static async getDB(): Promise<Db> {
    if (!this.Client) {
      const dbUSER = process.env.MONGO_USER;
      const dbPASS = process.env.MONGO_PASS;
      const dbURL = `mongodb+srv://${dbUSER}:${dbPASS}@cluster0.ewad2.mongodb.net`;

      this.Client = new MongoClient(dbURL);

      await this.Client.connect();
    }

    return this.Client.db('Cluster0');
  }
}
