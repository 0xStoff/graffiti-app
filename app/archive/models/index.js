import { createRealmContext } from "@realm/react";
import { User } from "./User";

export const UserRealmContext = createRealmContext({
  schema: [User],
});
