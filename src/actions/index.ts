"use server";

import { GraphQLClientSingleton } from "@/graphql";
import { createUserMutation } from "@/graphql/mutations/createUserMutation";

export const handleCreateAccount = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  delete formDataObject["passwordConfirmation"];
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const variables = {
    input: {
      ...formDataObject,
      phone: "+52" + formDataObject.phone,
    },
  };

  const data = await graphqlClient.request(createUserMutation, variables);
  console.log(data);
};
