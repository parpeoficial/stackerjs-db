import { Config } from 'stackerjs-utils';
import { existsSync } from 'fs';


const checkPackageExists = () => 
    existsSync(`${process.cwd()}/node_modules/${Config.get('db.driver')}`);


const loadPackageIfExists = () =>
    checkPackageExists() ? require(Config.get('db.driver')) : null;


export const DB = {

    'Factory': {
        'getConnection': () =>
        {
            let dbAdapter = loadPackageIfExists();
            if (dbAdapter)
                return dbAdapter.Connection;

            return null;
        },

        'getQueryBuilder': () =>
        {
            let dbAdapter = loadPackageIfExists();
            if (dbAdapter)
                return dbAdapter.QueryBuilder;

            return null;
        },

        'getQueryCriteria': () =>
        {
            let dbAdapter = loadPackageIfExists();
            if (dbAdapter)
                return dbAdapter.QueryCriteria;

            return null;
        }
    }

}