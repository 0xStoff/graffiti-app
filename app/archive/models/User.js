import { Realm } from "@realm/react";

export class User extends Realm.Object {
  static generate(avatar, username, loginname) {
    return {
      _id: new Realm.BSON.ObjectId(),
      avatar,
      username,
      loginname,
      // isLiked: [],
    };
  }

  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static schema = {
    name: "Users",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      avatar: "string",
      username: "string",
      loginname: "string",
      // isLiked: [],
    },
  };
  // static schema = {
  //   name: "Task",
  //   primaryKey: "_id",
  //   properties: {
  //     _id: "objectId",
  //     description: "string",
  //     isComplete: { type: "bool", default: false },
  //     createdAt: "date",
  //     userId: "string",
  //   },
  // };
}
