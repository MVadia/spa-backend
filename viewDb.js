const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'spa-booking.db');
const db = new sqlite3.Database(dbPath);

console.log('Connected to database. Current bookings:');
db.all('SELECT * FROM bookings', [], (err, rows) => {
    if (err) {
        console.error('Error reading database:', err);
    } else {
        console.table(rows);
    }
    db.close();
}); 