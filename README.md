# Next.js MySQL Example

This project is a CRUD (Create, Read, Update, Delete) example using Next.js with MySQL database, integrated with Knex.js for SQL query building and Objection.js as the ORM (Object-Relational Mapping) on top of Knex.js.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Muurtaja/nextjs-mysql-example.git
   cd nextjs-mysql-example
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up MySQL database**:

   - Open phpMyAdmin or any MySQL client.
   - Create a new database (e.g., `nextjs-mysql-example`).

4. **Configure database connection**:

   - Open `.env` located in the root folder.
   - Update the connection details:

     ```.env
     MYSQL_HOST=HOSTNAME
     MYSQL_USER=USERNAME
     MYSQL_PASSWORD=PASSWORD
     MYSQL_DATABASE_NAME=DATABASENAME
     ```

5. **Run migrations**:

   Migrations are used to manage changes to your database schema.

   ```bash
   npx knex migrate:latest --knexfile knexfile.ts
   ```

6. **Run seeders** (optional):

   Seeders are used to populate your database with initial data.

   ```bash
   npx knex seed:run --knexfile knexfile.ts
   ```

7. **Start the development server**:

   ```bash
   npm run dev
   ```

   The Next.js development server will start. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Live Project
You can view the live project at [Live Project Link](#).

## Packages Used

- **Knex.js**: SQL query builder for Node.js. [Documentation](https://knexjs.org/)
- **Objection.js**: ORM for Node.js, built on Knex.js. [Documentation](https://vincit.github.io/objection.js/)
- **mysql2**: Fast MySQL driver for Node.js. [Documentation](https://sidorares.github.io/node-mysql2/docs)
- **axios**: JavaScript library for making HTTP requests. [Documentation](https://axios-http.com/)

## Additional Commands

- **Create migration**: To create a new migration file:

  ```bash
  npx knex migrate:make migration_name --knexfile knexfile.ts
  ```

- **Create seeder**: To create a new seeder file:

  ```bash
  npx knex seed:make seed_name --knexfile knexfile.ts
  ```

## Creating Models

1. Copy and modify existing model from `database\Models\User.ts`.
2. Update the class name and database table name as needed.
3. Refer to the [Objection.js documentation](https://vincit.github.io/objection.js/guide/models.html#examples) for more details on defining models.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to suggest improvements or fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit) file for details.