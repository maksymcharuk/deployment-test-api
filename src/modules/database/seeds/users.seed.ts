import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import * as bcrypt from 'bcrypt';

import { UserEntity } from '../../../entities/user.entity';
import { Role } from '../../../enums/role.enum';

export default class UserSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(UserEntity);
    const password = await bcrypt.hash('12345', 8);
    await repository.insert([
      {
        firstName: 'John',
        lastName: 'SuperAdmin',
        email: 'john-super-admin@email.com',
        password: password,
        role: Role.SuperAdmin,
      },
      {
        firstName: 'Alice',
        lastName: 'Admin',
        email: 'alice-admin@email.com',
        password: password,
        role: Role.Admin,
      },
      {
        firstName: 'Peter',
        lastName: 'User',
        email: 'peter-user@email.com',
        password: password,
        role: Role.User,
      },
    ]);
  }
}
