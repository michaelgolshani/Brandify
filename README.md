# Launching App 
1. Clone this repository:
<br>https://github.com/michaelgolshani/Brandify.git<br>
3. Install dependencies
<br>`pipenv install -r requirements.text`<br>
4. Create a .env file based on the example with proper settings for your development environment
5. Make sure the SQLite3 database connection URL is in the .env file
6. This start organizes all tables inside the `flask_schema` schema, defined by the `SCHEMA` with a unique name, making sure you use the snake_case convention. 
7. Get into your pipenv, migrate your database, seed your database, and run your Flask app. 
<br>`pipenv shell`<br>
<br>`flask db upgrade`<br>
<br>`flask seed all`<br>
<br>`flask run`<br>
8. To run the React App in devlopment, checkout the <a href="https://github.com/michaelgolshani/Brandify/blob/main/react-app/README.md" target="_blank">README</a> inside the `react-app` directory. 
