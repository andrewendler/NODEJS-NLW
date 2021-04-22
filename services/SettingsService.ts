import { getCustomRepository } from "typeorm";
import { settingsRepository } from "../repositories/settingsRepository";



interface ISettingsCreate {
    chat: boolean;
    username: string;
}


class SettingsService {
    static create: any;
    async create({ chat, username }: ISettingsCreate) {


        const settingRepository = getCustomRepository(settingsRepository);

        const userAlreadyExists = await settingsRepository.findOne({
            username
        });
        if (userAlreadyExists) {
            throw new Error("user alReady exists!");
        }

        const settings = settingRepository.create({
            chat,
            username,

        });

        await settingRepository.save(settings);

        return settings;



    }

}

export { SettingsService }