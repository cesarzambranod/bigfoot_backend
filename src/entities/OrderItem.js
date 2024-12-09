import { EntitySchema } from "typeorm";

const Order = new EntitySchema({
  name: "OrderItem",
  tableName: "order_items",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    order_id: {
      type: "int",
      nullable: false,
    },
    product_id: {
      type: "int",
      nullable: false,
    },
    quantity: {
      type: "int",
      nullable: false,
    },
    unit_price: {
      type: "decimal",
      precision: 20,
      scale: 2,
      nullable: false,
    },
    created_at: {
      type: "timestamp",
      createDate: true,
    },
    updated_at: {
      type: "timestamp",
      updateDate: true,
    },
    deleted_at: {
      type: "timestamp",
      deleteDate: true,
      nullable: true,
    },
  },
  relations: {
    order: {
      type: "many-to-one",
      target: "Order",
      joinColumn: {
        name: "order_id",
        referencedColumnName: "id",
      },
      cascade: true,
    },
    product: {
      type: "many-to-one",
      target: "Product",
      joinColumn: {
        name: "product_id",
        referencedColumnName: "id",
      },
      cascade: true,
    },
  },
});
export default Order;