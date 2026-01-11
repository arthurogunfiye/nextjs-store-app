import { z, ZodSchema } from 'zod';

export const productSchema = z.object({
  name: z
    .string()
    .min(4, { message: 'Product Name must be at least 4 characters long' })
    .max(100, { message: 'Product Name must not exceed 100 characters' }),
  company: z.string(),
  price: z.coerce
    .number()
    .int()
    .min(0, { message: 'Price must be a positive number' }),
  description: z.string().refine(
    description => {
      const wordCount = description.split(' ').length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: 'Product Description must be between 10 and 1000 words'
    }
  ),
  featured: z.coerce.boolean()
});

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map(error => error.message);
    throw new Error(errors.join(', '));
  }

  return result.data;
}
