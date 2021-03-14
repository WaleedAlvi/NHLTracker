import React from 'react';
import { IGameStatus } from '../../app/models/gameStatus';
import GameScore from './GameScore';
import { observer } from 'mobx-react-lite';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface IProps {
  games: IGameStatus[];
}

const GamesByDate: React.FC<IProps> = ({ games }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel responsive={responsive}>
      {games.map((game, index) => {
        return <GameScore key={index} game={game}></GameScore>;
      })}
    </Carousel>
  );
};

export default observer(GamesByDate);
