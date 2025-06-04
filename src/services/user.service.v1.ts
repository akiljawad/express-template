import {CreateUserDto, DeleteUserDto, GetUserDto, UpdateUserDto} from "@dtos";
import {Users} from "@entities";
import {userRepository} from "@config/db";
import {BadRequestError} from "@common/errors";

export const userServiceV1 = {
    createUser: async (data: CreateUserDto): Promise<Users> => {
        const {name, password, email} = data;
        const userExist = await userRepository.findOne({where: {email}});
        if (userExist) {
            throw new BadRequestError("User already exists");
        }
        const newUser = userRepository.create(data);
        return userRepository.save(newUser);
    },
    getAllUsers: async (): Promise<Users[]> => {
        return await userRepository.find();
    },
    getUser: async (data: GetUserDto): Promise<Users> => {
        const {id} = data
        const user = await userRepository.findOne({where: {id}});
        if (!user) {
            throw new BadRequestError("User does not exist");
        }
        return user
    },
    updateUser: async (data: UpdateUserDto): Promise<Users> => {
        const {id, ...updateUser} = data
        const user = await userRepository.findOne({where: {id}});
        if (!user) {
            throw new BadRequestError("User does not exist");
        }
        return await userRepository.save(updateUser);
    },
    deleteUser: async (data: DeleteUserDto): Promise<Users> => {
        const {id} = data
        const user = await userRepository.findOne({where: {id}});
        if (!user) {
            throw new BadRequestError("User does not exist");
        }
        return await userRepository.remove(user);
    }
}