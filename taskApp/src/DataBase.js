import * as SQLite from 'expo-sqlite';


export const initDatabase = async () => {
  const db = await SQLite.openDatabaseAsync('notesBD');
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      note TEXT, 
      category TEXT, 
      state INTEGER, 
      anulate INTEGER
    );
  `) 
}

export const createNoteBD = async (data) => {
  try {
    const db = await SQLite.openDatabaseAsync('notesBD');
    const statement = await db.prepareAsync(
      'INSERT INTO notes (note, category, state, anulate) VALUES ($note, $category, $state, $anulate) RETURNING *'
    )
    const values = {
      $note: data.note,
      $category: data.category,
      $state: 0,
      $anulate: 0
    };
    const response = await statement.executeAsync(values);
    console.log('***datos guardados**')
    await statement.finalizeAsync();
    return {
      id: response.lastInsertRowId,
      note: data.note,
      category: data.category,
      state: 0,
      anulate: 0,
    }
  } catch (error) {

    console.log(error)
    console.log('no se pudo agregar la nota')
    return null
  }
  
}


export const listNotesBD = async (category='', pageNumber=1) => {
  //
  const db = await SQLite.openDatabaseAsync('notesBD');
  // Preparar la consulta
  const pageSize = 50
  const offset = (pageNumber-1)*pageSize

  const results = await db.getAllAsync(
    'SELECT * FROM notes WHERE category = $value LIMIT $size OFFSET $offset', { 
      $value: category, 
      $size: pageSize,
      $offset: offset,
    }
  )
  return results;
}

export const deleteNoteBD = async(idNote) => {
  try {
    const db = await SQLite.openDatabaseAsync('notesBD');
    const response = await db.runAsync('DELETE FROM notes WHERE id = ?', idNote);
    console.log('-- registro eliminado --')
    console.log(response.changes)
    if (response.changes > 0) {
      return true
    } else {return false}
  } catch (error) {
    console.log(error)
    return false
  }
}