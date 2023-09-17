import User from "../models/user";
import CrudRepository from "./crud-repository";

class UserRepository extends CrudRepository {

    constructor() {
        super(User);
    }
}

export default UserRepository;