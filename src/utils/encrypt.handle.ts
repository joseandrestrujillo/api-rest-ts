import { hash, compare } from "bcryptjs";

const encrypt = async (plainPassword: string) => {
    const passwordHash = await hash(plainPassword, 8);
    return passwordHash;
}

const verified = async (plainPassword: string, passwordHash:string) => {
    const isCorrect = await compare(plainPassword, passwordHash);
    return isCorrect;
}

export { encrypt, verified };