import bcrypt from "bcryptjs";

export async function generateHash(text: string) {
   const salt = await bcrypt.genSalt(10)
   const hash = await bcrypt.hash(text, salt)
   return hash
}

export async function verifyHash(text:string, cipher: string) {
    const result = await bcrypt.compare(text, cipher)
    return result
}