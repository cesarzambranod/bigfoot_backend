import vine from '@vinejs/vine';

const UserSchema = vine.compile(vine.object({
    email: vine.string().email(),
    password_hash: vine.string().minLength(8),
}));

export { UserSchema };
