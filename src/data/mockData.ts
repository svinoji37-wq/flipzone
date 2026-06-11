import { faker } from '@faker-js/faker';
import { Product } from '../types';

export const CATEGORIES = ['Fashion', 'Jewelry', 'Electronics', 'Home & Living', 'Beauty'];

interface ProductTemplate {
  name: string;
  images: string[];
  descriptionPrefix: string;
}

const PRODUCT_TEMPLATES: Record<string, ProductTemplate[]> = {
  'Fashion': [
    {
      name: 'Premium Cotton T-Shirt',
      images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab'],
      descriptionPrefix: 'A comfortable and stylish cotton tee'
    },
    {
      name: 'Elegant Summer Dress',
      images: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f'],
      descriptionPrefix: 'Perfect for sunny days and garden parties'
    },
    {
      name: 'Classic Denim Jacket',
      images: ['https://images.unsplash.com/photo-1523205771623-e0faa4d2813d'],
      descriptionPrefix: 'A timeless piece for any wardrobe'
    },
    {
      name: 'Urban Streetwear Hoodie',
      images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7'],
      descriptionPrefix: 'Modern comfort meets street style'
    },
    {
      name: 'Leather Chelsea Boots',
      images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff'],
      descriptionPrefix: 'Durable and stylish leather footwear'
    },
    {
      name: 'Designer Sunglasses',
      images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f'],
      descriptionPrefix: 'Protect your eyes with premium style'
    }
  ],
  'Jewelry': [
    {
      name: '18K Gold Necklace',
      images: ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338'],
      descriptionPrefix: 'Exquisite craftsmanship in pure gold'
    },
    {
      name: 'Diamond Engagement Ring',
      images: ['https://images.unsplash.com/photo-1601121141461-9d6647bca1ed'],
      descriptionPrefix: 'A brilliant symbol of eternal love'
    },
    {
      name: 'Silver Charm Bracelet',
      images: ['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908'],
      descriptionPrefix: 'Elegant silver links with delicate charms'
    },
    {
      name: 'Pearl Drop Earrings',
      images: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f'],
      descriptionPrefix: 'Classic pearls for a sophisticated look'
    },
    {
      name: 'Luxury Chronograph Watch',
      images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314'],
      descriptionPrefix: 'Precision engineering meets timeless design'
    }
  ],
  'Electronics': [
    {
      name: 'Noise Cancelling Headphones',
      images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e'],
      descriptionPrefix: 'Immersive sound with advanced ANC technology'
    },
    {
      name: 'Smart Fitness Watch',
      images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30'],
      descriptionPrefix: 'Track your health and stay connected'
    },
    {
      name: 'Ultra-Thin Laptop Pro',
      images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853'],
      descriptionPrefix: 'Powerful performance in a sleek design'
    },
    {
      name: 'Mechanical Gaming Keyboard',
      images: ['https://images.unsplash.com/photo-1511467687858-23d96c32e4ae'],
      descriptionPrefix: 'Tactile feedback for the ultimate gaming experience'
    },
    {
      name: '4K Mirrorless Camera',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32'],
      descriptionPrefix: 'Capture every detail in stunning resolution'
    }
  ],
  'Home & Living': [
    {
      name: 'Modern Velvet Sofa',
      images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc'],
      descriptionPrefix: 'Luxurious comfort for your living room'
    },
    {
      name: 'Ceramic Vase Set',
      images: ['https://images.unsplash.com/photo-1581783898377-1c85bf937427'],
      descriptionPrefix: 'Handcrafted vases for modern decor'
    },
    {
      name: 'Minimalist Desk Lamp',
      images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c'],
      descriptionPrefix: 'Sleek lighting for your workspace'
    },
    {
      name: 'Aromatic Candle Collection',
      images: ['https://images.unsplash.com/photo-1603006905003-be475563bc59'],
      descriptionPrefix: 'Set the mood with soothing scents'
    },
    {
      name: 'Ergonomic Office Chair',
      images: ['https://images.unsplash.com/photo-1505797149-43b007662c21'],
      descriptionPrefix: 'Work in comfort with full lumbar support'
    }
  ],
  'Beauty': [
    {
      name: 'Hydrating Face Serum',
      images: ['https://images.unsplash.com/photo-1570172619644-dfd03ed5d881'],
      descriptionPrefix: 'Deep hydration for glowing skin'
    },
    {
      name: 'Matte Liquid Lipstick',
      images: ['https://images.unsplash.com/photo-1586776977607-310e9c725c37'],
      descriptionPrefix: 'Long-lasting color with a velvety finish'
    },
    {
      name: 'Organic Night Cream',
      images: ['https://images.unsplash.com/photo-1556228720-195a672e8a03'],
      descriptionPrefix: 'Rejuvenate your skin while you sleep'
    },
    {
      name: 'Professional Brush Set',
      images: ['https://images.unsplash.com/photo-1522338223523-dcacaf132d93'],
      descriptionPrefix: 'Everything you need for a flawless look'
    },
    {
      name: 'Natural Clay Mask',
      images: ['https://images.unsplash.com/photo-1596755389378-c31d21fd1273'],
      descriptionPrefix: 'Purify and detoxify your pores'
    }
  ]
};

const generateProducts = (count: number): Product[] => {
  return Array.from({ length: count }).map((_, index) => {
    const category = faker.helpers.arrayElement(CATEGORIES);
    const templates = PRODUCT_TEMPLATES[category];
    const template = faker.helpers.arrayElement(templates);
    const baseImage = faker.helpers.arrayElement(template.images);
    
    // Ensure uniqueness by adding a unique signature and index to the URL
    const uniqueImage = `${baseImage}?auto=format&fit=crop&q=80&w=800&sig=${faker.string.uuid()}-${index}`;
    
    return {
      id: faker.string.uuid(),
      name: `${template.name} ${index + 1}`, // Adding index to name for further uniqueness
      description: `${template.descriptionPrefix}. ${faker.commerce.productDescription()}`,
      price: parseFloat(faker.commerce.price({ min: 15, max: 2000 })),
      category: category,
      image: uniqueImage,
      rating: faker.number.float({ min: 4.2, max: 5, fractionDigits: 1 }),
      reviews: faker.number.int({ min: 50, max: 2500 }),
      stock: faker.number.int({ min: 5, max: 150 }),
    };
  });
};

export const products = generateProducts(60);
