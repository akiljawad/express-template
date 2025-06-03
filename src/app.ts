import app from '@';
import {env} from '@config'

const PORT = env.PORT;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
