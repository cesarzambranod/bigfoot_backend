import vine from '@vinejs/vine';

const CartSchema = vine.compile(vine.object({
    user_id: vine.number().withoutDecimals()}));

export { CartSchema };
