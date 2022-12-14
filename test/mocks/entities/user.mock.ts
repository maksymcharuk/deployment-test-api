import { UserEntity } from '../../../src/entities/user.entity';
import { Role } from '../../../src/enums/role.enum';

export const mockUser: UserEntity = {
  id: 1,
  email: 'johnsmith@email.com',
  firstName: 'John',
  lastName: 'Smith',
  password: 'hash',
  role: Role.User,
  createdAt: new Date(1, 1, 2022),
  updatedAt: new Date(1, 2, 2022),
  hashPassword: () => {
    return Promise.resolve();
  },
  validatePassword: (password: string) => {
    return new Promise((resolve) => {
      if (password === 'password') {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  },
};
