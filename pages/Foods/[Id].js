import DetailsPage from '@/Components/Template/DetailsPage';
import React from 'react';

const FoodDetail = ({ data }) => {
    // Display loading message if data is not available or isFallback is true
    if (typeof data === 'undefined' || data.isFallback) {
        return <h3>Loading...</h3>;
    }
    
    // Render the DetailsPage component with the fetched data
    return (
       <DetailsPage {...data} />
    );
}

export default FoodDetail;

// getStaticPaths function to generate static paths at build time
export async function getStaticPaths() {
    // Fetch the list of food items from the API
    const res = await fetch("http://localhost:4000/data");
    const json = await res.json();
    // Slice the data to limit the number of paths generated (optional)
    const data = json.slice(0, 10);

    // Map through the data to create paths with food item IDs
    const paths = data.map(food => ({ params: { Id: food.id.toString() } }));

    return {
        paths,
        fallback: true, // Enable fallback for non-predefined paths
    };
}

// getStaticProps function to fetch data for a specific food item based on the ID
export async function getStaticProps(context) {
    const { params: { Id } } = context; // Extract the ID from the context params

    try {
        // Fetch data for the specific food item from the API
        const res = await fetch(`http://localhost:4000/data/${Id}`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();

        return {
            props: { data }, // Pass the fetched data as props to the component
            revalidate: 10, // Revalidate the page every 10 seconds
        };

    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            notFound: true, // Return 404 page if data fetch fails
        };
    }
}
