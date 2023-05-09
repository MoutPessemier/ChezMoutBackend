import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelize } from '../index';

interface FoodModel extends Model<InferAttributes<FoodModel>, InferCreationAttributes<FoodModel>> {
  id: CreationOptional<number>;
  name: string;
  description: string;
  imgUrl: string;
  nrOfRatings: number;
  rating: number;
}

const FoodModel = sequelize.define<FoodModel>(
  'food',
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    imgUrl: { type: DataTypes.STRING, allowNull: false },
    nrOfRatings: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    rating: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  },
  {
    timestamps: true,
    createdAt: false,
    updatedAt: 'updateTimeStamp',
  }
);

export default FoodModel;
