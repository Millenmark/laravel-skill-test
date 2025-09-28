# Laravel + Inertia Developer Skills Test

## 🚀 Setup

1. Clone this repository
    ```bash
    git clone git@github.com:denver3542/laravel-react-inertia-dev-test.git
    cd laravel-react-inertia-dev-test
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
5. Run database migrations

    ```bash
    php artisan migrate
    ```

6. Start the development server

```bash
composer dev
```

6. Open your browser and visit `http://localhost:8000`
