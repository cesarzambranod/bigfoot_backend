import vine from '@vinejs/vine';

const userSchema = vine.compile(vine.object({
    username: vine.string().minLength(3).maxLength(30),
    email: vine.string().email(),
    password_hash: vine.string().minLength(8),
    address: vine.string().maxLength(100),
    phone_number: vine.string().maxLength(15).mobile(),
    is_active: vine.boolean().optional(),
}));

export { userSchema };
