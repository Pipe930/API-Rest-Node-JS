import { getConnection } from "./../databases/database";

const getLenguages = async (req, res) => {
    try {

        const connection = await getConnection();
        const result = await connection.query('SELECT id, name_lenguage, programers FROM language');
        console.log(result);
        res.json(result);
        
    } catch (error) {

        res.status(500);
        res.send(error.message);

    }
};

const addLenguages = async (req, res) => {
    try {

        const { name_lenguage, programers } = req.body;
        console.log(req.body);

        if(name_lenguage == undefined || programers == undefined){
            res.status(400);
            res.json({message: "Bad request. Please fill all field."});
        }

        const language = {
            name_lenguage, programers
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO language SET ?", language);
        res.json({
            message: 'addLenguages'
        });

    } catch (error) {

        res.status(500);
        res.send(error.message);
    }
};

const getLenguage = async (req, res) => {
    try {

        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT id, name_lenguage, programers FROM language WHERE id = ?', id);
        console.log(result);
        res.json(result);

    } catch (error) {

        res.status(500);
        res.send(error.message);
    }
};

const updateLenguage = async (req, res) => {
    try {

        const { id } = req.params;
        const { name_lenguage, programers } = req.body;

        if(id == undefined || name_lenguage == undefined || programers == undefined){
            res.status(400);
            res.json({message: "Bad request. Please fill all field."});
        }

        const language = { name_lenguage, programers }

        const connection = await getConnection();
        const result = await connection.query('UPDATE language SET ? WHERE id = ?', [language, id]);
        res.json(result);

    } catch (error) {

        res.status(500);
        res.send(error.message);
    }
}

const deleteLenguage = async (req, res) => {
    try {

        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('DELETE FROM language WHERE id = ?', id);
        console.log(result);
        res.json(result);

    } catch (error) {

        res.status(500);
        res.send(error.message);

    }
};

export const methods = {
    getLenguages,
    addLenguages,
    getLenguage,
    deleteLenguage,
    updateLenguage
};