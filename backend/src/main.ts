import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { spawn } from 'child_process';
import * as path from 'path';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // const s = spawn('python', [
    //     '-u',
    //     path.join(__dirname, './python/p.py'),
    //     '--foo',
    //     'some value for foo'
    // ]);

    // s.stdout.on('data', data => {
    //     console.log(`data:${data}`);
    // });
    // s.stderr.on('data', data => {
    //     console.log(`error:${data}`);
    // });
    // s.stderr.on('close', () => {
    //     console.log('Closed');
    // });
    app.setGlobalPrefix('api');
    await app.listen(5000);
}
bootstrap();
