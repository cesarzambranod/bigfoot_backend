import { EntitySchema } from "typeorm";

export const Cart = new EntitySchema({
  name: "Cart",
  tableName: "carts",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    user_id: {
      type: "int",
      nullable: false
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
  },
  relations: {
    user: {
      type: "many-to-one",
      target: "User",
      joinColumn: { name: "user_id", referencedColumnName: "id" },
      cascade: true,
    },
  },
});

export default Cart;