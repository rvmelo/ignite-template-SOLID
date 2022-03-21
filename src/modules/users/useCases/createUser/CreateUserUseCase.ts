import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    name: string;
    email: string;
}

class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ email, name }: IRequest): User {
        const foundUser = this.usersRepository.findByEmail(email);

        if (foundUser) {
            throw new Error("Esse email já existe");
        }

        const user = this.usersRepository.create({ name, email });
        return user;
    }
}

export { CreateUserUseCase };
