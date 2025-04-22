
interface Dictionary<T> {
  [key: string]: T;
  }
  
export interface TypeInfo{
  type: string,
  name: string,
  options?: any
}



export enum Role{
  admin = 'admin',
  customer = 'customer',
  manager = 'manager'
}

export enum Status {
  active = 'active',
  inactive = 'inactive',
  banned = 'banned'
}


export interface ImageLink{
  
  imageLink:string
}

export interface User{
    id: number,
    name: string,
    email: string,
    role: Role,
    status: Status,
    createdAt: Date,
    lastLogin: Date | undefined,
    isEmailVerified: boolean,
    avatarUrl: ImageLink,    
}



export const userSchema:Dictionary<TypeInfo> = {
  id: {type: 'number', name:  'رقم'},
  name: {type: 'string', name:  'اسم'},
  email: {type: 'string', name: 'ايميل'},
  role: {type: 'enum', options: Object.values(Role), name:  'صلاحية'},
  status: {type: 'enum', options: Object.values(Status), name:  'حالة'},
  createdAt: {type: 'date', name:  'تاريخ الإنشاء'},
  lastLogin: {type: 'date', name:  'اخر دخول'},
  isEmailVerified: {type: 'boolean', name:  'مسجل'},
  avatarUrl: {type: 'string', name:  'الصورة'},

}

export const USERS: User[] = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      role: Role.admin,
      status: Status.active,
      createdAt: new Date("2024-01-15T08:30:00Z"),
      lastLogin:  new Date("2024-06-01T12:15:00Z"),
      isEmailVerified: true,
      avatarUrl: { imageLink: "https://i.pravatar.cc/100?img=1"}
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      role: Role.customer,
      status: Status.banned,
      createdAt: new Date("2023-11-10T14:45:00Z"),
      lastLogin: undefined,
      isEmailVerified: false,
      avatarUrl: { imageLink: "https://i.pravatar.cc/100?img=2"}
    },
    {
      id: 3,
      name: "Sarah Lee",
      email: "sarah@example.com",
      role: Role.manager,
      status: Status.inactive,
      createdAt: new Date("2024-03-01T09:00:00Z"),
      lastLogin: new Date("2024-06-10T18:40:00Z"),
      isEmailVerified: true,
      avatarUrl: { imageLink: "https://i.pravatar.cc/100?img=3"}
    }
  ];
