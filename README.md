# Laravel + Inertia Developer Skills Test

## 🚀 Setup

1. Clone this repository
    ```bash
    git clone https://github.com/Millenmark/laravel-skill-test.git
    cd laravel-skill-test
    ```
2. Install dependencies
    ```bash
    composer install
    npm install
    ```
3. Copy the `.env.example` file to `.env` and update the database credentials
    ```bash
    cp .env.example .env
    ```
4. Generate application key
    ```bash
    php artisan key:generate
    ```
5. Run database migrations and the seeder

    ```bash
    php artisan migrate --seed
    ```

6. Start the development server

```bash
composer dev
```

- If you don't have the pail extension

```bash
php artisan server
npm run dev
```

7. Open your browser and visit `http://localhost:8000/login`

- email: test@example.com
- password: password

or you can register as a new user.
