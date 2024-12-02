import { EntitySchema } from "typeorm";

const User = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    email: {
      type: "varchar",
      length: 70,
      unique: true,
    },
    password_hash: {
      type: "varchar",
      length: 255
    },
    email_verified: {
      type: "boolean",
      default: false
    },
    verfication_token: {
        type: "varchar"
    },
    created_at: {
      type: "timestamp",
      createDate: true
    },
    updated_at: {
      type: "timestamp",
      updateDate: true
    },
    deleted_at: {
      type: "timestamp",
      deleteDate: true,
      nullable: true
    }
  }
});
export default User;