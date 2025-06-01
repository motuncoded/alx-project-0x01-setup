import React from 'react'
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";

interface PostsPageProps {
  posts: PostProps[];
}

const Users: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">Users Content</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add User
          </button>
        </div>
        {posts.map(({ title, body, userId, id }: PostProps, key: number) => (
          <UserCard
            title={title}
            body={body}
            userId={userId}
            id={id}
            key={key}
          />
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;