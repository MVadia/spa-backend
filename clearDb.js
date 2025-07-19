const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'spa-booking.db');
const db = new sqlite3.Database(dbPath);

// Drop and recreate the bookings table
db.serialize(() => {
    // Drop the existing table
    db.run('DROP TABLE IF EXISTS bookings', (err) => {
        if (err) {
            console.error('Error dropping table:', err);
        } else {
            console.log('Table dropped successfully');
        }
    });

    // Create the table again with email field
    const createTable = `CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        date TEXT NOT NULL,
        time TEXT NOT NULL,
        people INTEGER NOT NULL
    )`;
    
    db.run(createTable, (err) => {
        if (err) {
            console.error('Error creating table:', err);
        } else {
            console.log('Table recreated successfully with email field');
        }
        db.close();
    });
}); 