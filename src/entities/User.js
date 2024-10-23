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
    username: {
      type: "varchar",
      length: 30,
      unique: true,
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
    address: {
      type: "varchar",
      length: 100
    },
    phone_number: {
      type: "varchar",
      length: 15
    },
    is_active: {
      type: "boolean",
      default: true
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