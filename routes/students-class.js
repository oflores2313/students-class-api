const studentsClassRoutes = (app, fs) => {

    //variables
    const dataPath = 'data/students-class.json';

    //read
    app.get('/students', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if(err){
                throw err;
            }
            res.send(JSON.parse(data))
        });
    });
};

module.exports = studentsClassRoutes;