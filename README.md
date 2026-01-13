#  Sistema de Gestión de Servicios Médicos

Este proyecto es una solución backend desarrollada con **NestJS** y **PostgreSQL** para la gestión de citas y servicios médicos, cumpliendo con requerimientos de seguridad, roles y persistencia de datos.

##  Tecnologías Utilizadas
* Framework: NestJS (Node.js)
* Base de Datos: PostgreSQL con TypeORM
* Autenticación: Passport JWT (JSON Web Tokens)
* Documentación: Swagger UI

## Configuración e Instalación

1. Base de Datos:
   **IMPORTANTE** Crear una base de datos en PostgreSQL llamada `medic`.
   
2. Variables de Entorno:
   Configurar el archivo `.env` con las credenciales de su base de datos local.

3. Ejecución:
   ```bash
   npm install
   npm run start:dev
