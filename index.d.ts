import { StackerJS } from "stackerjs-types";


declare module "stackerjs-db"
{

    export namespace DB
    {

        export namespace Factory
        {

            function getConnection():StackerJS.DB.Connection;

            function getQueryBuilder():StackerJS.DB.QueryBuilder;
            
            function getQueryCriteria():StackerJS.DB.QueryCriteria;

        }

    }

}