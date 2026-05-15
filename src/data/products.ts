export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  category: string;
  style: string[];
  sizes: string[];
  colors: string[];
  image: string;
  badge?: string;
  isNew?: boolean;
  isTrend?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Oversized Hoodie VOLT",
    price: 4990,
    oldPrice: 6500,
    category: "Худи",
    style: ["streetwear", "casual"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#FF2D78", "#0A0A0A", "#FFFFFF"],
    image: "https://cdn.poehali.dev/projects/85d4ff09-27b6-419c-9c9d-532667dce132/files/66b994af-50e0-4973-9ed7-6c01c4f252f6.jpg",
    badge: "SALE",
    isNew: false,
    isTrend: true,
  },
  {
    id: 2,
    name: "Cargo Pants NEON",
    price: 5990,
    category: "Брюки",
    style: ["streetwear", "sport"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#1A1A1A", "#4A4A4A", "#FFE600"],
    image: "https://cdn.poehali.dev/projects/85d4ff09-27b6-419c-9c9d-532667dce132/files/66b994af-50e0-4973-9ed7-6c01c4f252f6.jpg",
    badge: "NEW",
    isNew: true,
    isTrend: true,
  },
  {
    id: 3,
    name: "Cropped Jacket ELECTRIC",
    price: 8990,
    category: "Куртки",
    style: ["club", "streetwear"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["#00D4FF", "#FF2D78"],
    image: "https://cdn.poehali.dev/projects/85d4ff09-27b6-419c-9c9d-532667dce132/files/66b994af-50e0-4973-9ed7-6c01c4f252f6.jpg",
    badge: "HOT",
    isNew: true,
    isTrend: true,
  },
  {
    id: 4,
    name: "Basic Tee ACID",
    price: 1990,
    oldPrice: 2500,
    category: "Футболки",
    style: ["casual", "sport"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["#FFE600", "#FFFFFF", "#0A0A0A", "#FF2D78"],
    image: "https://cdn.poehali.dev/projects/85d4ff09-27b6-419c-9c9d-532667dce132/files/66b994af-50e0-4973-9ed7-6c01c4f252f6.jpg",
    badge: "SALE",
    isNew: false,
    isTrend: false,
  },
  {
    id: 5,
    name: "Bomber CHROME",
    price: 11990,
    category: "Куртки",
    style: ["club", "streetwear"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["#C0C0C0", "#0A0A0A"],
    image: "https://cdn.poehali.dev/projects/85d4ff09-27b6-419c-9c9d-532667dce132/files/66b994af-50e0-4973-9ed7-6c01c4f252f6.jpg",
    badge: "NEW",
    isNew: true,
    isTrend: false,
  },
  {
    id: 6,
    name: "Joggers FLASH",
    price: 3490,
    category: "Брюки",
    style: ["sport", "casual"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#0A0A0A", "#FF2D78", "#00D4FF"],
    image: "https://cdn.poehali.dev/projects/85d4ff09-27b6-419c-9c9d-532667dce132/files/66b994af-50e0-4973-9ed7-6c01c4f252f6.jpg",
    isNew: false,
    isTrend: false,
  },
  {
    id: 7,
    name: "Zip-Up Hoodie STATIC",
    price: 5490,
    oldPrice: 7000,
    category: "Худи",
    style: ["streetwear", "casual"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["#2A2A2A", "#FFE600"],
    image: "https://cdn.poehali.dev/projects/85d4ff09-27b6-419c-9c9d-532667dce132/files/66b994af-50e0-4973-9ed7-6c01c4f252f6.jpg",
    badge: "SALE",
    isNew: false,
    isTrend: true,
  },
  {
    id: 8,
    name: "Mini Skirt SURGE",
    price: 2990,
    category: "Юбки",
    style: ["club", "casual"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["#FF2D78", "#0A0A0A", "#FFE600"],
    image: "https://cdn.poehali.dev/projects/85d4ff09-27b6-419c-9c9d-532667dce132/files/66b994af-50e0-4973-9ed7-6c01c4f252f6.jpg",
    badge: "NEW",
    isNew: true,
    isTrend: true,
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "5 трендов весны 2025: что носить прямо сейчас",
    excerpt: "Разбираем ключевые тренды сезона — от Y2K-эстетики до неонового минимализма.",
    date: "12 мая 2025",
    tag: "ТРЕНДЫ",
    readTime: "4 мин",
  },
  {
    id: 2,
    title: "Как собрать образ для клуба: гайд от VOLT",
    excerpt: "Рассказываем, как выглядеть ярко и чувствовать себя уверенно в любом пространстве.",
    date: "8 мая 2025",
    tag: "СТИЛЬ",
    readTime: "6 мин",
  },
  {
    id: 3,
    title: "Streetwear vs Sportswear: в чём разница и как их миксовать",
    excerpt: "Два стиля, которые давно вышли за рамки улицы и спортзала.",
    date: "3 мая 2025",
    tag: "КУЛЬТУРА",
    readTime: "5 мин",
  },
];

export const CATEGORIES = ["Все", "Худи", "Футболки", "Брюки", "Куртки", "Юбки"];
export const STYLES = ["streetwear", "casual", "sport", "club"];
export const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
export const COLORS_MAP: Record<string, string> = {
  "#FF2D78": "Розовый",
  "#0A0A0A": "Чёрный",
  "#FFFFFF": "Белый",
  "#FFE600": "Жёлтый",
  "#00D4FF": "Голубой",
  "#1A1A1A": "Тёмный",
  "#4A4A4A": "Серый",
  "#C0C0C0": "Серебро",
  "#2A2A2A": "Графит",
};
