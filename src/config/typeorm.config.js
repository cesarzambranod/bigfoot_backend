import { DataSource } from "typeorm";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import dotenv from "dotenv";

// Cargar las variables de entorno
dotenv.config();

// Equivalente de ES module a __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Crear la instancia de DataSource
const dataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "3306"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  // Cambiado synchronize a false para migraciones manuales
  synchronize: false,
  // Solo habilitar logging en desarrollo
  logging: process.env.NODE_ENV !== "production",
  // Asegurarse de que las rutas son correctas para JS
  entities: [join(__dirname, "..", "entities", "*.js")],
  migrations: [join(__dirname, "..", "migrations", "*.js")],
  subscribers: [],
});

// Exportar como exportación por defecto
export default dataSource;
