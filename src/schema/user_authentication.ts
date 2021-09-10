import {
  Action,
  ActionOperation,
  BaseEntSchema,
  Field,
  Index,
  Schema,
  UUIDType,
} from "@snowtop/ent/schema";
import { EmailType } from "@snowtop/ent-email";
import { PasswordType } from "@snowtop/ent-password";

export default class UserAuthentication extends BaseEntSchema implements Schema {
  fields: Field[] = [
    EmailType({ name: "EmailAddress", unique: true }),
    PasswordType({ name: "Password" }),
    UUIDType({
      name: "userID",
      fieldEdge: { schema: "User", inverseEdge: "authenticationDetails" },
      storageKey: "user_id",
      defaultToViewerOnCreate: true,
    }),
  ];

  actions: Action[] = [
    {
      operation: ActionOperation.Create,
      fields: ["EmailAddress", "Password", "userID"],
      hideFromGraphQL: true,
    },
  ];

  indices: Index[] = [
    {
      name: "owner",
      columns: ["user_id"],
    },
    {
      name: "email_address",
      columns: ["email_address"],
    },
  ];
}