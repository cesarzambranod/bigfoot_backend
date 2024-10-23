import { EntitySchema } from "typeorm";

const Product = new EntitySchema({
  name: "Product",
  tableName: "products",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    name: {
      type: "varchar",
      length: 50
    },
    description: {
      type: "text"
    },
    price: {
      type: "decimal",
      precision: 20,
      scale: 2
    },
    stock: {
      type: "int"
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

export default Product;