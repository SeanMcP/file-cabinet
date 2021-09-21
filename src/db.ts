import { verbose } from "sqlite3";

const sqlite3 = verbose();

export default new sqlite3.Database(
  "./files.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
    console.log("Connected to database");
  }
);
