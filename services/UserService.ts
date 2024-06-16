import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type findOneDataProp = {
    id?: number,
    email?: string
}

export const UserService = {
    
    // Method to find all users
    findAll: async () => {
       return await prisma.user.findMany();
    },
    
    // Method to find a single user by their id or email
    findOne: async (data: findOneDataProp) => {
        return await prisma.user.findUnique({
            where: {
                id: data.id // Finds the user by id; modify this to search by email if needed
            }
        });
    }

}
