import { DataTypes, Model } from 'sequelize';
import db from '.';
import CnpjModel from './Cnpj.model';

class BuyerModel extends Model {
  public id!: number;

  public name!: string;

  public tradingName!: string;

  public cashforceTax!: string;

  public responsibleName!: string;

  public responsibleEmail!: string;

  public responsiblePosition!: string;

  public responsiblePhone!: string;

  public responsibleMobile!: string;

  public website!: string;

  public postalCode!: string;

  public address!: string;

  public number!: string;

  public complement!: string;

  public neighborhood!: string;

  public city!: string;

  public state!: string;

  public phoneNumber!: string;

  public situation!: string;

  public situationDate!: string;

  public cnpjId!: number;

  public confirm!: number;

  public email!: string;
}

BuyerModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tradingName: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    cashforceTax: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    responsibleName: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    responsibleEmail: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    responsiblePosition: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    responsiblePhone: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    responsibleMobile: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    complement: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    situation: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    situationDate: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    cnpjId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    confirm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize: db,
    underscored: false,
    timestamps: true,
    modelName: 'buyer',
    tableName: 'buyers',
  },
);

BuyerModel.hasOne(CnpjModel, { foreignKey: 'cnpjId', as: 'CNPJ' });
CnpjModel.belongsTo(BuyerModel, { foreignKey: 'cnpjId', as: 'buyer' });

export default BuyerModel;
