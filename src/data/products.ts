import { Dictionary, ImageLink, TypeInfo } from "./Dictionary";

enum Status {
  available ='available',
  outOfStock = 'out-of-stock',
  archived = 'archived',
} 
  


export interface Product{
    id: number,
    name: string,
    description: string,
    price: number,
    category: string,
    stock: number,
    status: Status,
    rating: Number,
    imageUrl: ImageLink,    
    createdAt: Date,
    updatedAt: Date | undefined,
    // tags: string[],
}


export const productSchema: Dictionary<TypeInfo> = {
  id: { type: 'number', name: 'رقم' },
  name: { type: 'string', name: 'اسم' },
  description: { type: 'string', name: 'صفة' },
  price: { type: 'number', name: 'سعر' },
  category: { type: 'string', name: 'نوع' },
  stock: { type: 'number', name: 'عدد' },
  status: { type: 'enum', options: Object.values(Status), name: 'حالة' },
  rating: { type: 'number', name: 'تقيم' },
  imageUrl: { type: 'string', name: 'الصورة' },
  createdAt: { type: 'date', name: 'تاريخ الإنشاء' },
  updatedAt: { type: 'date', name: 'تاريخ التعديل' },
  // tags: { type: 'stringList', name: 'انواع' },
};


export const PRODUCTS:Product[] = [
    {
      id: 1,
      name: "Wireless Mouse",
      description: "Ergonomic wireless mouse with USB receiver",
      price: 29.99,
      category: "Electronics",
      stock: 120,
      status: Status.available,
      rating: 4.5,
      imageUrl: { imageLink: "https://picsum.photos/seed/mouse/150/150"},
      createdAt: new Date("2024-04-01T10:00:00Z"),
      updatedAt: new Date("2024-06-10T15:25:00Z"),
      // tags: ["bestseller", "tech", "accessories"]
    },
    {
      id: 2,
      name: "Basic T-shirt",
      description: "100% cotton T-shirt in various colors",
      price: 15.00,
      category: "Apparel",
      stock: 0,
      status: Status.outOfStock,
      rating: 3.8,
      imageUrl: { imageLink: "https://picsum.photos/seed/tshirt/150/150"},
      createdAt: new Date("2024-01-20T13:15:00Z"),
      updatedAt: new Date("2024-05-28T11:10:00Z"),
      // tags: ["clearance", "clothing"]
    },
    {
      id: 3,
      name: "Standing Desk",
      description: "Adjustable height desk ideal for home offices",
      price: 199.99,
      category: "Furniture",
      stock: 20,
      status: Status.archived,
      rating: 4.9,
      imageUrl: { imageLink: "https://picsum.photos/seed/desk/150/150"},
      createdAt: new Date("2024-02-10T08:00:00Z"),
      updatedAt: new Date("2024-06-01T09:45:00Z"),
      // tags: ["office", "ergonomic"]
    }
  ];

