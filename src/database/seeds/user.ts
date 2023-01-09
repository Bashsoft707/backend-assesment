import { Knex } from 'knex';
import { UserModel, Role } from '../models/user.model';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

export async function seed(knex: Knex) {
  const password = 'bash12345';

  const salt = randomBytes(8).toString('hex');
  const hash = (await scrypt(password, salt, 32)) as Buffer;

  const hashedPassword = salt + '.' + hash.toString('hex');

  await UserModel.query(knex).insert([
    {
      name: 'Bash',
      email: 'bash@mail.com',
      password: hashedPassword,
      role: Role.ADMIN,
    },
    {
      name: 'Mosh',
      email: 'mosh@mail.com',
      password: hashedPassword,
      role: Role.USER,
    },
    {
      name: 'Dan',
      email: 'dan@mail.com',
      password: hashedPassword,
      role: Role.USER,
    },
  ]);
}
