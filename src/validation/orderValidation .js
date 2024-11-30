import vine from '@vinejs/vine';

const OrderSchema = vine.compile(vine.object({
    user_id: vine.number().withoutDecimals(),
    total: vine.number().decimal([0, 2]),
}));

export { OrderSchema };
