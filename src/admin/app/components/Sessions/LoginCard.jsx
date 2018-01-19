import React from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';

const LoginCard = () => (
  <Card>
    <CardMedia
      overlay={<CardTitle title="Our Alpaca" />}
    >
      <img src="https://img.4travel.jp/img/tcs/t/album/src/10/64/31/src_10643118.jpg?1328456736" alt="" height="100%" />
    </CardMedia>
  </Card>
);

export default LoginCard;
