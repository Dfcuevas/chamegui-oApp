import { api, getAllUsers, createUsers, closeTest } from './helpers/helpers';
import { users } from './helpers/objects';
import { IUser } from '#types/user';
import User from '#src/database/tables/user';

beforeEach(async () => {
  await createUsers();
});

describe('GET Obtener todos los usuarios /user', () => {
  it('Deberia retornar un arreglo de usuarios', async () => {
    await api
      .get('/user')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(res => {
        expect(res.body).toBeInstanceOf(Array);
      });
  });

  it('Si no hay usuarios deberia retornar NOT_FOUND', async () => {
    await User.destroy({ where: {} });
    await api.get('/user').expect(404);
    await createUsers();
  });

  it('Deberia retornar un usuario si se obtiene por "email"', async () => {
    await api
      .get('/user/2b443eae-c922-42e2-a8e6-6e351709a08a')
      .expect(200)
      .expect('Content-Type', /json/);
  });

  it('Deberia tirar un error 404 NOT_FOUND si el usuario no existe', async () => {
    await api.get('/user/2b443eae-c922-42e2-a8e6-6e351709a08c').expect(404);
  });
});


describe('POST Crear un usuario /user', () => {
  it('Cuando se quiera crear un usuario debe añadirse a la DB', async () => {
    const newUser: Partial<IUser> = {
      email: 'it12345@gmail.com',
      name: 'iting3',
      password: '@it123',
      role: 'adopter'
    };

    await api
      .post('/user')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /json/);
  
    const response = await getAllUsers();
    const emails = response.body.map((user: IUser) => user.email);

    expect(response.body.length === users.length + 1).toBe(true);
    expect(emails).toContain(newUser.email);
  });

  it('Si no se agrega un "name" deberia tirar un BAD_REQUEST', async () => {
    const newUser: Partial<IUser>  = {
      email: 'it12345@gmail.com',
      name: '',
      password: '@it123',
      role: 'rescuer'
    };

    await api.post('/user').send(newUser).expect(500);
    const response = await getAllUsers();
    if(response.body.length) {
      expect(response.body.length).toBe(users.length);
    }
  });

  it('Si la password no contiene un "@", una mayuscula y numeros, debe tirar un error 500', async () => {
    const newUser: Partial<IUser>  = {
      email: 'it12345@gmail.com',
      name: 'iter12',
      password: 'iteo',
      role: 'rescuer'
    };
  
    await api.post('/user').send(newUser).expect(500);
    const response = await getAllUsers();
    if (response.body.length) {
      expect(response.body.length).toBe(users.length);
    }
  });
});

afterAll(async () => {
  await closeTest();
});