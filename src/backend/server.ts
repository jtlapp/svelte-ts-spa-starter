import * as path from 'path';
import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

const PUBLIC_FILE_DIR = path.join(__dirname, '../../public');
const SPA_INDEX_FILE = path.join(PUBLIC_FILE_DIR, 'index.html');

const devMode = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.SITE_PORT || '80');

const app = express();
if (!devMode) {
  app.set('trust proxy', 1);
  app.use(helmet());
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(PUBLIC_FILE_DIR));
app.use('*', (_req, res) => {
  res.sendFile(SPA_INDEX_FILE);
});
app.use(async (err: any, _req: any, res: any) => {
  res.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).send({
    error: {
      status: err.status || StatusCodes.INTERNAL_SERVER_ERROR,
      message: err.message || ReasonPhrases.INTERNAL_SERVER_ERROR
    }
  });
});

// Launch server.

app.listen(port, async () => {
  console.log(`Server listening on port ${port}`);
});
