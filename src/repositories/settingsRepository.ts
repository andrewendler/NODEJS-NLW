import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../entities/settings";


@EntityRepository(Setting)
class settingsRepository extends Repository<Setting>{ }

export { settingsRepository };