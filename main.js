const app = require("./app");
 const start = (port) => {
    try{
        app.listen(port, () => {
            console.log(`API running at http://localhost:$(port)`);
        });
    } catch(err) {
        console.log(err);
        process.exit();
    }
 };

start(5000);