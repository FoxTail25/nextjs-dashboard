import fs from 'fs';

export default async function getFileTest() {
    let text = await fs.readFile('./app/dashboard/customers/test.txt', 'utf8',function(err, data) {
        if(!err) {
            console.log("data", data)
        } else {
            console.log(err)
        }
    })

}