import 'dotenv/config';
import {exec} from 'child_process';

exec(
    `npx typeorm-model-generator \
   -h ${process.env.DB_HOST} \
   -d ${process.env.DB_NAME} \
   -u ${process.env.DB_USER} \
   -x ${process.env.DB_PASS} \
   -e mysql \
   -o ./src/entities \
   --noConfig --noConfigs --ce pascal --cp \
   --tables Users \
   --skipRelations`,
    (err, stdout, stderr) => {
        if (err) {
            console.error(stderr);
            return;
        }
        console.log(stdout);
    }
);