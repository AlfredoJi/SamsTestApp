import { gql, useQuery } from "@apollo/client";
import { View, Text } from 'react-native';

const GET_POSTS = gql`
query GetPosts {
  posts {
    author
    createdAt
    description
    id
    image
    likes
    title
  }
}
`;

export default function List() {
    const { loading, error, data } = useQuery(GET_POSTS);
    if (loading) return <Text>Loading</Text>
    if (error) return <Text>Something bad is happening</Text>
    return (
        <View>
            {data.posts.map((post) =>
                <View key={post.id}>
                    <Text>{post.title}</Text>
                </View>
            )}
        </View>
    )
}