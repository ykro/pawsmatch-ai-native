export interface Pet {
  id: number;
  name: string;
  breed: string;
  age: string;
  photo: string;
  bio: string;
  type: 'perro' | 'gato';
}

export const pets: Pet[] = [
  {
    id: 1, name: 'Luna', breed: 'Golden Retriever', age: '2 años',
    photo: 'https://placedog.net/400/400?id=1',
    bio: 'Busco un hogar amoroso donde pueda correr y jugar. Soy muy cariñosa y me encanta estar en familia.',
    type: 'perro',
  },
  {
    id: 2, name: 'Max', breed: 'Pastor Alemán', age: '3 años',
    photo: 'https://placedog.net/400/400?id=2',
    bio: 'Soy muy juguetón y familiar. Me encanta proteger a mi familia y salir de paseo.',
    type: 'perro',
  },
  {
    id: 3, name: 'Milo', breed: 'Beagle', age: '1 año',
    photo: 'https://placedog.net/400/400?id=3',
    bio: 'Busco una familia que me adopte y me dé mucho amor. Soy pequeño pero con gran corazón.',
    type: 'perro',
  },
  {
    id: 4, name: 'Bella', breed: 'Labrador', age: '4 años',
    photo: 'https://placedog.net/400/400?id=4',
    bio: 'Soy tranquila y perfecta para un hogar con niños. Me encanta nadar y buscar la pelota.',
    type: 'perro',
  },
  {
    id: 5, name: 'Rocky', breed: 'Bulldog Francés', age: '2 años',
    photo: 'https://placedog.net/400/400?id=5',
    bio: 'Busco un hogar donde pueda descansar en el sofá. Soy el compañero perfecto para adoptar.',
    type: 'perro',
  },
  {
    id: 6, name: 'Simba', breed: 'Gato Naranja', age: '1 año',
    photo: 'https://placecats.com/400/400',
    bio: 'Soy independiente pero cariñoso. Busco una familia que me dé un hogar cálido.',
    type: 'gato',
  },
  {
    id: 7, name: 'Coco', breed: 'Poodle', age: '5 años',
    photo: 'https://placedog.net/400/400?id=7',
    bio: 'Busco adopción urgente. Soy muy leal y me encanta estar con mi familia todo el día.',
    type: 'perro',
  },
  {
    id: 8, name: 'Thor', breed: 'Husky Siberiano', age: '3 años',
    photo: 'https://placedog.net/400/400?id=8',
    bio: 'Soy activo y necesito un hogar con espacio. Me encanta correr y jugar en familia.',
    type: 'perro',
  },
  {
    id: 9, name: 'Nala', breed: 'Gata Siamesa', age: '2 años',
    photo: 'https://placecats.com/neo/400/400',
    bio: 'Busco un hogar tranquilo donde pueda ser la reina. Me gusta adoptar humanos cariñosos.',
    type: 'gato',
  },
  {
    id: 10, name: 'Toby', breed: 'Cocker Spaniel', age: '4 años',
    photo: 'https://placedog.net/400/400?id=10',
    bio: 'Soy el mejor amigo que puedas tener. Busco una familia para compartir mi vida.',
    type: 'perro',
  },
];
