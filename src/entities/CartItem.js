import { EntitySchema } from "typeorm";

const Cart = new EntitySchema({
  name: "CartItem",
  tableName: "cart_items",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    cart_id: {
      type: "int",
      nullable: false
    },
    product_id: {
      type: "int",
      nullable: false
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
    cart: {
      type: "many-to-one",
      target: "Cart",
      joinColumn: { name: "cart_id", referencedColumnName: "id" },
      cascade: true,
    },
    product: {
      type: "many-to-one",
      target: "Product",
      joinColumn: { name: "product_id", referencedColumnName: "id" },
      cascade: true,
    },
  },
});

export default Cart;