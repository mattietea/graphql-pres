import { GetServerSideProps, NextPage } from "next";
import { GetUserByIdDocument, User } from "../generated";
import { initApollo } from "../lib/apollo-client";

interface Props {
  user: User;
}

const UserId: NextPage<Props> = ({ user }) => {
  return <div>{user.name}</div>;
};

export default UserId;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  // const apolloClient = initApollo();
  // const { userId } = params;

  // const { data } = await apolloClient.query({
  //   query: GetUserByIdDocument,
  //   variables: { id: userId },
  // });

  // console.log("hello", data);
  return { props: { user: null } };
};
