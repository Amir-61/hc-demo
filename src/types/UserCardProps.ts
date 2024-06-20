export interface User {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    avatar: string;
    role: string;
    join_date: string;
    description: string;
  }
  
  export interface UserCardProps extends User {}