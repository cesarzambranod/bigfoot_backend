import vine from '@vinejs/vine';

const ProductSchema = vine.compile(vine.object({
    name: vine.string().minLength(3).maxLength(30),
    description: vine.string(),
    price: vine.number().decimal([0, 2]),
    stock: vine.number().withoutDecimals(),
    is_active: vine.boolean().optional(),
}));

export { ProductSchema };
