
*Importante* crear una BD en postgre llamada "medic"

<Strong>Arquitectura:</Strong> Basada en módulos (NestJS), siguiendo el patrón de diseño de controladores y servicios para separar la lógica de negocio de las rutas.

<Strong>Modelado de Datos: </Strong> Relacional en PostgreSQL, con una entidad User (usando UUIDs para seguridad) y una entidad MedicalService con campos de fecha para el filtrado.

<Strong>Autenticación:</Strong> JWT (JSON Web Tokens) con estrategia de Passport. Se eligió esta estrategia por su escalabilidad y facilidad de integración con roles (Guards).
