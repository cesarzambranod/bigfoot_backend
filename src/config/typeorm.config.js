import { DataSource } from "typeorm";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import ENVIROMENT from "./enviroment.config.js";


// Equivalente de ES module a __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Crear la instancia de DataSource
const dataSource = new DataSource({
  type: "mysql",
  host: ENVIROMENT.MYSQL.DB_HOST,
  port: parseInt(ENVIROMENT.MYSQL.DB_PORT || "3306"),
  username: ENVIROMENT.MYSQL.DB_USERNAME,
  password: ENVIROMENT.MYSQL.DB_PASSWORD,
  database: ENVIROMENT.MYSQL.DB_DATABASE,
  // Cambiado synchronize a false para migraciones manuales
  synchronize: false,
  // Solo habilitar logging en desarrollo
  logging: ENVIROMENT.NODE_ENV !== "production",
  // Asegurarse de que las rutas son correctas para JS
  entities: [join(__dirname, "..", "entities", "*.js")],
  migrations: [join(__dirname, "..", "migrations", "*.js")],
  subscribers: [],
});

// Exportar como exportación por defecto
export default dataSource;
