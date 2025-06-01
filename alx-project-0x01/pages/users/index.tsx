import React from 'react'
import Header from "@/components/layout/Header";
import UserCard from '@/components/common/UserCard';

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type UserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address?: Address;
  company?: Company;
};

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
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
          {users?.map(({ id, name, username, email, phone, website, address, company }: UserProps) => (
            <UserCard
              id={id}
              name={name}
              username={username}
              email={email}
              phone={phone}
              website={website}
              address={
                address ?? {
                  street: "",
                  suite: "",
                  city: "",
                  zipcode: "",
                  geo: { lat: "", lng: "" }
                }
              }
                company={
                    company ?? {
                    name: "",
                    catchPhrase: "",
                    bs: ""
                    }
                }
              key={id}
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

export default Users