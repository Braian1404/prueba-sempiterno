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

## Credenciales de Prueba

| Rol    | Usuario  | Contraseña |
|--------|----------|------------|
| ADMIN  | admin    | 1234       |
| CLIENT | client   | 1234       |

## Modelo Entidad-Relación (MER)

Se diseñó una estructura de datos optimizada para garantizar la integridad y escalabilidad del sistema médico.

* Implementado en todas las llaves primarias para mejorar la seguridad y evitar la enumeración de recursos.
* Los servicios médicos cuentan con eliminación lógica para preservar el histórico de datos.
* Uso de Enums para el control de roles (`ADMIN`, `CLIENT`).

![Diagrama MER](./docs/mer-database.png)