import { Config } from 'stackerjs-utils';
import { expect } from 'chai';
import { DB } from './../../lib';
import { execSync } from 'child_process';


describe('Unit/FactoryTest', function() 
{

    this.timeout(10000);    

    describe('With DB_DRIVER setted', () => 
    {
        before(() => 
        {
            execSync(`npm install stackerjs-db-mysql-adapter`);
            Config.set('db.driver', 'stackerjs-db-mysql-adapter')
        });

        it('Should load QueryBuilder', () => 
        {
            expect(DB.Factory.getQueryBuilder()).to.be.a('function');
        });

        it('Should load QueryCriteria', () => 
        {
            expect(DB.Factory.getQueryCriteria()).to.be.a('function');
        });

        it('Should return null if package is not installed', () => 
        {
            execSync('npm uninstall stackerjs-db-mysql-adapter');
            expect(DB.Factory.getQueryBuilder()).to.be.null;
        });

        after(() => Config.delete('db.driver'));
    });

    describe('Without DB_DRIVER setted', () => 
    {
        it('Should return null when loading Connection', () => 
        {
            expect(DB.Factory.getConnection()).to.be.null;
        });

        it('Should return null when loading QueryBuilder', () => 
        {
            expect(DB.Factory.getQueryBuilder()).to.be.null;
        });

        it('Should return null when loading QueryCriteria', () => 
        {
            expect(DB.Factory.getQueryCriteria()).to.be.null;
        });
    });

});