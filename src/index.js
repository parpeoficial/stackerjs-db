import { Config } from 'stackerjs-utils';
import { existsSync } from 'fs';


const checkPackageExists = () => 
    existsSync(`${process.cwd()}/node_modules/${Config.get('db.driver')}`);


const loadPackageIfExists = () =>
    checkPackageExists() ? require(Config.get('db.driver')) : null;


export const DB = {

    'conn': null,

    'Factory': {
        'getConnection': () =>
        {
            let dbAdapter = loadPackageIfExists();
            if (dbAdapter)
                DB.conn = new dbAdapter.Connection();


            if (!dbAdapter)
                DB.conn = null;

            return DB.conn;
        },

        'getQueryBuilder': () =>
        {
            let dbAdapter = loadPackageIfExists();
            if (dbAdapter)
                return new dbAdapter.QueryBuilder();

            return null;
        },

        'getQueryCriteria': () =>
        {
            let dbAdapter = loadPackageIfExists();
            if (dbAdapter)
                return new dbAdapter.QueryCriteria();

            return null;
        }
    }

}