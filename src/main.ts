import { startServer } from "./server";
import { connect } from "./config/typeorm"

async function main(){
    connect()
    const port: number = 5000;
    const app = await startServer();
    app.listen(port);
    console.log("App runing on port", port);
}

main();