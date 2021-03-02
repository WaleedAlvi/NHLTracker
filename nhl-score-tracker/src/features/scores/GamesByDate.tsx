import React from 'react';
import { IGameStatus } from '../../app/models/gameStatus';
import GameScore from './GameScore';
import { observer } from 'mobx-react-lite';

interface IProps {
  games: IGameStatus[];
}

const GamesByDate: React.FC<IProps> = ({ games }) => {
  return <div>{games.map((game) => {})}</div>;
};

export default observer(GamesByDate);
