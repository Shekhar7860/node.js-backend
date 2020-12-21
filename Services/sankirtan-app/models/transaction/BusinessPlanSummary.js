const Group = require('../common/Group');
const People = require('../common/People');
const GoalDescription= require('../transaction/GoalDescription');
const Sq = require('sequelize');
const sequelize = require('../../dbconfig');
const BusinessPlanSummary = sequelize.define(
	'business_plan_summary',
	{
		id: { type: Sq.INTEGER, autoIncrement: true, primaryKey: true },
		year: Sq.NUMBER,
		group_id: Sq.INTEGER,
		distributor_id: Sq.INTEGER,
		msf_book_points_goal: Sq.STRING,
		msf_bbt_amount_goal: Sq.STRING,
		msf_group_amount_goal: Sq.STRING,

		monthly_book_points_goal: Sq.STRING,
		monthly_bbt_amount_goal: Sq.STRING,
		monthly_group_amount_goal: Sq.STRING,

		msf_actual_book_points: Sq.STRING,
		msf_actual_bbt_amount: Sq.STRING,
		msf_actual_group_amount: Sq.STRING,

		monthly_actual_book_points: Sq.STRING,
		monthly_actual_bbt_amount: Sq.STRING,
		monthly_actual_group_amount: Sq.STRING,

		msf_book_points_goal_roll_up: Sq.STRING,
		msf_bbt_amount_goal_roll_up: Sq.STRING,
		msf_group_amount_goal_roll_up: Sq.STRING,

		monthly_book_points_goal_roll_up: Sq.STRING,
		monthly_bbt_amount_goal_roll_up: Sq.STRING,
		monthly_group_amount_goal_roll_up: Sq.STRING,

		msf_actual_book_points_roll_up: Sq.STRING,
		msf_actual_bbt_amount_roll_up: Sq.STRING,
		msf_actual_group_amount_roll_up: Sq.STRING,

		monthly_actual_book_points_roll_up: Sq.STRING,
		monthly_actual_bbt_amount_roll_up: Sq.STRING,
		monthly_actual_group_amount_roll_up: Sq.STRING,

		msf_book_points_goal_total: Sq.STRING,
		msf_bbt_amount_goal_total: Sq.STRING,
		msf_group_amount_goal_total: Sq.STRING,

		monthly_book_points_goal_total: Sq.STRING,
		monthly_bbt_amount_goal_total: Sq.STRING,
		monthly_group_amount_goal_total: Sq.STRING,

		msf_actual_book_points_total: Sq.STRING,
		msf_actual_bbt_amount_total: Sq.STRING,
		msf_actual_group_amount_total: Sq.STRING,

		monthly_actual_book_points_total: Sq.STRING,
		monthly_actual_bbt_amount_total: Sq.STRING,
		monthly_actual_group_amount_total: Sq.STRING,

		annual_book_points_goal_roll_up: Sq.INTEGER,
		annual_bbt_amount_goal_roll_up: Sq.DOUBLE,
		annual_group_amount_goal_roll_up: Sq.DOUBLE,

		annual_actual_book_points_roll_up: Sq.INTEGER,
		annual_actual_bbt_amount_roll_up: Sq.DOUBLE,
		annual_actual_group_amount_roll_up: Sq.DOUBLE,

		annual_book_points_goal: Sq.INTEGER,
		annual_bbt_amount_goal: Sq.DOUBLE,
		annual_group_amount_goal: Sq.DOUBLE,

		annual_actual_book_points: Sq.INTEGER,
		annual_actual_bbt_amount: Sq.DOUBLE,
		annual_actual_group_amount: Sq.DOUBLE,

		annual_book_points_goal_total: Sq.INTEGER,
		annual_bbt_amount_goal_total: Sq.DOUBLE,
		annual_group_amount_goal_total: Sq.DOUBLE,

		annual_actual_book_points_total: Sq.INTEGER,
		annual_actual_bbt_amount_total: Sq.DOUBLE,
		annual_actual_group_amount_total: Sq.DOUBLE,

		msf_actual_book_points_book_type_total: Sq.STRING, // Index Sequence: M-Big, Big, Full, Med, Small, BTG
		monthly_actual_book_points_book_type_total: Sq.STRING,
		annual_actual_book_points_book_type_total: Sq.INTEGER,
		goal_description: Sq.STRING,
		// year_goal_description: Sq.STRING,
		organization_id: Sq.INTEGER,
		created_by_id: Sq.INTEGER,
		period_id: Sq.INTEGER,
		last_modified_by_id: Sq.INTEGER,
	},
	{
		freezeTableName: true,
		schema: 'transaction',
		createdAt: 'created_date',
		updatedAt: 'last_modified_date',
	}
);
BusinessPlanSummary.belongsTo(Group, {
	foreignKey: 'group_id',
});
BusinessPlanSummary.belongsTo(People, {
    as: 'createdBy',
    foreignKey: 'created_by_id'
});
BusinessPlanSummary.belongsTo(People, {
    as: 'modifiedBy',
    foreignKey: 'last_modified_by_id'
});

module.exports = BusinessPlanSummary;
