import db from './../config/database';
import UserGroup from './../models/UserGroup';

class UserGroupData {
    constructor(model) {
        this.model = model;
    }
    create(data) {
        return db.sequelize.transaction(t => {
            console.log('in transaction');

            return this.model.bulkCreate(data, {
                transaction: t
            });
        });
    }
}

export default new UserGroupData(UserGroup);
