import { gql, useQuery } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      id
      name
      product
    }
  }
`;

const IndexPage = () => {
  const { data, loading } = useQuery(GET_ALL_USERS);

  return (
    <div>
      <p>All Users</p>
      <br />
      {loading && <p>loading...</p>}
      {!loading &&
        data.getAllUsers.map((user) => (
          <li>
            {user.name} <small>{user.product}</small>
          </li>
        ))}
    </div>
  );
};

export default IndexPage;
