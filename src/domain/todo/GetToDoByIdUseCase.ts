import { IToDosRepository } from "../../ports/IToDosRepository";

export default class GetToDoByIdUseCase {
    private readonly toDosRepository: IToDosRepository;

    constructor(transactionsRepository: IToDosRepository) {
        this.toDosRepository = transactionsRepository;
    }

    async execute(toDoId: string) {
        return await this.toDosRepository.getById(toDoId);
    }
}