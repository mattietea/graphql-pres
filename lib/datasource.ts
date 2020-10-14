export const users = [
  {
    id: "1234",
    name: "Joe Thomas",
    product: "efgh",
    email: "joe.thomas@gmail.com",
  },
  {
    id: "5678",
    name: "Bob Roberts",
    product: "abcd",
    email: "bob.roberts@gmail.com",
  },
  {
    id: "9123",
    name: "Frank Matthews",
    product: "abcd",
    email: "frank.matthews@gmail.com",
  },
];

export const products = [
  {
    id: "abcd",
    name: "Laptop",
    price: 4000.0,
  },
  {
    id: "efgh",
    name: "Television",
    price: 350.0,
  },
  {
    id: "ijkl",
    name: "Rice Cooker",
    price: 50.0,
  },
];

export const fakeAsync = <Data>(data: Data, timeout: number): Promise<Data> => {
  return new Promise((resolve, rejects) => {
    let wait = setTimeout(() => {
      clearTimeout(wait);
      resolve(data);
    }, timeout);
  });
};

export const datasource = {
  getAllUsersFromApi: () => {
    return fakeAsync(users, 1000);
  },
  getUserByIdFromApi: (id: string) => {
    const user = users.find((user) => user.id === id);

    return fakeAsync(user, 1500);
  },
  getAllProductsFromApi: () => {
    return fakeAsync(users, 1000);
  },
  getProductByIdFromApi: (id: string) => {
    const product = products.find((user) => user.id === id);
    console.log(id, product);

    return fakeAsync(product, 100);
  },
};
