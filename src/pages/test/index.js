// Import necessary dependencies
import React from 'react';
import { gql } from '@apollo/client';
import { initializeApollo } from '../../utiles/instance'; // assuming you have set up apollo client

// Define your GraphQL query
const query = gql`
  query {
    websiteOptions {
      generalFields {
        title
      }
    }
  }
`;

// Define your Test component
const Test = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default Test;

export const getServerSideProps = async () => {
    const apolloClient = initializeApollo(); // initialize apollo client

    // Fetch data using Apollo client
    const { data } = await apolloClient.query({
        query: query,
    });

    return {
        props: {
            title: data?.websiteOptions?.generalFields?.title,

        }
    };
};
